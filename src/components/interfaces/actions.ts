import { ActionsEnum } from "../enums/actions.enum";

export interface IActions {
  type: ActionsEnum;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}