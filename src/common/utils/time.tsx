export function timeToSeconds(time: string) {
  const [hours = '00', minutes = '00', seconds = '00'] = time.split(':')

  const hoursToSeconds = Number(hours) * 60 * 60 // hours * 60 minutes * 60 seconds = seconds

  const minutesToSeconds = Number(minutes) * 60 // minutes * 60 seconds = seconds

  const secondsToNumber = Number(seconds)

  return hoursToSeconds + minutesToSeconds + secondsToNumber
}