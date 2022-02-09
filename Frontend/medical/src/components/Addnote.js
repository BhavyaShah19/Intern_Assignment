import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';

const Addnote = (props) => {
    const context = useContext(NoteContext);
    const { addnote } = context
    const [records, setrecords] = useState({
        name: "",
        sickdate: "",
        recoverdate: "",
        note: ""
    });

    const handleclick = (e) => {
        e.preventDefault();
        addnote(records.name,records.sickdate,records.recoverdate,records.note);
    }

const onchange = (e) => {
    setrecords({ ...records, [e.target.name]: e.target.value });
}
return (
    <div>
        <div className="container" style={{ 'marginTop': '4rem' }}>
            <h1>Add a Note</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Disease-Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        minLength={5}
                        required
                        aria-describedby="emailHelp"
                        placeholder="Enter Disease Name"
                        onChange={onchange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sickdate">SickDate</label>
                    <input
                        type="date"
                        minLength={5}
                        required
                        className="form-control"
                        id="sickdate"
                        name="sickdate"
                        placeholder="Enter date when you get sick"
                        onChange={onchange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recoverdate">RecoverDate</label>
                    <input
                        type="date"
                        className="form-control"
                        id="recoverdate"
                        name="recoverdate"
                        minLength={5}
                        required
                        placeholder="Enter date when you get recovered"
                        onChange={onchange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Enter Notes if you want</label>
                    <input
                        type="text"
                        className="form-control"
                        id="notes"
                        name="notes"
                        minLength={5}
                        required
                        placeholder="Enter notes if you want"
                        onChange={onchange}
                    />
                </div>
                <button disabled={records.name.length < 5} type="submit" className="btn btn-primary" onClick={handleclick}>
                    Add Note
                </button>
            </form>
        </div>
    </div>
)
}

export default Addnote
