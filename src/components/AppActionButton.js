import React from "react";

const AppActionButton = ({ label, onClick, disabled }) => {
    return (
    <button onClick={onClick} disabled={disabled} style={{ marginRight: 8 }}>
      {label}
    </button>
  );
};
export default AppActionButton;