import { useEffect } from 'react';
import Button from '../../components/Button';
import Select from '../../components/Select';

export default function Home() {
  useEffect(() => {
    const teste = JSON.parse(localStorage.getItem('user'));

    async function testefn() {
      try {
        const response = await fetch('https://localhost:5001/api/category', {
          headers: {
            Authorization: `Bearer ${teste.token}`,
          },
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    testefn();
  }, []);
  return (
    <>
      <Select>
        <option value="teste">teste</option>
      </Select>
      <Button>teste</Button>
      <h1>teste</h1>
    </>
  );
}
