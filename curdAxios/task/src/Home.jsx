import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import dbjson from './db.json'
function Home() {
  const [dbdata , setdbdata]= useState(dbjson)
  console.log('dbdata', dbdata)

  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
  
      axios.get('https://jsonplaceholder.typicode.com/users')

      .then(res => setdata(res.data))
      .catch(err => console.error(err));
  }, []);
  const handledelete = (id) => {
    const confirm = window.confirm('would you like to Delete ?');
     setdbdata(data.filter((data) => data.id !== id));
    if(confirm){
      axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
      .then (res =>{
        navigate('/')
      location.reload()
      }).catch(error=>console.log(error));
    }
  }
  

  return (
    <div className='data-flex flex-column justify-content-center align-item-center bg-light vh-100'>
      <h1>list of users</h1>
      <div className='w-5 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
          </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dbdata.users.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                <Link to={`/read/${d.id}`} className='btn btn-sm btn-primary me-2'>Read</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={e =>handledelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
 
}

export default Home;
