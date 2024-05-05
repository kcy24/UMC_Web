import '../App.css';

function CompletedComponent({ text, onDelete }) {
  return (
    <>
      <div className="oneTodo">
        <div className="spanTodo">
          <h4 id="text_todo_right">{text}</h4>
          <button className="todo_delete" onClick={onDelete}>
            삭제
          </button>
        </div>
        <hr className="hr_middle" />
      </div>
    </>
  );
}

export default CompletedComponent;
