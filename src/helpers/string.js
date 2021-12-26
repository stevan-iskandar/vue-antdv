export const ucWords = str => {
  const splitStr = str.toLowerCase().split(' ');
  return splitStr.map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`).join(' ')
}
