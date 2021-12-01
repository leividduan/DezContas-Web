/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import { Container, Header, Card, DetailsContainer, ErrorContainer, EmptyListContainer } from './styles';

import CategoryService from '../../services/CategoryService';

import sad from '../../assets/images/sad.svg';
import APIError from '../../errors/APIError';

export default function Category() {
  const theme = useTheme();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const categoriesList = await CategoryService.get();
      setCategories(categoriesList);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      if (error instanceof APIError) {
        console.log('teste');
      }
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

  return (
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
                  Você ainda não tem nenhuma categoria cadastrada! Clique no botão <strong>"Nova categoria"</strong> à
                  cima para cadastrar a sua primeira!
                </p>
              </EmptyListContainer>
            )}

            {categories.length > 0 &&
              categories.map((category) => (
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
                  <div className="actions">
                    <Link to={`/editar-categoria/${category.id}`}>Editar</Link>
                    <Link to={`/remover-categoria/${category.id}`} className="danger">
                      Remover
                    </Link>
                  </div>
                </Card>
              ))}
          </>
        )}
      </Container>
    </PageContainer>
  );
}
