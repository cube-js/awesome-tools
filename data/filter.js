const filter = (tools, framework, language, license, exploreTools) => {
  return tools.filter((tool) => {
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
};

export { filter };
