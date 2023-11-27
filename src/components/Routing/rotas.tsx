import { CreateText } from "../Boards/CreateTasks";
import { Boards } from "../Boards";

export const breadcrumbItems = [
  {
    nome: "Boards",
    url: "Boards",
    element: <Boards />,
  },
  {
    nome: "Create Tasks",
    url: "CreateTasks",
    element: <CreateText />,
  }
];
