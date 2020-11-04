export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ``;
};
