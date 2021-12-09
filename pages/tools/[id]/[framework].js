import React from "react";
import ToolPage from '../../../components/ToolPage/ToolPage';

import fs from "fs";
import { toolCopyPath, getTool } from "../../../data/tools";
import frameworks from "../../../data/frameworks";
import ToolPageForFramework from '../../../components/ToolPage/ToolPageForFramework';

export default function Tool(props) {
  return (
    <ToolPageForFramework {...props} />
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(toolCopyPath);
  const ids = files
    .filter((filename) => filename.endsWith(".yml"))
    .map((filename) => filename.split(".")[0]);

  const paths = ids.map(id => Object.values(frameworks).map(framework => ({
    params: {
      id,
      framework: framework.slug,
    },
  }))).flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tool = await getTool(params.id);

  return {
    props: {
      id: params.id,
      framework: params.framework,
      ...tool,
    },
  };
}
