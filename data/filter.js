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

  const maxFeatureScores = getMaxFeatureScores(tools);
  const maxFeatureScoresCopy = Object.assign({}, maxFeatureScores);

  return filtered
    .map((tool) => {
      const feature_label = getFeatureWithMaxScore(tool, maxFeatureScores);

      if (feature_label) {
        delete maxFeatureScores[feature_label];
      }

      return {
        ...tool,
        feature_label,
      };
    })
    .sort(getComparator(maxFeatureScoresCopy));
};

function getComparator(maxFeatureScores) {
  return function (a, b) {
    // Adding 1,000,000 to the number of GitHub stars is going to pull the tool up to the top.
    // As of 2021-06-01, freeCodeCamp/freeCodeCamp has 325,000 stars
    const aSortKey =
      (a.feature_label ? 1000000 : 0) + (a.github_data?.stars || 0);
    const bSortKey =
      (b.feature_label ? 1000000 : 0) + (b.github_data?.stars || 0);

    return bSortKey - aSortKey;
  };
}

function getMaxFeatureScores(tools) {
  return tools.reduce((features, tool) => {
    if (tool.features) {
      Object.entries(tool.features)
        .filter(([_, score]) => score !== 0)
        .forEach(([feature, score]) => {
          features[feature] =
            features[feature] !== undefined
              ? Math.max(features[feature], score)
              : score;
        });
    }

    return features;
  }, {});
}

function getFeatureWithMaxScore(tool, maxFeatureScores) {
  if (tool.features) {
    return Object.entries(tool.features)
      .sort((a, b) => b[1] - a[1])
      .filter(([_, score]) => score !== 0)
      .reduce((selectMaxFeature, [feature, score]) => {
        return (
          selectMaxFeature ||
          Object.entries(maxFeatureScores).find(
            ([maxFeature, maxScore]) =>
              feature === maxFeature && score === maxScore
          )?.[0]
        );
      }, undefined);
  }

  return false;
}

const setParamsFromRouter = (
  query,
  setExploreTools,
  setFramework,
  setLanguage,
  setLicense
) => {
  console.log(query);
  if (query.tools) {
    setExploreTools(
      typeof query.tools === "string" ? [query.tools] : [...query.tools]
    );
  }
  if (query.framework) {
    setFramework(
      typeof query.framework === "string"
        ? [query.framework]
        : [...query.framework]
    );
  }
  if (query.language) {
    setLanguage(
      typeof query.language === "string"
        ? [query.language]
        : [...query.language]
    );
  }
  if (query.license) {
    setLicense(
      typeof query.license === "string" ? [query.license] : [...query.license]
    );
  }
};

export { filter, setParamsFromRouter };
