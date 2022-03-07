import {useEffect, useState} from 'react';
import {activities} from '../data'

const Activities = ({user}) => {

    const [userInfo, setUserInfo] = useState({});

    /* const httpPet = async () => {
        try {
            const res = await axios.get(`https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=`, { headers: {"Authorization" : `Bearer 2a1250b9070c7d374f1a0c5bb1344bca194b3469`}})
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    } */

  return (
    <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-5 text-white">Activities</h1>
            <div className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg mt-3" src={user.image} alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">📌 {user.city}</span>
            <div className="flex mt-4 space-x-3 lg:mt-6">
                <a href={userInfo.id ? `https://strava.com/athletes/${userInfo.id}` : 'https://www.strava.com/athletes/99855324'} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank">Follow on Strava</a>
            </div>
            </div>
            </div>
            <h4 className="text-white text-2xl my-5">These are the activities from {user.name} {user.lastname}:</h4>
            <p className="text-white my-2">Recent Activities:</p>
            <ul>
                <div className="grid grid-cols-4">
                {activities.map((activity) => (
                        <a className="mx-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={activity.image} className="rounded-lg shadow-lg mb-4" alt="" />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{activity.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{activity.distance}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Last Done: {activity.date}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{activity.time}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{activity.elevationGain}</p>
                        </a>
                ))}
                </div>
            </ul>
    </div>
  )
}

export default Activities