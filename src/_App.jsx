import { useState } from "react";
import Bio from "./Bio";
import './App.css';
import 'bootstrap/';
import axios from "axios";



const App = () => {

    const [name, setName] = useState('Chidum');
    const [count, setCount] = useState(0);
    const [catFacts, setCatFacts] = useState([]);

    const link = "https://cat-fact.herokuapp.com/facts";
    const fetchData = async () => {
        try {
            const response = await axios.get(link);
            setCatFacts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();

    return (
        <>
            <Bio
                name={name}
                count={count}
            />

            <p>{name}</p>

            <button onClick={
                () => setCount(count + 1)
            }>Add 1</button>
            <button onClick={
                () => setCount(count - 1)
            }>Subtract 1</button>
            <h3>{count}</h3>
        </>
    );
}

export default App;