export class Task {
    constructor(taskName, assignees = [], dueDate = null, checked = false, rotational = false) {
      this.taskName = taskName;
      this.assignees = assignees;
      this.dueDate = dueDate;
      this.checked = checked;
      this.rotational = rotational;
    }
  
    addAssignee(user) {
      this.assignees.push(user);
    }

    toggleCheck() {
      this.checked = !this.checked;
    }
  
    removeAssignee(user) {
      this.assignees = this.assignees.filter(assignee => assignee !== user);
    }
  }