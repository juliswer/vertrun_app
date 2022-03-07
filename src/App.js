import React, {useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Stats from './pages/stats';
import Activities from './pages/activities';
import axios from 'axios'
import {data} from './data';
import Navbar from './components/Navbar'

const App = () => {

  const [infoUser, setInfoUser] = useState({});

  const navigation = useNavigate();

  /* const httpPet = async () => {
    
    try {
      const res = await axios.get('https://www.strava.com/api/v3/athlete', { headers: {"Authorization" : `Bearer 2a1250b9070c7d374f1a0c5bb1344bca194b3469`} });
      setInfoUser(res.data)  
    } catch (error) {
      console.log('Error: ', error);
    }
  } */

  useEffect(() => {
    /* httpPet()
    if(!infoUser) alert('no user found') */
    if(window.location.pathname === '/') navigation('/activities') 
    setInfoUser(data)
  }, []);

  return (
    <div>
      <Navbar user={infoUser} />
      <Routes>
      {/* <div>
      <h1>This is the page</h1>
      <div>
        <p>This is the page of {infoUser.firstname} {infoUser.lastname}</p>
      </div>
      </div> */}
      <Route path="/activities" element={<Activities user={infoUser} />} />
      <Route path="/stats/:id" element={<Stats />} />
    </Routes>
    </div>
  )
}

export default App;