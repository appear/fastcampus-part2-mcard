import { useMutation } from 'react-query'

import { applyCard } from '@remote/apply'
import { ApplyValues } from '@models/apply'

import { useAlertContext } from '@contexts/AlertContext'

interface useApplyCardMutationProps {
  onSuccess: () => void
  onError: () => void
}

function useApplyCardMutation({
  onSuccess,
  onError,
}: useApplyCardMutationProps) {
  const { open } = useAlertContext()

  return useMutation((applyValues: ApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      open({
        title: '카드를 신청하지 못했어요. 나중에 다시 시도해주세요.',
        onButtonClick: () => {
          onError()
        },
      })
    },
  })
}

export default useApplyCardMutation
