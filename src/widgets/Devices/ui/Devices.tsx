import { SessionType, useGetAllDevicesQuery } from '@/shared/api/deviceApi'
import { ActiveSessions } from '@/widgets/Devices/ui/ActiveSessions'
import { CurrentDevice } from '@/widgets/Devices/ui/CurrentDevice'

export const Devices = () => {
  const { data: devices } = useGetAllDevicesQuery()
  const currentDevice = devices ? devices.current : ({} as SessionType)
  const devicesList = devices ? devices.others : ([] as SessionType[])

  return (
    <>
      <CurrentDevice currentDeviceInfo={currentDevice} />
      {devicesList.length > 0 && <ActiveSessions devicesList={devicesList} />}
    </>
  )
}
