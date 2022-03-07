import {useEffect, useState} from 'react';

const Activities = ({user}) => {

    /* const httpPet = async () => {
        try {
            const res = await axios.get(`https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=`, { headers: {"Authorization" : `Bearer 2a1250b9070c7d374f1a0c5bb1344bca194b3469`}})
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    } */

    const [userActivities, setUserActivities] = useState({});

    useEffect(() => {
        setUserActivities(user.activities)
    }, [user.activities]);

  return (
    <div>
        <h1>Activities</h1>
        <h4>These are the activities from {user.name} {user.lastname}</h4>
        <img src={user.image} alt="profile" />
        <p>Recent Activities: </p>
        <ul>
            {
                userActivities.map(activity => (
                    <div>
                        <li>{activity.name}</li>
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default Activities