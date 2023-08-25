import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import axios from "axios";

const APP = () => {

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

    // This is the useEffect syntax
    // useEffect(() => {}, []);
    // This is the useEffect syntax

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    {/* This is the ssyntax for displaying items on loop */}

                    {/* {
                        catFacts.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))
                    } */}

                    {/* This is the ssyntax for displaying items on loop */}
                    {
                        catFacts.map((item, index) => (

                            <div className="col-sm-4">
                                <div key={index} className="card">
                                    <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltea278b56c3fdcbfe/64e712155dfc361fbf162fed/Man_United_Lack_of_goals.jpg?auto=webp&format=pjpg&width=640&quality=60" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.source}</h5>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    );
}

export default APP;