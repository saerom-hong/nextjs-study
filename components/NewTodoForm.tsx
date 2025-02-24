import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black/25 p-2"
        />
        <button className="bg-pink-500 py-2 px-4 ml-2 rounded-lg" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
