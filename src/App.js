import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./Components/CharacterList";
import CharacterDetails from "./Pages/CharacterDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
