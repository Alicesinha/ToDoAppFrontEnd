import "./style.scss";
import { DefaultButton } from "../buttons/DefaultButton";
import { AcoesModal } from "../AcoesModal";
import { getTasks } from "../states/actions/tasks.actions";
import { useEffect } from "react";
import { useAppState } from "../context/AppState";
export function Boards() {
  const {
    // state: { 
    //   tasks,
    // },
    dispatch,
  } = useAppState();
  
  useEffect(() => {
    getTasks(dispatch)
  }, []);
  // console.log(tasks)
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
        conteudo="Criar tarefa"
        // onClick={() => toast.success("Task created successfully")}
      />
       
      </div>
    </div>
    </div>

    <AcoesModal
        modalID="test"
        titleButton="test"
        descricao="test"
      />
          </section>
  );
}
