import { useQuery } from 'react-query'

import { APPLY_STATUS } from '@models/apply'

interface usePollApplyStatusProps {
  onSuccess: () => void
  onError: () => void
  enabled: boolean
}

function usePollApplyStatus({
  enabled,
  onSuccess,
  onError,
}: usePollApplyStatusProps) {
  return useQuery(['applyStatus'], () => getApplyStatus(), {
    enabled,
    refetchInterval: 2_000,
    staleTime: 0,
    onSuccess: (status) => {
      console.log('status', status)
      if (status === APPLY_STATUS.COMPLETE) {
        onSuccess()
      }
    },
    onError: () => {
      onError()
    },
  })
}

function getApplyStatus() {
  const values = [
    APPLY_STATUS.REDAY,
    APPLY_STATUS.PROGRESS,
    APPLY_STATUS.COMPLETE,
    APPLY_STATUS.REJECT,
  ]

  const status = values[Math.floor(Math.random() * values.length)]

  if (status === APPLY_STATUS.REJECT) {
    throw new Error('카드 발급에 실패했습니다.')
  }

  return status
}

export default usePollApplyStatus
