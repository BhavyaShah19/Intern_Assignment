import React, { useContext, useEffect } from 'react'
import Addnote from './Addnote'
import NoteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const context=useContext(NoteContext);
  const navigate=useNavigate();
  const {getnote,records}=context

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      getnote();
    }
    else{
      navigate('/login')
    }
  },[])
  
  return (
    <div>
      <Addnote/>
      <h1>Your Records</h1>
      {records.map(item=>{
        <div className="card">
        <h5 className="card-header">{item.name}</h5>
        <div className="card-body">
        <p className="card-text">{item.sickdate}</p>
        <p className="card-text">{item.recoverdate}</p>
          <p className="card-text">{item.note}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      })}
    </div>
  )
}

export default Dashboard
