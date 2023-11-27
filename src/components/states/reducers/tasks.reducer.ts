import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";
import { tasksInterface } from "../../interfaces/tasks";


export interface ITasksReducer{
    tasks: tasksInterface
}
export const taskInitialState: ITasksReducer = {
    tasks: {} as tasksInterface
}
export const tasksReducer = (  state: ITasksReducer = taskInitialState,
    action: IActions) => {
    const { type, payload } = action;
    switch (type) {
        case ActionsEnum.SET_APP_STATE:
          return {
            ...state,
            ...payload.cliente,
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