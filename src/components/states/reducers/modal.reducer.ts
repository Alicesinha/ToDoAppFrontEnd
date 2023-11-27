import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";
import { IModalState } from "../../interfaces/appState";

export const modalReducerInitialState: IModalState = {
  modalOpen: false,
};

export function modalReducer(
  state: IModalState = modalReducerInitialState,
  action: IActions
): IModalState {
  const { type, payload } = action;
  switch (type) {
    case ActionsEnum.SET_APP_STATE:
      return payload;
    case ActionsEnum.SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: payload,
      };
    default:
      return state;
  }
}
