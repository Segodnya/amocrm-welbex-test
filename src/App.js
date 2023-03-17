import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <div className="ballPurple"></div>
      <div className="ballRedL"></div>
      <div className="ballRedS"></div>
      <div className="lightPurple"></div>
      <div className="lightRed"></div>
    </div>
  );
}

export default App;
