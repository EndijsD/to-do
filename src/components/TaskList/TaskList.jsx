import * as S from '../TaskList/style';
import NotFound from '../NotFound/NotFound';

const TaskList = ({ list, handleDelete }) => {
  return (
    <S.Content>
      {list && list.length === 0 && (
        <NotFound desc="That search cannot be found" displayButton={false} />
      )}

      {list &&
        list.map((task) => (
          <S.Item key={task.id}>
            <div>
              <S.H1>{task.name}</S.H1>
              <S.P>{task.description}</S.P>
            </div>
            <div>
              <S.Date>{task.date}</S.Date>
              <S.Div>
                <S.Button onClick={() => handleDelete(task.id)}>
                  Delete
                </S.Button>
                <S.StyledLink to={`/edit/${task.id}`}>Edit</S.StyledLink>
              </S.Div>
            </div>
          </S.Item>
        ))}
    </S.Content>
  );
};

export default TaskList;
