import fs from "fs";
import yaml from "node-yaml";

const toolCopyPath = `${process.cwd()}/copy/tools`;

async function readTools() {
  const files = fs.readdirSync(toolCopyPath);
  const ids = files
    .filter((filename) => filename.endsWith(".yml"))
    .map((filename) => filename.split(".")[0]);

  const tools = {};
  const extendedTools = {};

  for (const id of ids) {
    tools[id] = await readTool(id);
  }

  for (const id of ids) {
    extendedTools[id] = await extendTool(tools[id], tools);
  }

  return extendedTools;
}

async function readTool(id) {
  const tool = await yaml.read(`${toolCopyPath}/${id}.yml`);
  return { id, ...tool };
}

async function extendTool(tool, tools) {
  const positionsByStars = Object.values(tools)
    .map((t) => ({ key: t.id, value: t.github_data?.stars }))
    .sort(compare);

  tool.positions = {
    total: Object.keys(tools).length,
    stars:
      1 +
      positionsByStars.findIndex(
        (pair) => pair.value === tool.github_data?.stars
      ),
  };

  tool.percentages = {
    stale_issues:
      tool.github_data?.issues > 0
        ? 100 *
          (
            (tool.github_data?.stale_issues || 0) / tool.github_data?.issues
          ).toFixed(2)
        : 0,
  };

  return tool;
}

function compare(a, b) {
  return (b.value || 0) - (a.value || 0);
}

export async function getTools() {
  const tools = await readTools();
  return Object.values(tools);
}

export async function getTool(id) {
  const tools = await readTools();
  return tools[id];
}
