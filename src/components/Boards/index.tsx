import "./style.scss";
import { getTasks } from "../states/actions/tasks.actions";
import { useEffect } from "react";
import { useAppState } from "../context/AppState";
import { statusTaskEnum } from "../enums/statusTask.enum";
import {
  subTasksInterface, tasksInterface,
} from "components/interfaces/tasks";
export function Boards() {
  const {
    state: {
      tasks: { tasksData },
    },
    dispatch,
  } = useAppState();

  useEffect(() => {
    getTasks(dispatch);
  }, []);


  return (
    <section className="custom_container">
      <div className="row d-flex justify-content-center pt-3">
        <div className="col-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Write the task title here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Add task
            </button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="boards">
          <div className="col-lg-3 board_child backGround_light">
            <h2>To Do</h2>
            <div className="card_container">
              {tasksData.map(
                (item: tasksInterface, index) =>
                  statusTaskEnum.toDo === item.idStatus && (
                    <div
                    className="card accordion"
                    id={`accordionSubTask${index}`}
                    key={`${item.idTask}`}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="accordion-item" key={item.idTask}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                          >
                            SubTasks
                          </button>
                        </h2>
                        {item.subTask && item.subTask.length > 0 ? (
                          item.subTask.map((subItem: subTasksInterface) => (
                            <div
                              id={`collapse${index}`}
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent={`accordionSubTask${index}`}
                              key={`${subItem.idSubTask}`}
                            >
                              <div className="accordion-body">
                                <p>
                                  <strong>Description: </strong>
                                  {subItem.description}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent={`accordionSubTask${index}`}
                          >
                            <div className="accordion-body">
                              <p>
                                <strong>No subtasks</strong>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  )
              )}
            </div>
          </div>
          <div className="col-lg-3 board_child backGround_blue">
            <h2>In Progress</h2>
            <div className="card_container">
              {tasksData.map(
                (item, index) =>
                  statusTaskEnum.inProgress === item.idStatus && (
                    <div
                      className="card accordion"
                      id={`accordionSubTask${index}`}
                      key={item.idTask}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="accordion-item" key={item.idTask}>
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index}`}
                              aria-expanded="true"
                              aria-controls={`collapse${index}`}
                            >
                              SubTasks
                            </button>
                          </h2>
                          {item.subTask && item.subTask.length > 0 ? (
                            item.subTask.map((subItem: subTasksInterface) => (
                              <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent={`accordionSubTask${index}`}
                              >
                                <div className="accordion-body">
                                  <p>
                                    <strong>Description: </strong>
                                    {subItem.description}
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div
                              id={`collapse${index}`}
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent={`accordionSubTask${index}`}
                            >
                              <div className="accordion-body">
                                <p>
                                  <strong>No subtasks</strong>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-lg-3 board_child backGround_green">
            <h2>Done</h2>
            <div className="card_container">
              {tasksData.map(
                (item, index) =>
                  statusTaskEnum.complete === item.idStatus && (
                    <div
                    className="card accordion"
                    id={`accordionSubTask${index}`}
                    key={item.idTask}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="accordion-item" key={item.idTask}>
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                          >
                            SubTasks
                          </button>
                        </h2>
                        {item.subTask && item.subTask.length > 0 ? (
                          item.subTask.map((subItem: subTasksInterface) => (
                            <div
                              id={`collapse${index}`}
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent={`accordionSubTask${index}`}
                            >
                              <div className="accordion-body">
                                <p>
                                  <strong>Description: </strong>
                                  {subItem.description}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent={`accordionSubTask${index}`}
                          >
                            <div className="accordion-body">
                              <p>
                                <strong>No subtasks</strong>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}