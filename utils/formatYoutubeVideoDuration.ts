/**
 * Formats a YouTube video duration string into a human-readable format.
 *
 * This function takes a YouTube video duration string, and converts it into a more human-readable format.
 *
 * @param {_duration} string - The YouTube video duration string to format.
 * @returns {string} The formatted duration string.
 * @example formatYoutubeVideoDuration('PT1H2M3S') // '1:02:03'
 */
export default function(_duration: string) {
  const duration = _duration.replace('PT', '').replace('S', '').replace('M', ':').replace('H', ':').split(':')
  const seconds = duration[duration.length - 1]
  const minutes = duration[duration.length - 2]
  const hours = duration[duration.length - 3]
  return `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : '0'}${seconds.length === 2 ? seconds : '0' + seconds}`
}
