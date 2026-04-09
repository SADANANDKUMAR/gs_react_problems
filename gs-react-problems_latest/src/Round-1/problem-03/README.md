## 📌 React Todo List with Persistent Storage & Sorting

The goal of this exercise is to create a **fully functional Todo List application** with  **persistent data storage** .

You are provided with a partially built React app that:

* Displays a styled list of todos
* Allows adding new todos
* Includes styles for completed items

However, the application currently  **lacks functionality for completing todos and persisting data** .

---

## 📋 Requirements

1. **Toggle Todo Completion**

* Clicking on a todo item should toggle its `checked` state (completed/incomplete)

1. **Persistent Storage**

* Save the todo list state in **localStorage**
* Load and restore todos from localStorage when the app initializes

1. **Automatic Sorting**

* Completed (checked) todos should automatically move to the **bottom of the list**
* Active (unchecked) todos should remain at the **top**
