import "./style.scss";
import { getTasks } from "../states/actions/tasks.actions";
import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useState } from "react";
import { useAppState } from "../context/AppState";
import { statusTaskEnum } from "../enums/statusTask.enum";


export function Boards() {
  const {
    state: {
      tasks: { tasksData },
    },
    dispatch,
  } = useAppState();

  const [tasks, setTasks] = useState(tasksData);
  const ondragend = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.idTask, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };


  useEffect(() => {
    getTasks(dispatch);
  }, []);

  useEffect(() => {
    setTasks(tasksData);
  }, [tasks]);
  return (
    <section className="custom_container">
      <div className="row d-flex justify-content-center pt-3">
        <div className="col-8">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <a href="/CreateTasks" style={{textDecoration: "none"}}> Add task</a>
            </button>
          </div>
        </div>
      </div>
      <DragDropContext onDragEnd={ondragend}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="tasks"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className="boards">
                <div className="col-lg-3 board_child backGround_light">
                  <h2>To Do</h2>
                  <div className="card_container">
                    {tasks
                      .filter(
                        ({ idStatus }) => statusTaskEnum.toDo === idStatus
                      )
                      .map(({ title, description, idTask, subTask }, index) => (
                        <Draggable
                          key={`${idTask}`}
                          draggableId={`${idTask}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              className="card accordion"
                              id={`accordionSubTask${idTask}`}
                              key={idTask}
                            >
                              <div className="card-body">
                                <li
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    
                                    ...provided.draggableProps.style,
                                    backgroundColor: snapshot.isDragging
                                      ? "lightblue"
                                      : "white",
                                  }}
                                >
                                  <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <div
                                      className="accordion-item"
                                      key={idTask}
                                    >
                                      <h2
                                        className="accordion-header"
                                        id="headingOne"
                                      >
                                        <button
                                          className="accordion-button"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target={`#collapse${idTask}`}
                                          aria-expanded="true"
                                          aria-controls={`collapse${idTask}`}
                                        >
                                          SubTasks
                                        </button>
                                      </h2>
                                      {subTask && subTask.length > 0 ? (
                                        subTask.map(
                                          ({ description }) => (
                                            <div
                                              id={`collapse${idTask}`}
                                              className="accordion-collapse collapse show"
                                              aria-labelledby="headingOne"
                                              data-bs-parent={`accordionSubTask${idTask}`}
                                            >
                                              <div className="accordion-body">
                                                <p>
                                                  <strong>Description: </strong>
                                                  {description}
                                                </p>
                                              </div>
                                            </div>
                                          )
                                        )
                                      ) : (
                                        <div
                                          id={`collapse${idTask}`}
                                          className="accordion-collapse collapse show"
                                          aria-labelledby="headingOne"
                                          data-bs-parent={`accordionSubTask${idTask}`}
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
                                </li>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                  </div>
                </div>
                <div className="col-lg-3 board_child backGround_blue">
                  <h2>In Progress</h2>
                  <div className="card_container">
                    {tasks
                      .filter(
                        ({ idStatus }) => statusTaskEnum.inProgress === idStatus
                      )
                      .map(({ title, description, idTask, subTask },index) => (
                        <Draggable
                        key={`${idTask}`}
                        draggableId={`${idTask}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card accordion"
                            id={`accordionSubTask${idTask}`}
                            key={idTask}
                          >
                            <div className="card-body">
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  
                                  ...provided.draggableProps.style,
                                  backgroundColor: snapshot.isDragging
                                    ? "lightblue"
                                    : "white",
                                }}
                              >
                                <div className="card-body">
                                  <h5 className="card-title">{title}</h5>
                                  <p className="card-text">{description}</p>
                                  <div
                                    className="accordion-item"
                                    key={idTask}
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingOne"
                                    >
                                      <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${idTask}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse${idTask}`}
                                      >
                                        SubTasks
                                      </button>
                                    </h2>
                                    {subTask && subTask.length > 0 ? (
                                      subTask.map(
                                        ({ description }) => (
                                          <div
                                            id={`collapse${idTask}`}
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent={`accordionSubTask${idTask}`}
                                          >
                                            <div className="accordion-body">
                                              <p>
                                                <strong>Description: </strong>
                                                {description}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <div
                                        id={`collapse${idTask}`}
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent={`accordionSubTask${idTask}`}
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
                              </li>
                            </div>
                          </div>
                        )}
                      </Draggable>
                      ))}
                  </div>
                </div>
                <div className="col-lg-3 board_child backGround_green">
                  <h2>Done</h2>
                  <div className="card_container">
                    {tasks
                      .filter(
                        ({ idStatus }) => statusTaskEnum.complete === idStatus
                      )
                      .map(({ title, description, idTask, subTask },index) => (
                        <Draggable
                        key={`${idTask}`}
                        draggableId={`${idTask}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="card accordion"
                            id={`accordionSubTask${idTask}`}
                            key={idTask}
                          >
                            <div className="card-body">
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  
                                  ...provided.draggableProps.style,
                                  backgroundColor: snapshot.isDragging
                                    ? "lightblue"
                                    : "white",
                                }}
                              >
                                <div className="card-body">
                                  <h5 className="card-title">{title}</h5>
                                  <p className="card-text">{description}</p>
                                  <div
                                    className="accordion-item"
                                    key={idTask}
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingOne"
                                    >
                                      <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${idTask}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse${idTask}`}
                                      >
                                        SubTasks
                                      </button>
                                    </h2>
                                    {subTask && subTask.length > 0 ? (
                                      subTask.map(
                                        ({ description }) => (
                                          <div
                                            id={`collapse${idTask}`}
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent={`accordionSubTask${idTask}`}
                                          >
                                            <div className="accordion-body">
                                              <p>
                                                <strong>Description: </strong>
                                                {description}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <div
                                        id={`collapse${idTask}`}
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent={`accordionSubTask${idTask}`}
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
                              </li>
                            </div>
                          </div>
                        )}
                      </Draggable>
                      ))}
                  </div>
                </div>

              </div>
                {provided.placeholder}

            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
