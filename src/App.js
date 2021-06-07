import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');
  const [selectOption, setSelectOption] = React.useState("uppercase");

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const toUpperCase = () => {
    let newText = textInput;

    for (let i = 0; i < newText.length; i++) {
      //get the character to change
      let character = newText.charAt(i);
      //get the ascii value of that specific character
      let asciiValue = newText.charCodeAt(i);
      console.log(asciiValue);
      //check if the character is in lowercase and change it to uppercase
      if (asciiValue > 96 && asciiValue <= 123) {
        let characterToReplace = String.fromCharCode(asciiValue - 32);
        newText = newText.replace(character, characterToReplace);
      }
      console.log(newText);
    }

    setTextOutput(newText);

  }

  const toLowerCase = () => {
    let newText = textInput;

    for (let x = 0; x < newText.length; x++) {
      //get the character to change
      let character = newText.charAt(x);

      //find its ascii value
      let asciiValue = newText.charCodeAt(x);

      //check if the character's ascii value is in uppercase and change it to lowercase
      if (asciiValue < 90 && asciiValue >= 65) {
        let characterToReplace = String.fromCharCode(asciiValue + 32);
        newText = newText.replace(character, characterToReplace);
      }
    }

    setTextOutput(newText);

  }

  const handleSubmit = event => {
    event.preventDefault();
    if (selectOption === "uppercase") {
      toUpperCase();
    } else {
      toLowerCase();
    }

  };

  const onSelect = event => {
    console.log(event);
    setSelectOption(event.target.value);
  }



  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput} />
        </label>

        <select value={selectOption} onChange={onSelect}>
          <option value="uppercase">Upper Case</option>
          <option value="lowercase">Lower Case</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
