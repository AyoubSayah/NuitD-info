import {
  CircularProgress,
  CircularProgressLabel,
  AvatarBadge,
  Avatar,
} from '@chakra-ui/react'

import { FC, useState } from 'react'

const AvatarProgress: FC<any> = ({
  color = '#FC3E42',
  size = '67px',
  thickness = '7px',
  capIsRound = true,
  avatarName,
  avatarUrl,
  badgeStyle,
  ...props
}) => {
  const [value, setValue] = useState(0)
  return (
    <CircularProgress
      capIsRound={capIsRound}
      color={color}
      size={size}
      thickness={thickness}
      value={value}
      onMouseEnter={() => {
        setValue(100)
      }}
      onMouseLeave={() => {
        setValue(0)
      }}
      {...props}
    >
      <CircularProgressLabel p="12px">
        <Avatar h="100%" name={avatarName} src={avatarUrl} w="100%" />
      </CircularProgressLabel>
    </CircularProgress>
  )
}
export default AvatarProgress
