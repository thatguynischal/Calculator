import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";
import * as math from "mathjs"

const Calculator = () => {
  const btnColor = "#FF9500";
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const clear = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join(""); //removes commas
    setResult(math.evaluate(input))
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-2">
      <Input text={text} result={result} />
      <div className="flex gap-2">
        <Buttons symbol="7" handleClick={addToText}/>
        <Buttons symbol="8" handleClick={addToText}/>
        <Buttons symbol="9" handleClick={addToText}/>
        <Buttons symbol="/" color={btnColor} handleClick={addToText}/>
      </div>
      <div className="flex gap-2">
        <Buttons symbol="4" handleClick={addToText}/>
        <Buttons symbol="5" handleClick={addToText}/>
        <Buttons symbol="6" handleClick={addToText}/>
        <Buttons symbol="*" color={btnColor} handleClick={addToText}/>
      </div>
      <div className="flex gap-2">
        <Buttons symbol="1" handleClick={addToText}/>
        <Buttons symbol="2" handleClick={addToText}/>
        <Buttons symbol="3" handleClick={addToText}/>
        <Buttons symbol="+" color={btnColor} handleClick={addToText}/>
      </div>
      <div className="flex gap-2">
        <Buttons symbol="0" handleClick={addToText}/>
        <Buttons symbol="." handleClick={addToText}/>
        <Buttons symbol="=" handleClick={calculateResult}/>
        <Buttons symbol="-" color={btnColor} handleClick={addToText}/>
      </div>
      <Buttons symbol="Clear" handleClick={clear}/>
    </div>
  );
};

const Buttons = ({ symbol = "", color, handleClick }) => {
  return (
    <div>
      <button
        onClick={() => handleClick(symbol)}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {symbol}
      </button>
    </div>
  );
};

const Input = ({ text, result }) => {
  return (
    <div className="h-24 w-52 flex justify-end items-end flex-col bg-white text-black p-4 rounded">
      <div className="result flex-1 text-2xl">{text}</div>
      <div className="text flex-1 text-xl">{result}</div>
    </div>
  );
};

export default Calculator;
