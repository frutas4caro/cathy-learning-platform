import Clipboard from "./components/Clipboard";
import EvidenceBadge from "./assets/badges/evidence-badge.png";
import ContextBadge from "./assets/badges/context-badge.png";
import InterpretBadge from "./assets/badges/interpret-badge.png";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Top content (optional) */}
      <div className="top-content">
        <h1>Historians...</h1>
      </div>

      {/* Bottom section with 3 SVG boxes */}
      <div className="bottom-section">
        <div className="box-column">
          <img src={EvidenceBadge} alt="evidence badge" className="badge" />
          <Clipboard
            title={"Use Evidence"}
            content={[
              { text: "This is information historians " },
              { text: "collect to learn", bold: true },
              { text: " about the past. (documents, artifacts)." },
            ]}
          ></Clipboard>
        </div>
        <div className="box-column">
          <img src={ContextBadge} alt="context badge" className="badge" />
          <Clipboard
            title={"Use Context"}
            content={[
              { text: "The " },
              { text: "background", bold: true },
              { text: " or circumstances surrounding an event." },
            ]}
          ></Clipboard>
        </div>
        <div className="box-column">
          <img src={InterpretBadge} alt="interpret badge" className="badge" />
          <Clipboard
            title={"Interpret Evidence"}
            content={[
              { text: "This is the way a historian " },
              { text: "explains", bold: true },
              { text: " or " },
              { text: "understands", bold: true },
              { text: " the past." },
            ]}
          ></Clipboard>
        </div>
      </div>
    </div>
  );
}

export default App;
