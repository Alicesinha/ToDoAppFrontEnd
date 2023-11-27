import { AppStateProvider } from "./AppState";
import { ModalProvider } from "./ModalContext";
interface ProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <AppStateProvider>
        <ModalProvider>{children}</ModalProvider>
      </AppStateProvider>

  );
}
