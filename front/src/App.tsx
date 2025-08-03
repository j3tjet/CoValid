import { Web3Provider } from "./components/Web3Provider.tsx"
import HomePagina from "./pages/home/index.tsx";
import ChatPagina from "./pages/chat/index.tsx";
import ExportadoresPagina from "./pages/exportadores/index.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/index.tsx";


const App = () => {
  return (
    <Web3Provider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePagina />} />
          <Route path="/exportadores" element={<ExportadoresPagina />} />
          <Route path="/chat" element={<ChatPagina />} />
        </Routes>
      </Router>
    </Web3Provider>
  );
};  
export default App;