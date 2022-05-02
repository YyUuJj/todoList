import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import './App.css';
import './Header.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
