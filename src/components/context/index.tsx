import { ModalProvider } from "./ModalContext";
import { CookiesProvider } from "react-cookie";

interface ProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <CookiesProvider>
          <ModalProvider>
              {children}
          </ModalProvider>
    </CookiesProvider>
  );
}
