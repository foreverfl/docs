"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface AppState {
  language: string;
  setLanguage: (lang: string) => void;
  // 필요한 다른 전역 상태 추가 가능
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
