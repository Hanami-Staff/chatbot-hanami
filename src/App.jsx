import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";
import { Container } from "./components";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
