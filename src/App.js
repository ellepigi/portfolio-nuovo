import './App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (<div className='q'>
    <Nav></Nav>
    <Header/>
    <Projects></Projects>
    {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
