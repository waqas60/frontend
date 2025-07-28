import { BrowserRouter, Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
