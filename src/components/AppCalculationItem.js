import React from "react";

const AppCalculationItem = ({ a, b, op, result, onRestore }) => {
  return (
    <div>
      <span>{a} {op} {b} = {result}</span>
      <button onClick={onRestore} style={{ marginLeft: 10 }}>
        Przywróć
      </button>
    </div>
  );
};

export default AppCalculationItem;