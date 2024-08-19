import { SessionType } from '@/shared/api/deviceApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'
import { getDeviceIcon } from '@/widgets/Devices/services'

import s from './Devices.module.scss'

type Props = {
  currentDeviceInfo: SessionType
}

export const CurrentDevice = ({ currentDeviceInfo }: Props) => {
  const { browserName, ip, lastActive, ...rest } = currentDeviceInfo

  const { text } = useTranslation()

  return (
    <div className={s.currentRoot}>
      <Typography variant={'h3'}>{text.pages.profile.devices.currentDevice}</Typography>

      <div className={s.device}>
        <div className={s.deviceIcon}>{getDeviceIcon(browserName)}</div>
        <div className={s.deviceParam}>
          <Typography variant={'boldText16'}>{browserName}</Typography>
          <Typography variant={'regularText14'}>IP: {ip}</Typography>
        </div>
      </div>
    </div>
  )
}
