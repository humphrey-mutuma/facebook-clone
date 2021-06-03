import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <main className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export default App;
