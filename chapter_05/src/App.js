import './App.css';
import Header from './component/Header.js';
import Body from './component/Body.js';
import Footer from './component/Footer.js';

function ChildComp() {
  return <div>cild component</div>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
          <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
