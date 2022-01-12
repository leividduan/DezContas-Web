import CategoryForm from '../../components/CategoryForm';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';

export default function NewCategory() {
  return (
    <>
      <PageContainer>
        <PageHeader title="Nova categoria" linkTo="/categorias" />

        <CategoryForm buttonLabel="Cadastrar nova categoria" />
      </PageContainer>
    </>
  );
}
