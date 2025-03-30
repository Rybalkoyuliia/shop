export const cutText = (str, size = 38) => {
  return str.length > size ? `${str.slice(0, size)}...` : str;
};
