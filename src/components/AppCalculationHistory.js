import React from "react";
import AppCalculationItem from "./AppCalculationItem";

const AppCalculationHistory = ({ history, onRestore }) => {
  const safeHistory = Array.isArray(history) ? history : [];

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Historia obliczeń</h3>
      {safeHistory.length === 0 ? (
        <p>Brak historii obliczeń</p>
      ) : (
        <ul>
          {safeHistory.map((item, index) => (
            <li key={index}>
              <AppCalculationItem
                a={item.a}
                b={item.b}
                op={item.op}
                result={item.result}
                onRestore={() => onRestore(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppCalculationHistory;