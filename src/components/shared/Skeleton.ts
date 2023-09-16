import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { colors } from '@styles/colorPalette'

const opacity = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`

const Skeleton = styled.div<{ width: number; height: number }>(
  ({ width, height }) => ({
    width,
    height,
    backgroundColor: colors.grey,
    animation: `${opacity} 2s ease-in-out 0.5s infinite`,
  }),
)

export default Skeleton
