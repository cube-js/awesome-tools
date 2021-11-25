const fetch = require("node-fetch");
require("dotenv").config();

const getGithubData = async (githubSlug) => {
  if (!githubSlug) {
    return null;
  }
  const headers = {
    headers: {
      Authorization: `token ${process.env.ACCESS_TOKEN_GITHUB}`,
    },
  };
  let repo = null;
  let contributors = null;
  let releases = null;
  let issues = null;
  let stale_issues = null;
  let stale_date = getStaleDate();

  try {
    issues = await loadJSON(
      `https://api.github.com/search/issues?q=repo:${githubSlug}+type:issue+state:open&per_page=1`,
      headers
    );
    stale_issues = await loadJSON(
      `https://api.github.com/search/issues?q=repo:${githubSlug}+type:issue+created:<${stale_date}+state:open&per_page=1`,
      headers
    );
    repo = await loadJSON(
      `https://api.github.com/repos/${githubSlug}`,
      headers
    );
    contributors = await loadHeaders(
      `https://api.github.com/repos/${githubSlug}/contributors?per_page=1&anon=true`,
      headers
    );
    releases = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/releases`,
      headers
    );
  } catch (e) {
    throw new Error(e);
  }

  if (
    repo.message ||
    releases.message ||
    issues.message ||
    stale_issues.message ||
    contributors.message
  ) {
    throw new Error(
      `Bad request: ${
        repo.message ||
        releases.message ||
        issues.message ||
        stale_issues.message ||
        contributors.message
      }`
    );
  }

  return {
    stars: repo?.stargazers_count,
    contributors: getContributorsByResponseHeaders(contributors),
    issues: issues?.total_count,
    stale_issues: stale_issues?.total_count,
    last_release: {
      date: releases?.[0]?.published_at || null,
      link: releases?.[0]?.html_url || null,
    },
  };
};

const getStackoverflowDataByTags = async (tags) => {
  if (!tags) {
    return null;
  }
  // const headers = {};
  let result = 0;
  try {
    await asyncForEach(tags, async (tag) => {
      const response = await loadJSON(
        `https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&inname=${tag}&site=stackoverflow`
      );

      response?.items?.forEach((item) => {
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
async function loadHeaders(url, headers) {
  try {
    const res = await fetch(url, headers);
    return await res.headers.get("Link");
  } catch (e) {
    throw new Error(e);
  }
}

function getStaleDate() {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  return date.toISOString().split("T")[0];
}

function getContributorsByResponseHeaders(str) {
  if (!str) {
    return null;
  }
  let newStr = str.slice(str.indexOf('rel="next"'));
  let start = newStr.indexOf("&page=");
  let end = newStr.length - 13;
  let result = newStr.slice(start, end);
  let numb = result.match(/\d/g);
  return parseInt(numb.join(""));
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.getGithubData = getGithubData;
exports.getStackoverflowDataByTags = getStackoverflowDataByTags;
