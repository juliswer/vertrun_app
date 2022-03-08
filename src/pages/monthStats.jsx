import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {lastMonths} from '../data';

const MonthStats = () => {

    const [monthInfo, setMonthInfo] = useState({});

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
    </div>
  )
}

export default MonthStats