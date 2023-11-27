import { ITasksReducer } from "components/states/reducers/tasks.reducer";

export interface IStates<S, D> {
  state: S;
  dispatch(arg: D): void;
}
export interface IAppState {
  tasks: ITasksReducer;
}
