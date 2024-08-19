import { SessionType, useTerminateSessionsOneDeviceMutation } from '@/shared/api/deviceApi'
import { LogOutIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { getDeviceIcon } from '@/widgets/Devices/services/getDeviceIcon'

import s from './Devices.module.scss'

type Props = {
  deviceInfo: SessionType
}

export const DeviceInfo = ({ deviceInfo }: Props) => {
  const { browserName, deviceId, deviceType, ip, lastActive, ...rest } = deviceInfo
  const [terminateOneSession] = useTerminateSessionsOneDeviceMutation()
  const terminateOneSessionHandler = () => {
    terminateOneSession({ deviceId: deviceId })
  }

  const { text } = useTranslation()

  return (
    <div className={s.device}>
      <div className={s.deviceIcon}>{getDeviceIcon(browserName)}</div>
      <div className={s.deviceParam}>
        <Typography variant={'boldText16'}>{browserName}</Typography>
        <Typography variant={'regularText14'}>IP: {ip}</Typography>

        <Typography variant={'smallText'}>
          {text.pages.profile.devices.lastVisit} {new Date(lastActive).toLocaleDateString('ru-RU')}
        </Typography>
      </div>

      <Button className={s.logOutButton} onClick={terminateOneSessionHandler}>
        <LogOutIcon /> {text.pages.profile.devices.logOut}
      </Button>
    </div>
  )
}
