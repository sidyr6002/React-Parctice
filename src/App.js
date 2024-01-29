import { useCallback, useRef, useState } from "react";
import Input from "./Input.js";

const peopleList = [
    {
        id: 1,
        name: "John",
        age: 30,
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
    },
    {
        id: 3,
        name: "Haarika",
        age: 20,
    },
    {
        id: 4,
        name: "Aishwarya",
        age: 15,
    },
    {
        id: 5,
        name: "Rabindra",
        age: 30,
    },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //console.log("i: " + i + " j: " + j);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const App = () => {
    /* Get name and age of each person */
    const [people, setPeople] = useState(peopleList);

    const search = useCallback((searchName) => {
        console.log("Search: " + searchName);
        console.log(people[0]);

        const filteredPeople = peopleList.filter((person) =>
            person.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setPeople(filteredPeople);
    }, [people]);

    return (
        <div>
            <div>
                <button
                    className="button"
                    onClick={() => setPeople(shuffleArray([...people]))}
                >
                    Shuffle
                </button>
                <Input placeholder="Search" onChange={search} />
            </div>
            <div>
                <table className="people">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "left" }}>Name</th>
                            <th style={{ textAlign: "left" }}>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person) => (
                            <tr key={person.id}>
                                <td className="person">{person.name}</td>
                                <td className="age">{person.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
