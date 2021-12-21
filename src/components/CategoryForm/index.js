import { Container } from './styles';
import Input from '../Input';
import TextArea from '../TextArea';

export default function CategoryForm() {
  function handleOnChange(event) {
    console.log(event.target.value);
  }
  return (
    <Container>
      <Input />
      <TextArea maxLength={250} onChange={handleOnChange} />
    </Container>
  );
}
