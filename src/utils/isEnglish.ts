export const isEnglish = (text: string): boolean => {
  const engRegex = /^[a-zA-Z]*$/;
  return engRegex.test(text);
};
