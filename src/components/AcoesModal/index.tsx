import { Modal } from "../Modal";

interface AcoesModalProps {
  modalID: string;
  titleButton: string;
  descricao: string;
  onClick?: () => void;
}

export function AcoesModal({
  modalID,
  descricao,
  titleButton,
  onClick,
}: AcoesModalProps) {
  return (
    <Modal
      modalID={modalID}
      title="Atenção!"
      body={
        <div className="container">
          <p>{descricao}</p>
        </div>
      }
    />
  );
}
