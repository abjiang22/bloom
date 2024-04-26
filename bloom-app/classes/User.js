export class User {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      task.addAssignee(this);
    }
  
    removeTask(task) {
      this.tasks = this.tasks.filter(t => t !== task);
      task.removeAssignee(this);
    }
  }