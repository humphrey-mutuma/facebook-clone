import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <Login>
          <header className="app__header">
            <Header />
          </header>
          <main className="app__body">
            <section className="app__bodySidebar">
              <Sidebar />
            </section>
            <section className="app__bodyFeed">
              <Feed />
            </section>
            <section className="app__bodyWidgets">
              <Widgets />
            </section>
          </main>
        </Login>
      )}
    </div>
  );
}

export default App;
