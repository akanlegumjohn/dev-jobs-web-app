import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    // Retrieve mode from local storage on component mount
    localStorage.getItem("mode") === "dark"
  );

  useEffect(() => {
    // Update local storage whenever mode changes
    localStorage.setItem("mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Add class to root element based on mode
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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
