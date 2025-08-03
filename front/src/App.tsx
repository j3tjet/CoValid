import { Web3Provider } from "./components/Web3Provider.tsx"
import Chat from "./pages/chat/index.tsx";
import Home from "./pages/home/index.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/index.tsx";


const App = () => {
  return (
    <Web3Provider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </Web3Provider>
  );
};  
export default App;