export class Task {
    constructor(taskName, assignees = [], dueDate = null, checked = false, rotational = false, schedule = [], rotators = []) {
      this.taskName = taskName;
      this.dueDate = dueDate;
      this.checked = checked;
      this.rotational = rotational;
      this.schedule = schedule;
      this.rotators = rotators;
      if (this.rotational == false) {
        this.assignees = assignees;
      } else {
        this.assignees = this.rotators.length > 0 ? [this.rotators[0]] : [];
      }
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