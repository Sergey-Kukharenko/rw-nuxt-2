import {isMobile, DEFAULT_USER_AGENT, isTablet, isDevice} from '@/helpers/device';

export const useIsMobile = () => useState('mobile', () => {
  const { 'user-agent': userAgent } = useRequestHeaders(['user-agent']) || { 'user-agent': DEFAULT_USER_AGENT }
  return isMobile(userAgent)
})

export const useIsTablet = () => useState('tablet', () => {
  const { 'user-agent': userAgent } = useRequestHeaders(['user-agent'])
  return isTablet(userAgent)
})

export const useIsDevice = () => useState('device', () => {
  const { 'user-agent': userAgent } = useRequestHeaders(['user-agent'])
  return isDevice(userAgent)
})
