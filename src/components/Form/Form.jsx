import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as UUID4 } from 'uuid';
import NotFound from '../NotFound/NotFound';

const Form = ({ title }) => {
  // This is located in the Form() so the date is updated accordingly
  const initialValues = {
    name: '',
    description: '',
    date: new Date().toLocaleDateString('en-CA'),
  };
  const [formValues, setFormValues] = useState(initialValues);
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskDoesNotExist, setTaskDoesNotExist] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    // If the task existed keep the old ID else create a new one
    const idLocal = formValues.id ? formValues.id : UUID4();

    const taskToWriteToLocalStorage = {
      ...formValues,
      id: idLocal,
    };

    // If the task existed then update it and save it to localStorage
    if (formValues.id) {
      const updatedAllTasks = allTasks.map((item) =>
        item.id === formValues.id ? taskToWriteToLocalStorage : item
      );
      localStorage.setItem('tasks', JSON.stringify(updatedAllTasks));
      // Otherwise if there are items in the localStorage then add the new task
    } else if (allTasks) {
      allTasks.push(taskToWriteToLocalStorage);
      localStorage.setItem('tasks', JSON.stringify(allTasks));
      // If no items are present in localStorage create a new array with the item
    } else {
      localStorage.setItem(
        'tasks',
        JSON.stringify([taskToWriteToLocalStorage])
      );
    }

    navigate('/');
  };

  // On any form input change update formValues object
  function handleFormInputChange(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const handleCancelClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      const allTasks = JSON.parse(localStorage.getItem('tasks'));
      const editTask = allTasks.find((task) => task.id === id);

      if (editTask) {
        setFormValues(editTask);
      } else {
        setTaskDoesNotExist(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {taskDoesNotExist ? (
        <NotFound desc="That task cannot be found" displayButton={true} />
      ) : (
        <S.Content>
          <S.H1>{title}</S.H1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="task-name">Task name:</label>
            <S.Input
              type="text"
              id="task-name"
              name="name"
              value={formValues.name}
              onChange={handleFormInputChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <S.Textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleFormInputChange}
              required
            />

            <label htmlFor="date">Date created:</label>
            <S.Input type="date" id="date" value={formValues.date} readOnly />

            <S.Div>
              <S.InputButton
                background="#FD151B"
                type="button"
                value="Cancel"
                onClick={handleCancelClick}
              />
              <S.InputButton background="#16DB93" type="submit" value="Save" />
            </S.Div>
          </form>
        </S.Content>
      )}
    </>
  );
};

export default Form;
