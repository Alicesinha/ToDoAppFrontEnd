
export class IndicarLocalProvaService {
    public static readonly tasks = 'Task';
    public static async getTasks(){
        return await fetch(`http://localhost:5185/${this.tasks}`)
    }
}