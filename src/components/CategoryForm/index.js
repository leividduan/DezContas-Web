import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import FormGroup from '../FormGroup';
import Select from '../Select';
import Loader from '../Loader';

import useErrors from '../../hooks/useErrors';
import CategoryService from '../../services/CategoryService';

export default function CategoryForm({ buttonLabel, categoryToEdit }) {
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();
  const history = useHistory();
  const formIsValid = categoryName && categoryType && errors.length === 0;
  useEffect(() => {
    if (categoryToEdit) {
      const { id, name, description, transactionType } = categoryToEdit;
      setCategoryId(id);
      setCategoryName(name);
      setCategoryDescription(description);
      setCategoryType(transactionType);
    }
  }, [categoryToEdit]);

  function handleChangeName(event) {
    setCategoryName(event.target.value);

    if (event.target.value && event.target.value.length > 50) {
      setError({ field: 'categoryName', message: 'Nome da categoria é maior do que o permitido.' });
    } else {
      removeError('categoryName');
    }
  }

  function handleChangeDescription(event) {
    setCategoryDescription(event.target.value);
  }

  function handleChangeCategoryType(event) {
    setCategoryType(event.target.value);

    if (event.target.value && event.target.value === 'none') {
      setError({ field: 'categoryType', message: 'É necessário escolher um tipo' });
    } else {
      removeError('categoryType');
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      const category = {
        Id: categoryId,
        Name: categoryName,
        Description: categoryDescription,
        TransactionType: Number(categoryType),
      };
      let newOrEditCategory = null;
      if (categoryToEdit) {
        newOrEditCategory = await CategoryService.edit(category.Id, category);
      } else {
        newOrEditCategory = await CategoryService.create(category);
      }
      if (newOrEditCategory) {
        history.push('/categorias');
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Form onSubmit={handleOnSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName('categoryType')}>
          <Select
            onChange={handleChangeCategoryType}
            value={categoryType}
            error={getErrorMessageByFieldName('categoryType')}
          >
            <option value="none">Selecione o tipo de categoria</option>
            <option value="1">Receita</option>
            <option value="2">Despesa</option>
            <option value="3">Transferência</option>
          </Select>
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('categoryName')}>
          <Input
            type="text"
            placeholder="Nome da categoria"
            value={categoryName}
            onChange={handleChangeName}
            error={getErrorMessageByFieldName('categoryName')}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            maxLength={250}
            value={categoryDescription}
            onChangeFn={handleChangeDescription}
            placeholder="Descrição da categoria"
          />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!formIsValid}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  categoryToEdit: PropTypes.object,
};

CategoryForm.defaultProps = {
  categoryToEdit: null,
};
