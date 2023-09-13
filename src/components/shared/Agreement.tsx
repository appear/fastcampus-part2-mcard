import { MouseEvent } from 'react'
import { css } from '@emotion/react'
import Flex from './Flex'
import Text from './Text'

import { colors } from '@styles/colorPalette'

function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="ul" direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  )
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <IconCheck withCircle={true} checked={checked} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  link?: string
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li">
      <Flex
        onClick={(e) => {
          onChange(e, !checked)
        }}
      >
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link != null ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

function IconCheck({
  checked,
  withCircle = false,
}: {
  checked: boolean
  withCircle?: boolean
}) {
  return (
    <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" width={24} height={24}>
      <g>
        <g id="Icon-Check" transform="translate(328.000000, 278.000000)">
          {withCircle ? (
            <path
              d="M-296-222.6c-12.9,0-23.4-10.5-23.4-23.4c0-12.9,10.5-23.4,23.4-23.4     c12.9,0,23.4,10.5,23.4,23.4C-272.6-233.1-283.1-222.6-296-222.6L-296-222.6z M-296-266.9c-11.5,0-20.9,9.4-20.9,20.9     s9.4,20.9,20.9,20.9s20.9-9.4,20.9-20.9S-284.5-266.9-296-266.9L-296-266.9z"
              id="Fill-43"
              fill={checked ? colors.blue : colors.grey}
            />
          ) : null}
          <polyline
            id="Fill-44"
            points="-298.8,-235.9 -310.7,-247.9 -308.9,-249.7 -298.8,-239.5 -283.1,-255.2      -281.3,-253.4 -298.8,-235.9    "
            fill={checked ? colors.blue : colors.grey}
          />
        </g>
      </g>
    </svg>
  )
}

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
  }
`

export default Agreement

/**
 * <Agreement>
 *  <Agreement.Title> 약관에 모두 동의 </Agreement.Title>
 *  <Agreement.Description> 약관1 </Agreement.Description>
 *  <Agreement.Description> 약관2 </Agreement.Description>
 * </Agreement>
 */
