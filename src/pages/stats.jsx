import React, {useState} from 'react'

import {lastMonths} from '../data';

const Stats = ({user}) => {

  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-5 text-white">These are the stats from <a target="_blank" className="underline text-rose-500" rel="noreferrer" href={userInfo.id !== '' ? `https://strava.com/athletes/${userInfo.id}` : 'https://www.strava.com/athletes/99855324'}>{user.name} {user.lastname}</a> (Last Three Months) 📅</h1>
      <div className="grid grid-cols-3">
      {lastMonths.map((month) => (
        <div className="hover:scale-110 ease-in duration-200 mx-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={month.month}>
          <h2 className="text-white text-2xl font-bold">{month.month}</h2>
          <h3 className="text-white font-bold">{month.time}</h3>
          <h3 className="text-white font-bold">{month.effectivityTotal}</h3>
          {
            month.activities.map((activity) => (
              <p>{activity.name}</p>
            ))
          }
        </div>
      ))}
      </div>
    </div>
  )
}

export default Stats