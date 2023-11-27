import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { IAppState, IStates } from "../../interfaces/appState";
import { IActions } from "../../interfaces/actions";
import {
  appInitialState,
  combineReducer,
} from "../../states/reducers/app.reducer";
import { setAppState } from "../../states/actions/app.actions";

interface IAppStateContext extends IStates<IAppState, IActions> {}

interface Props {
  children: ReactNode;
}

const CadastroStateContext = createContext<IAppStateContext>(
  {} as IAppStateContext
);

export function AppStateProvider({ children }: Props) {
  const [state, reducerDispatch] = useReducer(combineReducer, appInitialState);

  function dispatch(
    action: IActions | ((dispatch: (action: IActions) => void) => void)
  ) {
    if (typeof action === "function") {
      return action(reducerDispatch);
    }

    reducerDispatch(action);
  }

  useEffect(() => {
    sessionStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const appState = sessionStorage.getItem("appState");
    if (appState) {
      reducerDispatch(setAppState(JSON.parse(appState)));
    } else {
      reducerDispatch(setAppState(appInitialState));
    }
  }, []);


  return (
    <CadastroStateContext.Provider value={{dispatch, state}}>
      {children}
    </CadastroStateContext.Provider>
  );
}

export function useAppState() {
  const { state, dispatch } = useContext(CadastroStateContext);

  return {
    state,
    dispatch,
  };
}
