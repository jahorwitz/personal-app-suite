import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import { Layout, ScrollToTop } from "./layout";
import { HomePage, ContactPage } from "./pages";

/**
 * Root application component.
 *
 * Sets up routing with an optional `:lang` prefix for i18n.
 * All pages render inside the shared Layout (Header + Footer).
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/:lang?"
          element={
            <LanguageProvider>
              <Layout />
            </LanguageProvider>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
