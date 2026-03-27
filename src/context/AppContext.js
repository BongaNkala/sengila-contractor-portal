import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // Simulate real-time notifications
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: 'New daily report submitted',
        type: 'info',
        timestamp: new Date().toISOString(),
      };
      setNotifications(prev => [newNotification, ...prev].slice(0, 10));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const addNotification = (notification) => {
    setNotifications(prev => [notification, ...prev].slice(0, 10));
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      setDarkMode,
      notifications,
      addNotification,
      sidebarOpen,
      setSidebarOpen,
      activeProject,
      setActiveProject,
    }}>
      {children}
    </AppContext.Provider>
  );
};