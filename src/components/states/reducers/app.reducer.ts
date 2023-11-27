import { IActions } from "../../interfaces/actions";
import { IAppState } from "../../interfaces/appState";
import { taskInitialState, tasksReducer } from "./tasks.reducer";

export const appInitialState: IAppState = {
  tasks: taskInitialState
};

export function combineReducer(state: IAppState, action: IActions) {
  return {
    ...state,
    tasks: tasksReducer(state.tasks, action),


  } satisfies IAppState;
}
