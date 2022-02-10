import NoteContext from "./noteContext";
import { useState } from "react";

const Notestate = (props) => {
    const [records, setrecords] = useState([])

    const getnote = async () => {
        const response = await fetch('http://localhost:8000/fetchnotes', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        
        // changing state will make evrything reload
        // setrecords([json]);

        return json
    }

    const addnote = async (name, sickdate, recoverdate, note) => {
        const response = await fetch('http://localhost:8000/addnotes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, sickdate, recoverdate, note })
        });
        // const rec = {
        //     "_id": "62034ee89644d6289ef7ae33",
        //     "user": "6200e28765acea7669d8e40e",
        //     "name": name,
        //     "sickdate": sickdate,
        //     "recoverdate": recoverdate,
        //     "note": note,
        //     "__v": 0
        // }
        setrecords([records.concat()]);
        
    }
    return (
        <div>
            <NoteContext.Provider
                value={{ records, addnote, getnote }}
            > {props.children} </NoteContext.Provider>
        </div>
    )
}

export default Notestate
