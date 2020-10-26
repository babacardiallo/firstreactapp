import React, {useState} from 'react';

function Form(props){


    const [input, setInput] = useState('');

    const Changer = c => {
        setInput(c.target.value);
    }

    const subMit = s => {
        s.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    } 

    return (
        <form className="Form" onSubmit = {subMit}>
          <input
          type="text"
          placeholder="entrer votre text"
          value={input}
          name="text"
          className="Form-input"
          onChange = {Changer}
          />
          
          <p><button >Add Text</button></p>

        </form>
    );

}

export default Form;
