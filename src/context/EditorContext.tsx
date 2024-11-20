import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EditSettings {
  width: number;
  height: number;
  blur: number;
  greyscale: boolean;
}

interface EditorContextProps {
  settings: EditSettings;
  setSettings: React.Dispatch<React.SetStateAction<EditSettings>>;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

interface EditorProviderProps {
  children: ReactNode; // Correct typing for the children prop
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<EditSettings>({
    width: 300,
    height: 300,
    blur: 0,
    greyscale: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('editorSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage on update
  useEffect(() => {
    localStorage.setItem('editorSettings', JSON.stringify(settings));
  }, [settings]);

  return (
    <EditorContext.Provider value={{ settings, setSettings }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = (): EditorContextProps => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
