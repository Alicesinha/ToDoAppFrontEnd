import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";

export const onOpenModal = (): IActions => ({
  type: ActionsEnum.SET_MODAL_OPEN,
  payload: true,
});

export const onCloseModal = (): IActions => ({
  type: ActionsEnum.SET_MODAL_OPEN,
  payload: false,
});
