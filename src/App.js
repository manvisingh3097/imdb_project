import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import { useParams } from "react-router";

function App() {
  const catName = useParams();
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
