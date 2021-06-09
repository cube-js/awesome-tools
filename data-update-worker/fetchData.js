const fetch = require("node-fetch");
require("dotenv").config();

const getGithubData = async (githubSlug) => {
  const headers = {
    headers: {
      Authorization: `token ${process.env.API_TOKEN}`,
    },
  };
  let repo = null;
  let contributors = null;
  let releases = null;
  let issues = null;

  try {
    repo = await loadJSON(
      `https://api.github.com/repos/${githubSlug}`,
      headers
    );
    contributors = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/contributors`,
      headers
    );
    releases = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/releases`,
      headers
    );
    issues = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/issues`,
      headers
    );
  } catch (e) {
    throw new Error(e);
  }
  // error check
  if (
    (repo.message, contributors.message || releases.message || issues.message)
  ) {
    throw new Error(
      "Bad request: " + repo.message ||
        contributors.message ||
        releases.message ||
        issues.message
    );
  }
  return {
    stars: repo?.stargazers_count,
    contributors: contributors?.length,
    issues: repo?.open_issues,
    stale_issues: getStaleIssues(issues, repo?.open_issues),
    last_release: {
      date: releases?.[0]?.published_at,
      link: releases?.[0]?.html_url,
    },
  };
};
// const getTweetsByHashtag = async (tags) => {
//   const headers = {
//     Authorization: "Bearer",
//   };
//   const result = [];

//   try {
//     if (tags) {
//       tags.forEach((tag) => {
//         const posts = await loadJSON(
//           `https//api.twitter.com/1.1/search/tweets.json?q=%23${tag}`,
//           headers
//         );
//         if (posts) {
//           console.log(posts);
//         }
//       });
//     }
//   } catch (e) {
//     throw new Error(e);
//   }
//   return result;
// };
const getStackoverflowDataByTags = async (tags) => {
  // const headers = {};
  let result = 0;
  try {
    await asyncForEach(tags, async (tag) => {
      const response = await loadJSON(
        `https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&inname=${tag}&site=stackoverflow`
      );
      console.log(response);
      response.items.forEach((item) => {
        if (item.name === tag && item.count) {
          result += item.count;
        }
      });
    });
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
  return {
    questions_count: result,
  };
};

async function loadJSON(url, headers) {
  try {
    const res = await fetch(url, headers);
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}
function getStaleIssues(issues, open_issues) {
  if (!issues || typeof open_issues !== "number") {
    return null;
  }
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  const newIssues = issues.filter((issue) => {
    if (issue.state === "open" && date < new Date(issue.created_at)) {
      return true;
    }
  });
  return open_issues - newIssues.length;
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.getGithubData = getGithubData;
exports.getStackoverflowDataByTags = getStackoverflowDataByTags;
