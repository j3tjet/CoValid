import { Web3Provider } from "./components/Web3Provider.tsx"
import { ConnectKitButton } from "connectkit";


const App = () => {
  return (
    <Web3Provider>
      <ConnectKitButton />
    </Web3Provider>
  );
};  
export default App;