import './App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills.js'

function App() {
  return (<div className='q'>
    <Nav></Nav>
    <Header/>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  );
}

export default App;
