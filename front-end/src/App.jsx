import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
