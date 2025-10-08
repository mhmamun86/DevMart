const shortNumber = number => {
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1) + 'M';
  if (number >= 1_000) return (number / 1_000).toFixed(1) + 'k';
  return number.toString();
};
export { shortNumber };
