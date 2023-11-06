import React, { useEffect, useState } from "react";
import Message from "./Components/IntroUdemy/Message";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getadvice();
  }, []);
  return (
    <div>
      <Message advice={advice} getadvice={getadvice} count={count} />
    </div>
  );
};

export default App;
