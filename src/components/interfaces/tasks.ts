export interface subTasksInterface {
    idSubTask: number;
    description: string;
    checkDate: string;
    check: boolean
}
export interface tasksInterface {
    idTask: number;
    title: string;
    description: string;
    idStatus: number;
    statusDescription: string;
    deliveryDate: string;
    createDate: string;
    finishDate: string;
    subTask: subTasksInterface[];
}
export interface tasksDataInterface {
    tasks: tasksInterface[];
    subTask: subTasksInterface[];
}



