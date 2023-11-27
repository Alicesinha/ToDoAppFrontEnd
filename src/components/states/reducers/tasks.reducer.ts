import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";
import { tasksInterface } from "../../interfaces/tasks";



export interface ITasksReducer{
    tasks: tasksInterface,
    tasksData: tasksInterface[],
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
            ...state, tasksData:
              payload
          }
        default:
          return state;
      }
}