import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About Textutils" /> */}
      <Navbar title='TextUtils'/>
      <Alert alert = "This is alert"/>
      <div className="container my-3" >
       {/* <TextForm heading="Enter your text"/> */}
       <About/>
      </div>
    </>
  );
}

export default App;
