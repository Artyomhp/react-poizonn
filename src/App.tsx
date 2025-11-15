import Header from "./components/Header";
import Home from "./pages/Home";

import "./index.css";

function App() {
  return (
    <div className="h-full">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
