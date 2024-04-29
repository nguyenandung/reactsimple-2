export const removeNilKeys = (object: any) => {
  const newObj = { ...object };
  Object.keys(newObj).forEach(key => {
    if (!newObj[key]) {
      delete newObj[key];
    }
  });

  return newObj;
};
