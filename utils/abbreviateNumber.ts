/**
 * Function for formatting
 *
 * This function receives a number and returns a string that represents the abbreviated number.
 *
 * @param {number} num - Number to be abbreviated
 * @returns {string} A string that represents the abbreviated number.
 * @example abbreviateNumber(1000) // '1K'
 */
export default function (num: number): string {
  if (num < 1000) {
    return num.toString()
  } else if (num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`
  } else if (num < 1000000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else {
    return `${(num / 1000000000).toFixed(1)}B`
  }
}
