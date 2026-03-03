import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./features/dashboard/pages";
import { Toaster } from "@jahorwitz/ui";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
