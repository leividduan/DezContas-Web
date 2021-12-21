import CategoryForm from '../../components/CategoryForm';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';

export default function NewCategory() {
  return (
    <>
      <PageContainer>
        <PageHeader title="Nova Categoria" linkTo="/categorias" />

        <CategoryForm />
      </PageContainer>
    </>
  );
}
