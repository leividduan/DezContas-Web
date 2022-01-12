import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoryForm from '../../components/CategoryForm';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';

import CategoryService from '../../services/CategoryService';

export default function EditCategory() {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const categoryToEdit = await CategoryService.getSingle(id);
    setCategory(categoryToEdit);
  }, [id]);
  return (
    <>
      <PageContainer>
        <PageHeader title="Editar categoria" linkTo="/categorias" />

        <CategoryForm buttonLabel="Salvar alterações" categoryToEdit={category} />
      </PageContainer>
    </>
  );
}
