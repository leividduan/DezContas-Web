/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import ButtonActions from '../../components/ButtonActions';

import { Container, Header, CardHeader, Card, DetailsContainer, ErrorContainer, EmptyListContainer } from './styles';

import CategoryService from '../../services/CategoryService';

import sad from '../../assets/images/sad.svg';
import Modal from '../../components/Modal';

export default function Category() {
  const theme = useTheme();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState('');
  const [categoryNameToDelete, setCategoryNameToDelete] = useState('');

  const incomeCategories = useMemo(() => categories.filter((category) => category.transactionType === 1), [categories]);
  const expenseCategories = useMemo(
    () => categories.filter((category) => category.transactionType === 2),
    [categories],
  );
  const transferCategories = useMemo(
    () => categories.filter((category) => category.transactionType === 3),
    [categories],
  );

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const categoriesList = await CategoryService.get();
      setCategories(categoriesList);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function handleTryAgain() {
    loadCategories();
  }

  function handleRemove(id) {
    setCategoryIdToDelete(id);

    const categoryToDelete = categories.filter((category) => category.id === id)[0];
    setCategoryNameToDelete(categoryToDelete.name);

    setModalOpen(true);
  }

  function handleToggleModal() {
    setModalOpen(!modalOpen);
  }

  async function handleConfirm() {
    await CategoryService.delete(categoryIdToDelete);
    loadCategories();
  }

  return (
    <>
      <Modal
        isOpen={modalOpen}
        title="Remover categoria"
        body={`Voc?? deseja realmente remover a categoria ${categoryNameToDelete}?`}
        confirmLabel="Remover"
        handleClose={handleToggleModal}
        handleConfirm={handleConfirm}
        danger
      >
        <p>
          Voc?? deseja remover a categoria <strong>"{categoryNameToDelete}"</strong>?
        </p>
      </Modal>
      <PageContainer>
        <Loader isLoading={isLoading} />
        <Container>
          {hasError && (
            <ErrorContainer>
              <img src={sad} alt="sad" />
              <div className="details">
                <strong>Ocorreu um erro ao obter as suas categorias!</strong>
                <Button type="button" onClick={handleTryAgain}>
                  Tente novamente
                </Button>
              </div>
            </ErrorContainer>
          )}
          {!hasError && (
            <>
              <Header justifyContent={categories.length > 0 ? 'space-between' : 'center'}>
                {categories.length > 0 && (
                  <h1>
                    {categories.length} {categories.length === 1 ? 'categoria' : 'categorias'}
                  </h1>
                )}
                <Link to="/nova-categoria">Nova categoria</Link>
              </Header>

              {categories.length < 1 && !isLoading && (
                <EmptyListContainer>
                  <p>
                    Voc?? ainda n??o tem nenhuma categoria cadastrada! Clique no bot??o <strong>"Nova categoria"</strong> ??
                    cima para cadastrar a sua primeira!
                  </p>
                </EmptyListContainer>
              )}

              {incomeCategories.length > 0 && (
                <>
                  <CardHeader>Receitas</CardHeader>
                  {incomeCategories.map((category) => (
                    <Card
                      key={category.id}
                      borderColor={
                        category.transactionType === 1
                          ? theme.colors.primary.main
                          : category.transactionType === 2
                          ? theme.colors.danger.main
                          : theme.colors.gray[500]
                      }
                    >
                      <DetailsContainer>
                        <span>{category.name}</span>
                        <p>{category.description}</p>
                      </DetailsContainer>
                      <ButtonActions
                        actions={[
                          { name: 'Editar', to: `/editar-categoria/${category.id}` },
                          { name: 'Remover', to: '#', className: 'danger', onClick: () => handleRemove(category.id) },
                        ]}
                      />
                    </Card>
                  ))}
                </>
              )}

              {expenseCategories.length > 0 && (
                <>
                  <CardHeader>Despesas</CardHeader>
                  {expenseCategories.map((category) => (
                    <Card
                      key={category.id}
                      borderColor={
                        category.transactionType === 1
                          ? theme.colors.primary.main
                          : category.transactionType === 2
                          ? theme.colors.danger.main
                          : theme.colors.gray[500]
                      }
                    >
                      <DetailsContainer>
                        <span>{category.name}</span>
                        <p>{category.description}</p>
                      </DetailsContainer>
                      <ButtonActions
                        actions={[
                          { name: 'Editar', to: `/editar-categoria/${category.id}` },
                          { name: 'Remover', to: '#', className: 'danger', onClick: () => handleRemove(category.id) },
                        ]}
                      />
                    </Card>
                  ))}
                </>
              )}

              {transferCategories.length > 0 && (
                <>
                  <CardHeader>Transfer??ncias</CardHeader>
                  {transferCategories.map((category) => (
                    <Card
                      key={category.id}
                      borderColor={
                        category.transactionType === 1
                          ? theme.colors.primary.main
                          : category.transactionType === 2
                          ? theme.colors.danger.main
                          : theme.colors.gray[500]
                      }
                    >
                      <DetailsContainer>
                        <span>{category.name}</span>
                        <p>{category.description}</p>
                      </DetailsContainer>
                      <ButtonActions
                        actions={[
                          { name: 'Editar', to: `/editar-categoria/${category.id}` },
                          { name: 'Remover', to: '#', className: 'danger', onClick: () => handleRemove(category.id) },
                        ]}
                      />
                    </Card>
                  ))}
                </>
              )}
            </>
          )}
        </Container>
      </PageContainer>
    </>
  );
}
