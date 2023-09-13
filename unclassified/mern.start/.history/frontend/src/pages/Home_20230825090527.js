import {useEffect, useState} from "react"

const Home = () => {

    useEffect(()=>{
        const fetchWorkouts =  async () => {

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