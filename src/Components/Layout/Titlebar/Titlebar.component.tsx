import React from "react";
import "./Titlebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TitleBarProps
  extends Readonly<{
    onMaximize: () => void;
    onMinimize: () => void;
    onClose: () => void;
  }> {}

const TitleBarComponent = (props: TitleBarProps) => (
  <div className="title-bar w-full">
    <div className="title">wp-edits</div>

    <div className="title-bar-btns">
      <button onClick={props.onMinimize}>
        <FontAwesomeIcon icon="window-minimize" />
      </button>

      <button onClick={props.onMaximize}>
        <FontAwesomeIcon icon="window-restore" />
      </button>

      <button onClick={props.onClose} className="close-btn">
        <FontAwesomeIcon icon="times" />
      </button>
    </div>
  </div>
);

export { TitleBarComponent };
