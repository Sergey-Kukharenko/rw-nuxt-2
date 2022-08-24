export default function ({ $device }) {
  $device.isCustom = !!$device.userAgent.includes('Custom-Agent')
}
