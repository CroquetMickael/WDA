import React, { useState } from "react";
import { SidebarContainer } from "./Sidebar/SidebarContainer";
import { ModalContainer } from "../Modal/Modal.container";

const Layout = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };
  return (
    <div className="flex h-full">
      <SidebarContainer modalOpen={modalOpen} toggleModal={toggleModal} />
      <ModalContainer
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        title="Account Settings"
      ><div>test</div></ModalContainer>
      <div className="w-full z-10">
        <div className={`h-full ${props.overflow ? "overflow-auto" : "overflow-hidden"}`}>
          <div className={`h-full ${props.marginTop ? "mt-8" : ""}`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Layout };
