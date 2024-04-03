import React, { useState } from 'react';

function MyComponent(props) { 
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const updateName = () => { setName("Spongebob") };
    const updateAge = () => { setAge(age + 1) };
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={updateAge}>Age up</button>
            
        </div>
    )
}

export default MyComponent;