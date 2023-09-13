import {BroswerRouter, Routes, Route} from "react-router-dom"

// pages & components
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="pages">
            <Routes>
              <Route 
                path="/"
                element={}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;