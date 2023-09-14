import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Apply from '@components/apply'
import useApplyCardMutation from '@components/apply/hooks/useApplyCardMutation'
import usePollApplyStatus from '@components/apply/hooks/usePollApplyStatus'
import { updateApplyCard } from '@remote/apply'
import { APPLY_STATUS } from '@models/apply'
import useUser from '@hooks/auth/useUser'

function ApplyPage() {
  const navigate = useNavigate()

  const [readyToPoll, setReadyToPoll] = useState(false)

  const user = useUser()
  const { id } = useParams() as { id: string }

  usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
      })
      navigate('/apply/done?success=true', {
        replace: true,
      })
    },
    onError: async () => {
      await updateApplyCard({
        userId: user?.uid as string,
        cardId: id,
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
      })
      navigate('/apply/done?success=false', {
        replace: true,
      })
    },
    enabled: readyToPoll,
  })

  const { mutate, isLoading: 카드를신청중인가 } = useApplyCardMutation({
    onSuccess: () => {
      setReadyToPoll(true)
    },
    onError: () => {
      window.history.back()
    },
  })

  // TODO: 개선
  if (readyToPoll || 카드를신청중인가) {
    return <div>Loading...</div>
  }

  return <Apply onSubmit={mutate} />
}

export default ApplyPage
