const formatWords = (words) => {
  if (!words || words.length === 0) return "";
  if (words.length === 1) return words[0];
  if (words.length === 2) return `${words[0]} and ${words[1]}`;

  return `${words.slice(0, -1).join(", ")}, and ${words[words.length - 1]}`;
};

export default formatWords;