import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase() ;
        setText(newText) ; 
    }
    const handleLowClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase() ;
        setText(newText) ; 
    }
    const handleOnChange = (event)=>{
       setText(event.target.value) ;
    }
    //setText
    const[text , setText] = useState('enter text here');
 
  return (
    <>
    <div>
      <h1>{props.heading} </h1>
      <div class="mb-3">
        <textarea
          class="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>

    </div>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  );
}
