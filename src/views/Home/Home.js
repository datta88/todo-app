import React, { useState } from "react";
import './Home.css';
import Task from "../../components/Task/Task";

const Home = () => {
    const [tata, setTata] = useState([])
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescrtpion] = useState('')

    const addDataToCard = () => {
        const randomId = Math.floor(Math.random() * 1000)
        const obj = {
            id: randomId,
            name: name,
            title: title,
            description: description
        };
        const val = [...tata, obj]
        setTata(val);
        localStorage.setItem("DataStrore", JSON.stringify(val))
        setName('')
        setTitle('')
        setDescrtpion('')
    }
    const remove = () => {
        const rem = {
            id: '',
            name: '',
            title: '',
            description: '',
        }
        const removedata = [...tata, rem];
        setTata(removedata)
    }
    return (
        <>
            <h1 className="text-center" >ToDo List</h1>
            <div className="home-main-container">

                <div className="border1">
                    {
                        tata.map((data, i) => {
                            const { id, name, title, description } = data;
                            return (
                                <>
                                    <Task
                                        id={id} name={name} title={title} description={description} remove={remove}
                                    />
                                </>

                            )

                        })
                    }
                </div>

                <div className="border2">
                    <div className="text-center">
                        <h1>{name}</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input-box"
                            value={name}
                            onChange={((e) => { setName(e.target.value) })}
                        /><br />
                        <h1>{title}</h1>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input-box"
                            value={title}
                            onChange={((e) => { setTitle(e.target.value) })}
                        /><br />

                        <h1>{description}</h1>
                        <input
                            type="text"
                            placeholder="Description"
                            className="input-box"
                            value={description}
                            onChange={((e) => { setDescrtpion(e.target.value) })}
                        /><br />

                        <button type="button" className="add-btn" onClick={() => {
                            addDataToCard()
                        }} >Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home