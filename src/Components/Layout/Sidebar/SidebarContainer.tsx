import React, { useContext } from "react";
import { Sidebar } from "./Sidebar";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  SidebarContext,
  SidebarContextInterface
} from "../../Context/SidebarContext/SidebarContext";

export interface SidebarLink {
  href: string;
  libelle: string;
  icon: IconProp;
}

interface SidebarContainerProps {
  toggleModal: () => void;
  modalOpen: boolean;
}

const SidebarContainer = (props: SidebarContainerProps) => {
  const sidebarValues: SidebarContextInterface = useContext(SidebarContext);

  const links: SidebarLink[] = [
    {
      href: "/home",
      icon: "home",
      libelle: "Home"
    },
    {
      href: "/newContent",
      icon: "plus",
      libelle: "Write new content"
    },
    {
      href: "/todo",
      icon: "clipboard-list",
      libelle: "Your todos "
    },
    {
      href: "/calendar",
      icon: "calendar-alt",
      libelle: "You calendar"
    },
    {
      href: "/site",
      icon: "desktop",
      libelle: "Your website"
    }
  ];

  const sidebarProps = {
    links,
    open: sidebarValues.open,
    toggleOpen: sidebarValues.toggleOpen,
    toggleModal: props.toggleModal,
    modalOpen: props.modalOpen
  };

  return <Sidebar {...sidebarProps} />;
};

export { SidebarContainer };
