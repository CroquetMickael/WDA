import React, { useState, Component, FunctionComponentElement } from "react";

export interface SidebarContextInterface {
  open: boolean;
  toggleOpen: () => void;
}
interface SidebarProps {
  children: FunctionComponentElement<Component>;
}

const SidebarContext = React.createContext<any>(null);

const SidebarProvider = (props: SidebarProps) => {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
      setOpen(!open);
    };

  return (
    <SidebarContext.Provider
      value={{
        open,
        toggleOpen
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
