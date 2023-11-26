import "./style.scss";
import { toast } from "react-toastify";
import { DefaultButton } from "../buttons/DefaultButton";
export function Boards() {
  
  return (
    <section>
    <div className="col-10 mt-4 min-vh-100 max-vh-100 mx-auto ">


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
      <div className="row">
      <div className="col-2">
      <DefaultButton
        // type="button"
        // className="btn bg-secondary d-flex justify-content-around align-items-center my-2"
        data-bs-toggle="modal"
        data-bs-target="#test"
        onClick={() => toast.success("Task created successfully")}
      />
       
      </div>
    </div>
    </div>
          </section>
  );
}
