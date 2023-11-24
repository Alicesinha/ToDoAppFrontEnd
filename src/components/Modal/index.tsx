import { ReactNode, Ref } from "react";
import { TooltipHover } from "../TooltipHover";

interface ModalProps {
  modalID: string;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  width?: "xl" | "lg" | "sm";
  padding?: string;
  scrollable?: boolean;
  fullscreen?: boolean;
  onClick?: () => void;
  reference?: Ref<HTMLDivElement>;
  modalHeaderClass?: string;
}

export function Modal({
  modalID,
  title,
  body,
  footer,
  padding,
  width,
  scrollable,
  fullscreen,
  onClick,
  reference,
  modalHeaderClass,
}: ModalProps) {
  return (
    <div
      ref={reference}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      id={modalID}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className={ `modal-dialog ${width && "modal-" + width} ${padding && padding}  ${
          scrollable && "modal-dialog-scrollable" 
        } ${fullscreen && "modal-fullscreen"}`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <TooltipHover posicao="bottom" titulo={title}>
              <h1 className={`${modalHeaderClass} modal-title fs-5 fw-bold`}>
                {title}
              </h1>
            </TooltipHover>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClick}
            ></button>
          </div>
          <div className="modal-body">
            {body}
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
