import React, {useState} from 'react';
import Form from './form';
import List from './list';

function Center(){


    const [texts, setTexts] = useState([]);
    const addText = (text) => {
      const newText = [text, ...texts];
      setTexts(newText);
    }
    
    const removeel = id => {
      const rm = [...texts].filter(el => el.id !== id)
      setTexts(rm);  

    }

    return (
         <div>
         <Form onSubmit={addText}></Form>
         <List list={texts} remove={removeel}></List>
         </div>

    );

}

export default Center;
