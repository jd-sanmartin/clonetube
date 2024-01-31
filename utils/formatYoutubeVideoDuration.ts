export default function(_duration: string) {
  const duration = _duration.replace('PT', '').replace('S', '').replace('M', ':').replace('H', ':').split(':')
  const seconds = duration[duration.length - 1]
  const minutes = duration[duration.length - 2]
  const hours = duration[duration.length - 3]
  return `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : '0'}${seconds.length === 2 ? seconds : '0' + seconds}`
}
