import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";
import { tasksDataInterface, tasksInterface } from "../../interfaces/tasks";



export interface ITasksReducer{
    tasks: tasksInterface,
    tasksData: tasksDataInterface[],
}
export const taskInitialState: ITasksReducer = {
    tasks: {} as tasksInterface,
    tasksData: []
}

export const tasksReducer = (  state: ITasksReducer = taskInitialState,
    action: IActions) => {
    const { type, payload } = action;
    switch (type) {
        case ActionsEnum.SET_APP_STATE:
          return {
            ...state,
            ...payload.tasks,
          }
        case ActionsEnum.GET_TASKS:
          return {
            ...state, tasks:
              payload
          }
        default:
          return state;
      }
}