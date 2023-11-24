import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface TooltipHoverProps {
  posicao: "top" | "bottom" | "left" | "right";
  titulo: string | undefined;
  children: React.ReactElement;
}

export function TooltipHover({ posicao, titulo, children }: TooltipHoverProps) {
  return (
    <OverlayTrigger
      placement={posicao}
      overlay={<Tooltip id="tooltip">{titulo}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}
