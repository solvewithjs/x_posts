function sortTasks(tasks) {
    return tasks.sort((a, b) => a.priority - b.priority || new Date(a.dueDate) - new Date(b.dueDate));
}
