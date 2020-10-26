import React from 'react';

function List(props){

    return (
        <table>
        <thead>
        <th>Reference</th>
        <th>Contenu</th>
        <th>Actions</th>
        </thead>
        <tbody>
       { props.list.map((element, index) => (
            <tr key={element.id}>
               <td>{element.id}</td>
               <td>{element.text}</td>
               <td><a href="#" onClick={() => props.remove(element.id)}>supprimer</a></td>
            </tr>
   
       ))}
       </tbody>
       </table>
    );

}

export default List;
