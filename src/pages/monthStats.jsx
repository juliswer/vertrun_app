import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {lastMonths} from '../data';

const MonthStats = ({user}) => {

    const [monthInfo, setMonthInfo] = useState({});

    const [userInfo, setUserInfo] = useState({});

    const {month} = useParams();

    const compareMonth = month.charAt(0).toUpperCase() + month.slice(1)

    const result = lastMonths.filter(realMonth => realMonth.month === compareMonth)

    const loadMonthInfo = () => {
        setMonthInfo(result[0])
    }
    
    useEffect(() => {
        loadMonthInfo()
    }, []);


  return (
    <div className="mx-auto container">
        <h1 className="text-3xl font-bold my-5 text-white">Activities from <Link to="/stats"><a className="underline">{monthInfo.month}</a></Link></h1>
        <div className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg mt-3" src={user.image} alt="user"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">📌 {user.city}</span>
            <div className="flex mt-4 space-x-3 lg:mt-6">
                <a rel="noreferrer" href={userInfo.id ? `https://strava.com/athletes/${userInfo.id}` : 'https://www.strava.com/athletes/99855324'} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank">Follow on Strava</a>
            </div>
            </div>
            </div>
            <h4 className="text-white text-2xl my-5">These are the activities from {user.name} {user.lastname} in {monthInfo.month}:</h4>
            <div className="grid grid-cols-4">
                {monthInfo.activities.map((activity) => (
                        <a className="hover:scale-105 ease-in duration-200 mx-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={activity.image} className="rounded-lg shadow-lg mb-4" alt="" />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{activity.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{activity.distance ? `Distance Done: ${activity.distance}` : ''}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Last Done: {activity.date}</p>
                            <p className="font-normal text-rose-300">Duration: {activity.time}</p>
                            <p className="font-normal text-lime-500">{activity.elevationGain}</p>
                        </a>
                ))}
            </div>
    </div>
  )
}

export default MonthStats