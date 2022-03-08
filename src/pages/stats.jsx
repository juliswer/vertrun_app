import React, {useState} from 'react'

import {lastMonths} from '../data';

const Stats = ({user}) => {

  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <h1 className="text-white">These are the stats from <a target="_blank" rel="noreferrer" href={userInfo.id !== '' ? `https://strava.com/athletes/${userInfo.id}` : 'https://www.strava.com/athletes/99855324'}>{user.name} {user.lastname}</a></h1>
      {lastMonths.map((month) => (
        <div className="card" key={month.month}>
          <h2 className="text-white">{month.month}</h2>
        </div>
      ))}
    </div>
  )
}

export default Stats