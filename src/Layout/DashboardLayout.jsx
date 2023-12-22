// import Lists from "../Components/TaskBoard/TaskBoard";
import KanBan from "../Components/kanban";
// import TaskDashboard from "../Components/TaskDashboard";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* <TaskDashboard /> */}
      {/* <Lists /> */}
      <KanBan />
    </div>
  );
};

export default DashboardLayout;
