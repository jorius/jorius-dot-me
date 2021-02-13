export const snakeCaseToCamelCase = (object) => {
  const transformedObject = Object.keys(object).map((key) => {
    if (!key.includes('_')) {
      return { [key]: object[key] };
    }

    const splittedKey = key.split('_');
    let transformedKey = splittedKey[0];

    splittedKey.forEach((splittedString, index) => {
      if (index > 0) {
        const firstLetter = splittedString.substring(0, 1).toUpperCase();
        transformedKey += firstLetter + splittedString.substring(1);
      }
    });

    return { [transformedKey]: object[key] };
  });

  return transformedObject.reduce((finalObject, currentValue) => {
    const currentKey = Object.keys(currentValue)[0];
    if (!Object.prototype.hasOwnProperty.call(finalObject, currentKey)) {
      finalObject[currentKey] = currentValue[currentKey];
      return finalObject;
    }

    return finalObject;
  }, {});
};
