import {useEffect} from 'react';
import axios from 'axios'

const activities = ({user}) => {

    const httpPet = async () => {
        try {
            const res = await axios.get(`https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=`, { headers: {"Authorization" : `Bearer 2a1250b9070c7d374f1a0c5bb1344bca194b3469`}})
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <h1>Activities</h1>
        <h4>These are the activities from {user.firstname} {user.lastname}</h4>
        <img src={user.profile_medium} alt="profile" />
        <button onClick={() => httpPet()}>Get Data</button>
    </div>
  )
}

export default activities