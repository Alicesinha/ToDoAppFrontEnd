import { CreateText } from "./CreateTasks";
import "./style.scss";
import { Modal } from "./../../components/Modal/index";
export function Boards() {
  return (
    <>
    <div className="row ">
      <button
        type="button"
        className="btn bg-secondary d-flex justify-content-around align-items-center my-2"
        data-bs-toggle="modal"
        data-bs-target="#openCreateTaskModal"
      >
       
        Add Task
      </button>

      <div className="boards">
        <div className="col-lg-3 board_child">
          <h2>To Do</h2>
        </div>
        <div className="col-lg-3 board_child">
          <h2>In Progress</h2>
        </div>
        <div className="col-lg-3 board_child">
          <h2>Done</h2>
        </div>

      </div>

    </div>
            <Modal
            modalID={"openCreateTaskModal"}
            title="Create Task"
            width="xl"
            fullscreen={true}
            body={<CreateText />}
          />
          </>
  );
}
