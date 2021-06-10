import * as React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  if (count >= 42) return <p>That's enough!</p>;
  return (
    <form>
      <p>
        You have clicked {count} {count !== 1 ? "times" : "time"}.
      </p>
      <button type="button" onClick={() => setCount((count) => ++count)}>
        Click me!
      </button>
    </form>
  );
};
