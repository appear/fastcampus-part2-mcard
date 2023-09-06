import { useRecoilValue } from 'recoil'
import { userAtom } from '@atoms/user'

function useUser() {
  return useRecoilValue(userAtom)
}

export default useUser
