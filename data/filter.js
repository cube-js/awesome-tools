const filter = (tools, framework, language, license, exploreTools) => {
  const filtered = tools.filter((tool) => {
    let isValid = true;
    // let isValidLanguage = true;
    // let isValidLicense = true;
    // let isValidType = true;

    // console.log(tool);
    if (exploreTools.length && isValid) {
      let hasInclude = 0;
      tool.types.forEach((type) => {
        if (exploreTools.includes(type.toLowerCase())) {
          hasInclude++;
        }
      });
      isValid = exploreTools.length === hasInclude;
    }
    if (framework.length && isValid) {
      let hasInclude = 0;
      tool.frameworks.forEach((fr) => {
        if (framework.includes(fr.toLowerCase())) {
          hasInclude++;
        }
      });
      isValid = framework.length === hasInclude;
    }
    if (language.length && isValid) {
      let hasInclude = 0;
      tool.languages.forEach((lg) => {
        if (language.includes(lg.toLowerCase())) {
          hasInclude++;
        }
      });
      isValid = language.length === hasInclude;
    }
    if (license.length && isValid) {
      let hasInclude = 0;
      tool.licenses.forEach((obj) => {
        if (license.includes(obj.type.toLowerCase())) {
          hasInclude++;
        }
      });
      isValid = license.length === hasInclude;
    }
    return isValid;
  });

  return filtered.sort(getComparator(filtered));
};

function getComparator(tools) {
  const maxFeatureScores = getMaxFeatureScores(tools);

  return function(a, b) {
    const aHasMaxFeatureScore = hasMaxFeatureScore(a, maxFeatureScores);
    const bHasMaxFeatureScore = hasMaxFeatureScore(b, maxFeatureScores);

    // Adding 1,000,000 to the number of GitHub stars is going to pull the tool up to the top.
    // As of 2021-06-01, freeCodeCamp/freeCodeCamp has 325,000 stars
    const aSortKey = (aHasMaxFeatureScore ? 1000000 : 0) + (a.github_data?.stars || 0);
    const bSortKey = (bHasMaxFeatureScore ? 1000000 : 0) + (b.github_data?.stars || 0);

    return bSortKey - aSortKey;
  }
}

function getMaxFeatureScores(tools) {
  return tools.reduce((features, tool) => {
    if (tool.features) {
      Object
        .entries(tool.features)
        .forEach(([ feature, score ]) => {
          features[feature] = features[feature] !== undefined
            ? Math.max(features[feature], score)
            : score;
        });
    }

    return features;
  }, {});
}

function hasMaxFeatureScore(tool, maxFeatureScores) {
  if (tool.features) {
    return Object
      .entries(tool.features)
      .some(([ feature, score ]) => score !== 0 && maxFeatureScores[feature] === score);
  }

  return false;
}

export { filter };
