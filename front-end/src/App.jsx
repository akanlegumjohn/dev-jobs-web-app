import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          }
        />
        <Route
          path="/job/:id"
          element={
            <JobDetails
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route path="*" element={<PageNotFound isDarkMode={isDarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
