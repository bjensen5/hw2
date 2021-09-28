import Tasks from "./Tasks";
import Userbar from "./user/Userbar";
import CreateTask from "./CreateTask";
import Tasklist from "./Tasklist";


function App() {
  const tasks = [
    {
      title: "New To-do 1",
      description: "This is the description for new task #1. Have fun accomplishing and being great!",
      dateCreated: "09/27/2021",
      complete: "incomplete",
      dateCompleted: ""
    },
    {
      title: "New To-do 2",
      description: "This is the description for new to-do #2. Have fun learning and being a really amazing person!",
      dateCreated: "09/28/2021",
      complete: "incomplete",
      dateCompleted: ""
    }
  ]
  return (
  <div>
    <Userbar />
    <hr/>
    <Tasks />
    <br />
    <CreateTask name="New Tasks"/>
    <Tasklist tasks={tasks} />
  </div>
  )
}

export default App;
