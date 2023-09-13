import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonWeakMap,
  buttonSizeMap,
} from '@styles/button'
import Flex from './Flex'
import Text from './Text'
import Spacing from './Spacing'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
)

function ButtonGroup({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <Flex direction="column">
      {title != null ? (
        <>
          <Text typography="t6" bold={true}>
            {title}
          </Text>
          <Spacing size={8} />
        </>
      ) : null}
      <Flex css={buttonGroupStyle}>{children}</Flex>
    </Flex>
  )
}

const buttonGroupStyle = css`
  flex-wrap: wrap;
  gap: 10px;

  & button {
    flex: 1;
  }
`

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup
}

Button.Group = ButtonGroup

export default Button
