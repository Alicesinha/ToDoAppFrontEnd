import { ActionsEnum } from "../../enums/actions.enum";
import { IActions } from "../../interfaces/actions";


export const getTasks = async (dispatch: (arg: IActions) => void | null) => {
    try {
        const response = await fetch('http://localhost:5185/Task');
      
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const payload = await response.json();
        if (payload) dispatch({ type: ActionsEnum.GET_TASKS, payload });
        
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
}
