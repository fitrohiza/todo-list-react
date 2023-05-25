import { useDispatch } from "react-redux";
import { actions } from "../features/todos/todosSlice";


const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(actions.toggleTodo({ id }));
  };

  const handleRemove = (id) => {
    dispatch(actions.deleteTodo({ id }));
  };

  return (
    <div className="flex justify-between p-2 bg-slate-300 rounded mb-4 items-center">
      <p>{todo.content}</p>
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        <label htmlFor="completed">Completed</label>
        <div></div>
        <button className="btn" onClick={() => handleRemove(todo.id)}>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
