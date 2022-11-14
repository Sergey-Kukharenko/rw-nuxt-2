export default function ({ $device, redirect }) {
  if (!$device.isMobileOrTablet) redirect('/')
}