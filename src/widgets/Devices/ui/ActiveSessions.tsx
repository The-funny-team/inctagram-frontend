import { SessionType, useTerminateSessionsAllDevicesMutation } from '@/shared/api/deviceApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { DeviceInfo } from '@/widgets/Devices/ui/DeviceInfo'

import s from './Devices.module.scss'

type Props = {
  devicesList: SessionType[]
}

export const ActiveSessions = ({ devicesList }: Props) => {
  const { text } = useTranslation()
  const [terminateAllSessions] = useTerminateSessionsAllDevicesMutation()

  const terminateAllSessionsHandler = () => {
    terminateAllSessions()
  }

  return (
    <div className={s.activeRoot}>
      <Button onClick={terminateAllSessionsHandler} variant={'tertiary'}>
        {text.pages.profile.devices.terminateButton}
      </Button>
      <Typography variant={'h3'}>{text.pages.profile.devices.activeSessions}</Typography>

      {devicesList.map(device => {
        return <DeviceInfo deviceInfo={device} key={device.deviceId} />
      })}
    </div>
  )
}
