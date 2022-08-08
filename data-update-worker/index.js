const yaml = require("node-yaml");
const fs = require("fs");
const get = require("./fetchData.js");
const { notifySlackUpdateFailures } = require("./notifySlack.js");

const files = fs.readdirSync("../copy/tools");
const ids = files
  .filter((filename) => filename.endsWith(".yml"))
  .map((filename) => filename.split(".")[0]);

let failures = [];

asyncForEach(ids, async (id) => {
  try {
    const file = await yaml.read(`../copy/tools/${id}.yml`);
    file.github_data = await get.getGithubData(file?.slugs?.github);

    file.stackoverflow_data = await get.getStackoverflowDataByTags(
      file?.tags?.stackoverflow
    );

    await yaml.write(`../copy/tools/${id}.yml`, file);
    console.log(id, "success");

    // sleep
    await new Promise((resolve) => setTimeout(resolve, 15000));
  } catch (e) {
    console.log(`${id}`, e);
    failures.push({
      id,
      error: e,
    });
  }
}).then(() => {
  if (failures.length) {
    return notifySlackUpdateFailures(failures);
  }
});

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
