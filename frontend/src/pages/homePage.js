import SearchBar from "../components/Header/SearchBar";
import AddTaskButton from "../components/Header/AddTaskButton";
import TaskList from "../components/Tasks/TaskList";

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <SearchBar />
        <AddTaskButton />
      </div>

      {/* Task List */}
      <TaskList />
    </div>
  );
}

export default HomePage;
