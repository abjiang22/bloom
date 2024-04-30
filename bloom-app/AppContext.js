import React, { createContext, useState, useContext } from 'react';
import {Task} from "./classes/Task";
import {User} from "./classes/User";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    new User("Me"),
    new User("Cassie"),
    new User("Stephanie"),
    new User("Wendy")
  ]);

  const [tasks, setTasks] = useState([
    new Task("Task 3", [users[0]]),
    new Task("Task 4", [users[0]]),
    new Task("Task 5", [users[1]]),
    new Task("Task 6", [users[1]]),
    new Task("Task 7", [users[2]]),
    new Task("Task 8", [users[2]]),
    new Task("Task 9", [users[3]]),
    new Task("Task 10", [users[3]]),
    new Task("Task 11", [users[3]]),
    new Task("Task 12", [users[3]]),
  ]);

  return (
    <AppContext.Provider value={{ users, setUsers, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
