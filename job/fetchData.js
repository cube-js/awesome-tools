const fetch = require("node-fetch");

const getGithubData = async (githubSlug) => {
  let repo = null;
  let contributors = null;
  let releases = null;
  let issues = null;
  try {
    repo = await loadJSON(`https://api.github.com/repos/${githubSlug}`);
    contributors = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/contributors`
    );
    releases = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/releases`
    );
    issues = await loadJSON(
      `https://api.github.com/repos/${githubSlug}/issues`
    );
  } catch (e) {
    throw new Error(e);
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

async function loadJSON(url) {
  try {
    const res = await fetch(url);
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

exports.getGithubData = getGithubData;
