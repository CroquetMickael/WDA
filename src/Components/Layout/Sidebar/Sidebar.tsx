import React from "react";
import { SidebarLink } from "./SidebarContainer";
import { Match, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface SidebarProps {
  open: boolean;
  toggleOpen: () => void;
  links: SidebarLink[];
  toggleModal: () => void;
  modalOpen: boolean;
}
const Sidebar = (props: SidebarProps) => (
  <div
    className={`bg-white shadow transition-all ease-out duration-100 h-full flex flex-col justify-between  ${
      props.open ? "w-1/3 lg:w-1/6" : "w-16"
    } ${props.modalOpen ? "z-0" : "z-20"}`}
  >
    <div
      className="p-4 font-bold text-center cursor-pointer"
      onClick={props.toggleOpen}
    >
      <FontAwesomeIcon icon="bars" />
    </div>
    <ul className="flex-1 list-reset">
      {props.links.map((link, index: number) => (
        <li key={index}>
          <Match path={link.href}>
            {(match) => (
              <Link
                className={`block no-underline p-4 text-grey-darker font-bold 
              border-r-4 hover:border-blue-400 ${
                match.match ? "border-blue-400" : "border-grey-400"
              }`}
                to={link.href}
              >
                <FontAwesomeIcon className="mx-1" icon={link.icon} size="1x" />
                <span className={`inline m-0 ${props.open ? "" : "hidden"}`}>
                  {link.libelle}
                </span>
              </Link>
            )}
          </Match>
        </li>
      ))}
    </ul>
    <footer
      className="block w-full p-4 border-t cursor-pointer border-grey"
      onClick={props.toggleModal}
    >
      <FontAwesomeIcon className="mx-1" icon="user-cog" />{" "}
      <span className={`inline m-0 ${props.open ? "" : "hidden"}`}>
        Settings
      </span>
    </footer>
  </div>
);

export { Sidebar };
