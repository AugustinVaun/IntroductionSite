import './App.css';
import Subject from './Subject.js';
import Projects from './Projects.js';
import Topbar from './Topbar';


function App() {
  return (
      <div>
        <Topbar />
        <br></br>
        <br></br>
        <Subject />
        <br></br>
        <br></br>
        <Projects /> 
      </div>      
  );
}

export default App;
