function Header() {
  return <h1>TODO LIST</h1>;
}
function AddBtn({ addTask }) {
  return <button onClick={addTask}>Add Task</button>;
}
function DropDownFilterBtn({ handleFilter }) {
  return (
    <select name="filter" id="filter" onChange={(e) => handleFilter(e)}>
      <option value="all">All</option>
      <option value="completed">Complete</option>
      <option value="incomplete">Pending</option>
    </select>
  );
}
function Main() {
  const [tasks, setTasks] = React.useState([]);
  const [isEdit, setEdit] = React.useState(false);
  const [index, setIndex] = React.useState(null);
  const [filter, setFilter] = React.useState("all");
  function handleFilter(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
    console.log(filter);
  }

  React.useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      console.log(storedTasks);
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const [showPopup, togglePopup] = React.useState(false);
  function completeTask(i) {
    console.log(tasks);
    let newTasks = [...tasks];
    newTasks[i].isComplete = !newTasks[i].isComplete;
    newTasks[i].isComplete
      ? (newTasks[i].taskStatus = "completed")
      : (newTasks[i].taskStatus = "incomplete");
    console.log(newTasks);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  function addNewTask({ e, tasks, setTasks }) {
    console.log(e);
    let time = new Date().toLocaleString();
    const formData = new FormData(e.target); // create a new FormData object
    formData.append("time", time);
    const data = Object.fromEntries(formData.entries()); // convert FormData to object
    console.log(data); // {field1: value1, field2: value2, ...}
    console.log(tasks);
    let taskList = tasks;
    taskList.push(data);
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    handlePopUp();
  }
  function editTask({ e, tasks, setTasks, index }) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let taskList = [...tasks];
    Object.keys(taskList[index]).forEach((key) => {
      taskList[index][key] = data[key];
    });
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    handlePopUp();
  }
  function deleteTask(i) {
    let newTasks = [...tasks];
    newTasks.splice(i, 1);
    console.log(newTasks);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  function handlePopUp(isEdit = false, index = null) {
    togglePopup(!showPopup);
    setIndex(index);
  }

  return (
    <>
      <Header />
      <div className="buttons">
        <AddBtn addTask={handlePopUp} />
        <DropDownFilterBtn handleFilter={handleFilter} />
      </div>
      <Board
        tasks={tasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        handlePopUp={handlePopUp}
        isEdit={isEdit}
        setEdit={setEdit}
        filter={filter}
      />
      {showPopup && (
        <PopUpWindow
          tasks={tasks}
          setTasks={setTasks}
          addNewTask={addNewTask}
          editTask={editTask}
          deleteTask={deleteTask}
          handlePopUp={handlePopUp}
          isEdit={isEdit}
          setEdit={setEdit}
          index={index}
        />
      )}
    </>
  );
}
function Board({
  tasks,
  deleteTask,
  completeTask,
  handlePopUp,
  isEdit,
  setEdit,
  filter,
}) {
  const completedTasks = tasks.filter((task) => task.taskStatus == "completed");
  const pendingTasks = tasks.filter((task) => task.taskStatus == "incomplete");
  console.log(filter);
  console.log(completedTasks);
  console.log(pendingTasks);
  let filteredTasks;
  if (filter == "completed") {
    filteredTasks = completedTasks;
  } else if (filter == "incomplete") {
    filteredTasks = pendingTasks;
  } else {
    filteredTasks = tasks;
  }
  console.log(filteredTasks);
  const taskElems = filteredTasks.length ? (
    filteredTasks.map((task, index) => {
      return (
        <div className="task" key={index}>
          <div className="isComplete">
            <label className="container">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="checkbox"
                defaultChecked={
                  task.taskStatus == "completed" ? "checked" : null
                }
                onChange={() => completeTask(index)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="taskInfo">
            <p>
              <strong>{task.taskTitle}</strong>
            </p>
            <p className="taskTime">{task.time}</p>
          </div>
          <div className="taskActions">
            <i
              className="fa-solid fa-pen"
              onClick={() => {
                console.log(isEdit);

                handlePopUp(true, index);
                setEdit(!isEdit);
                console.log(isEdit);
              }}
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteTask(index)}
            ></i>
          </div>
        </div>
      );
    })
  ) : (
    <div className="empty task">No TODOS</div>
  );

  return <div className="board">{taskElems}</div>;
}
function PopUpWindow({
  tasks,
  setTasks,
  addNewTask,
  editTask,
  isEdit,
  handlePopUp,
  index,
  setEdit,
}) {
  const taskTitle = isEdit ? tasks[index].taskTitle : "";
  let selected = isEdit
    ? tasks[index].taskStatus == "completed"
      ? "completed"
      : "incomplete"
    : null;
  const buttonText = isEdit ? "Update Task" : "Add Task";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editTask({ e, tasks, setTasks, isEdit, index });
    } else {
      addNewTask({ e, tasks, setTasks, isEdit, index });
    }

    handlePopUp();
  };
  return (
    <>
      <div className="backdropBlur" onClick={handlePopUp}></div>
      <div className="popupWindow">
        <h2>{isEdit == true ? "Edit" : "Add"} TODO</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="taskTitle">Title</label>
            <input
              type="text"
              name="taskTitle"
              id="taskTitle"
              defaultValue={taskTitle}
            />
          </div>
          <div>
            <label htmlFor="taskStatus">Status</label>
            <select name="taskStatus" id="taskStatus">
              {selected == "completed" ? (
                <option value="completed">completed</option>
              ) : (
                <option value="incomplete">incomplete</option>
              )}
              <option value="completed">completed</option>
              <option value="incomplete">incomplete</option>
            </select>
          </div>
          <div className="popUpBtns">
            <button id="submitNewTask">{buttonText}</button>
            <button
              id="cancelNewTask"
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
                handlePopUp();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
