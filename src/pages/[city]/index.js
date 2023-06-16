// 'use client'
// import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function page(props) {
    const router = useRouter();
    const [city, setCity] = useState('Test')
    // console.log('PARAMS', props)
    // console.log('PARAMSign')
    return (
        <div className="weatherScreen">
            <div className='weatherInfoBox'>
                <h1>{props.city.name}</h1><br />

                <h4>{props.city.weather[0].main}</h4><br />
                <h4>{props.city.weather[0].description}</h4><br />

                <img height={"100px"} src={`https://openweathermap.org/img/w/${props.city.weather[0].icon}.png`} /><br />

                <h2>{Math.floor(props.city.main.temp - 273)}  &#176;C</h2>
                <h4>Feels Like &nbsp;{Math.floor(props.city.main.feels_like - 273)}  &#176;C</h4>

                <div className='mescContainer' >
                    <div style={{ border: "0" }}>
                        <h5>Temp Min. {Math.floor(props.city.main.temp_min - 273)}&#176;C</h5>
                    </div>
                    <div>
                        <h5>Temp Max. {Math.floor(props.city.main.temp_max - 273)}&#176;C</h5>

                    </div>
                </div>

                <div className='mescContainer'>
                    <div>
                        <h5>Wind {props.city.wind.speed}</h5>
                    </div>
                    <div>
                        <h5>Humidity {props.city.main.humidity}</h5>

                    </div>
                </div>



            </div>
            <div className='inputForm'>
                <input onChange={(e) => setCity(e.target.value)}></input> <br/>
                <button onClick={() => { router.replace(`${city}`); }}><span>Search</span> </button>
            </div>
        </div>

    )
}

export async function getServerSideProps(context) {
    // let data = {test:'test'}

    let { city } = context.query

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75e690174fd07fac7c35957677b8d494`)

    data = await data.json()


    return { props: { city: data } };
}