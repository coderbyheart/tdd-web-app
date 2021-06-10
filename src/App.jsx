import * as React from "react";
import { Counter } from "./Counter";
import { helloWorld } from "./lib/helloWorld";

export const App = () => (
  <main>
    <p>{helloWorld()}</p>
    <hr />
    <Counter />
  </main>
);
