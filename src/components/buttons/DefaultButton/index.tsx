import { useRef } from "react";
import { ButtonProps } from "react-bootstrap";
import { ButtonVariant, Color } from "react-bootstrap/esm/types";

interface Props extends Omit<ButtonProps, "title"> {
  onClick?(arg?: any): any;
  conteudo?: string;
  src?: string;
  alt?: string;
  buttonColor?: ButtonVariant | Color;
  textColor?: string;
  large?: boolean;
  loading?: boolean;
  disabled?: boolean;
  ref?: any;
  title?: string;
  condicaoDisabled?: boolean;
  miniButton?: boolean;
  bold?: boolean;
  margin?: string;
}

export function DefaultButton({
  conteudo,
  onClick,
  src,
  alt,
  buttonColor,
  textColor,
  large,
  loading,
  disabled,
  title,
  condicaoDisabled,
  miniButton,
  margin,
  bold,
  ...rest
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      title={title}
      className={`btn btn-${buttonColor ?? "secondary"} ${
        textColor && `text-${textColor}`
      } ${large && `btn-lg`} ${large === false && `btn-sm`}
      ${bold && `fw-bold`}
      position-relative ${
        (loading || disabled) && "disabled"
      }`}
      disabled={
        loading || condicaoDisabled || disabled
      }
      {...rest}
    >
      {src && alt && (
        <img
          style={{
            visibility:
              loading ? "hidden" : "visible",
          }}
          className={`wd-22 ${!conteudo ? "m-0" : margin ?? "me-2"} ${
            !conteudo && "p-0"
          }`}
          src={src}
          alt={alt}
        />
      )}
      {conteudo && (
        <span
          className="cursor-pointer"
          style={{
            visibility:
              loading ? "hidden" : "visible",
          }}
        >
          {conteudo}
        </span>
      )}
      <div
        className={`${
          (loading ) &&
          "spinner-border custom-spinner"
        }`}
        style={{
          width: 20,
          height: 20,
          position: "absolute",
          margin: "auto",
          top: "0",
          bottom: "0",
          left: `${miniButton ? "25%" : "40%"}`,
        }}
      />
    </button>
  );
}
