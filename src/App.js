import "./App.css";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="w-[90vw] h-[90vh] flex bg-gray-300 text-white border-4 border-[#3C4A5F] rounded-lg bg-[#3C4A5F] opacity-80  backdrop-saturate-200">
      <div className="w-[20%]">
        <List />
      </div>
      <div className="w-[60%]">
        <Chat />
      </div>

      <div className="w-[20%]">
        <Detail />
      </div>
    </div>
  );
}

export default App;
