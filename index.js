function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Beryl")); 
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introduction ("Beryl", "javascript"));
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introduction ("Beryl", "javascript"));
