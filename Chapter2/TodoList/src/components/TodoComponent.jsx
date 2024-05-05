import '../App.css';

function TodoComponent({ text, onComplete }) {
  return (
    <>
      <div className="oneTodo">
        <div className="spanTodo">
          <h4 id="text_todo_left">{text}</h4>
          <button className="todo_complete" onClick={onComplete}>
            완료
          </button>
        </div>
        <hr className="hr_middle" />
      </div>
    </>
  );
}

export default TodoComponent;
