import React, { useState, useEffect } from "react";
import AppCalculationHistory from "./AppCalculationHistory";
import { AppHeader } from "./AppHeader";
import AppActionButton from "./AppActionButton";

export default function AppCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [compareMsg, setCompareMsg] = useState("");
  const [history, setHistory] = useState([]);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    if (a === "" || b === "") {
      setCompareMsg("");
      return;
    }
    const numA = Number(a);
    const numB = Number(b);
    if (numA > numB) setCompareMsg("Liczba A jest większa od liczby B");
    else if (numA < numB) setCompareMsg("Liczba A jest mniejsza od liczby B");
    else setCompareMsg("Liczba A jest równa liczbie B");
  }, [a, b]);

  const canCalculate = a !== "" && b !== "";

  const calculate = (op) => {
    const numA = Number(a);
    const numB = Number(b);
    let res;
    if (op === "/" && numB === 0) {
      alert("Nie można dzielić przez zero!");
      return;
    }
    switch (op) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        res = numA / numB;
        break;
      default:
        return;
    }
    setResult(res);
    setHistory([...history, { a: numA, b: numB, op, result: res }]);
  };

  const restoreFromHistory = (index) => {
    const item = history[index];
    if (!item) return;
    setA(item.a);
    setB(item.b);
    setResult(item.result);
    if (item.a > item.b) setCompareMsg("Liczba A jest większa od liczby B");
    else if (item.a < item.b)
      setCompareMsg("Liczba A jest mniejsza od liczby B");
    else setCompareMsg("Liczba A jest równa liczbie B");
    setHistory(history.slice(0, index + 1));
  };

  return (
    <div style={{ fontSize }}>
      <AppHeader onFontChange={setFontSize} />
      <div>
        <label>A: </label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div>
        <label>B: </label>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div style={{ marginTop: 10 }}>
        <AppActionButton
          label="+"
          onClick={() => calculate("+")}
          disabled={!canCalculate}
        />
        <AppActionButton
          label="-"
          onClick={() => calculate("-")}
          disabled={!canCalculate}
        />
        <AppActionButton
          label="*"
          onClick={() => calculate("*")}
          disabled={!canCalculate}
        />
        <AppActionButton
          label="/"
          onClick={() => calculate("/")}
          disabled={!canCalculate}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Wynik: {result} <br />
      </div>
      <div style={{ marginTop: 10 }}>
        Porównanie: {compareMsg} <br />
      </div>
      <AppCalculationHistory
        history={history || []}
        onRestore={restoreFromHistory}
      />
    </div>
  );
}
