import React from "react";
import { WPRouter } from "./WPRouter";
import { Titlebar } from "../Components/Layout/Titlebar";
import { Base } from "../Components/Layout/Base";
import { loadFontAwesomeLibraries } from "../Components/Common/FontAwesome/Library";

loadFontAwesomeLibraries();
const App: React.FC = () => {
  return (
    <div className="App">
      <Base>
        <Titlebar />
        <WPRouter />
      </Base>
    </div>
  );
};

export default App;
