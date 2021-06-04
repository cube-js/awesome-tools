const yaml = require("node-yaml");
const fs = require("fs");
const get = require("./fetchData.js");

const files = fs.readdirSync("../copy/tools");
const ids = files
  .filter((filename) => filename.endsWith(".yml"))
  .map((filename) => filename.split(".")[0]);

ids.forEach(async (id) => {
  try {
    const file = yaml.read(`../copy/tools/${id}.yml`);

    file.github_data = await get.getGithubData(file.slugs.github);

    await yaml.write(`../copy/tools/${id}.yml`, file);
    console.log(id, " success");
  } catch (e) {
    console.log(e);
  }
});
