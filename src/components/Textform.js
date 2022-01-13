import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('Text has been converted to Upper Case','success')
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('Text has been converted to Lower Case','success')
    }
    const handleRevClick=()=>{
        let newText=text.split("")
        let reverseString=newText.reverse()
        let joinString=reverseString.join("")
        setText(joinString)
        props.showAlert('String has been reversed','success')
    }
    const handleClearClick=()=>{
        let newText=""
        setText(newText)
        props.showAlert('Text has been cleared','success')
    }
    const handleCopy=()=>{
        let newText=document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert('Text has been copied to clipboard','success')
    }
    const handleExtraSpaces=()=>{
       let newText=text.replace(/\s+/g, " ")
       setText(newText.replace(/^\s+|\s$/g, " "))
       props.showAlert('Extra spaces has been removed','success')
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter the text here')
    return (
        <>
        <div className="container">
            <div>
            <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
            </div>
                <div className="my-5">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse String</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container my-4 text-${props.mode==='dark'?'light':'dark'}`}>
            <h2>Your text Summary</h2>
            <p><i>{text.split(" ").length}</i> words <i>{text.length}</i> characters</p>
            <p>{0.08*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
        </div>
        </>
    )
}
