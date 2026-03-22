import { Button } from '~/components/ui/button'
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from '~/components/ui/text-field'

export default () => {
  return (
    <div class='flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl shadow-xl'>
      <Button variant='ghost'>hello</Button>
      <TextField class='grid w-full max-w-sm items-center gap-1.5'>
        <TextFieldLabel for='email'>Email</TextFieldLabel>
        <TextFieldInput type='email' id='email' placeholder='Email' />
      </TextField>
    </div>
  )
}
