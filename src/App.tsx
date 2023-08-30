import './App.css'

import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import Alert from './components/shared/Alert'

import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />

      <Button>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="success" weak={true}>
        클릭해주세요
      </Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>
      <Button full={true}>클릭해주세요</Button>
      <Button full={true} disabled={true}>
        클릭해주세요
      </Button>

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />

      <Input placeholder="로그인" aria-invalid={false} />
      <Input aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="패스워드" hasError={true} />

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />

      {/* <Alert
        open={true}
        description="안녕하세요"
        title="알럿이 떴습니다"
        onButtonClick={() => {}}
      /> */}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert오픈
      </Button>
    </div>
  )
}

export default App
