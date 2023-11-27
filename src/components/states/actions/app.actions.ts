import { ActionsEnum } from "../../enums/actions.enum";
import { IAppState } from "../../interfaces/appState";

export const setAppState = (payload: IAppState) => ({
  type: ActionsEnum.SET_APP_STATE,
  payload,
});
