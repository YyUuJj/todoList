import Header from "./components/Header";
import ClassTodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Finish from "./components/Finish";
import './App.css';
import './Header.css';

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <Footer />
        <Finish />
    </div>
  );
}

export default App;
