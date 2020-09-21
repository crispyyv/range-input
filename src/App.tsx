import React from "react";
import { RangeInput } from "./components/RangeInput";
import { StyledApp } from "./styles/Styles";

function App() {
  return (
    <StyledApp>
      <header className="App-header">
        <h1>This is RangeInput</h1>
      </header>
      <main>
        <RangeInput min={10} max={200} />
      </main>

      <footer>All right reserved @crispyyv</footer>
    </StyledApp>
  );
}

export default App;
