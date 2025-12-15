import React from "react";

export const AppHeader = ({ onFontChange }) => {
  return (
    <header style={{ marginBottom: 20 }}>
    <div>
      Karol Kołodziejczyk
        <div >
          <span style={{ fontSize: 12, cursor: "pointer" }} onClick={() => onFontChange(12)}>
            A
          </span>
          <span style={{ fontSize: 17, cursor: "pointer" }} onClick={() => onFontChange(18)}>
            A
          </span>
          <span style={{ fontSize: 25, cursor: "pointer" }} onClick={() => onFontChange(26)}>
            A
          </span>
        </div>
      </div>
    </header>
  );
};
