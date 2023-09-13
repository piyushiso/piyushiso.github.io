import {useEffect, useState} from "react"

const Home = () => {

    const [workouts, setWor]

    useEffect(()=>{
        const fetchWorkouts =  async () => {
            const response = await fetch("http://localhost:4000/api/workouts")
            const json = await response.json()

            if(response.ok){

            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home