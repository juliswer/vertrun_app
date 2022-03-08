import React, {useState} from 'react'

import {lastMonths} from '../data';

const Stats = ({user}) => {

  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-5 text-white">These are the stats from <a target="_blank" className="underline text-rose-500" rel="noreferrer" href={userInfo.id !== '' ? `https://strava.com/athletes/${userInfo.id}` : 'https://www.strava.com/athletes/99855324'}>{user.name} {user.lastname}</a> (Last Three Months) 📅</h1>
      {lastMonths.map((month) => (
        <div className="card" key={month.month}>
          <h2 className="text-white">{month.month}</h2>
        </div>
      ))}
    </div>
  )
}

export default Stats