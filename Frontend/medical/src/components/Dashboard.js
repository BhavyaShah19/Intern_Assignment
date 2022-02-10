import React, { useContext, useEffect, useState } from 'react'
import Addnote from './Addnote'
import NoteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom'


const card={
  marginBottom:"3rem"
}

const spacing={
  marginBottom:"3rem",
  marginTop:"3rem"
}
const Dashboard = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { getnote } = context
  const [newrecords, setnewrecords] = useState([])

  let data = []
  const fetchdata = async () => {
    data = await getnote();
  }



  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchdata();
      setTimeout(() => {
        setnewrecords(data)
      }, 1000);
    }
    else {
      navigate('/login')
    }
  }, [])


  return (
    <div>
      <Addnote />
      <h1 style={spacing}>Your Records</h1>
      <div className="container">
        <div className="row">
          {newrecords.map((item) =>
            <div className="col-sm-4 col-md-4 col-lg-4 ">
              <div className="card " key={item._id} style={card}>
                <h5 className="card-header">{item.name}</h5>
                <div className="card-body">
                 <b>Sick Date:</b> <p className="card-text">{item.sickdate}</p>
                  <b>Recover Date:</b> <p className="card-text">{item.recoverdate}</p>
                  <b>Any note:</b> <p className="card-text">{item.note}</p>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Dashboard
