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
    new Task("Wash dishes", [users[0]], new Date()),
    new Task("Clean floor", [users[0]], new Date()),
    new Task("Water plants", [users[1]], new Date()),
    new Task("Take out trash", [users[1]], new Date()),
    new Task("Buy toilet paper", [users[2]], new Date()),
    new Task("Buy new cups", [users[2]], new Date()),
    new Task("Clean bathroom", [users[3]], new Date()),
    new Task("Vacuum first floor", [users[3]], new Date()),
    new Task("Scrub bathrub", [users[3]], new Date()),
    new Task("Fix TV", [users[3]], new Date()),
  ]);

  return (
    <AppContext.Provider value={{ users, setUsers, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
