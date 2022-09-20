import React from 'react'
import { FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { BiWind } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { GiSunset } from 'react-icons/gi';

export default function WeatherTemp() {
    return (
        <div>
            <div className="text-center py-6 text-xl text-cyan-300">
                <p>Cloudy or something</p>
            </div>

            <div className="flex items-center justify-between text-white py-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesGqhQaszlJe27qa9s_I__yD4mNcL6gDAq5lm-BXCy52jO5r17_sqIGdzHi_3KVWErCw&usqp=CAU" alt="" className="w-20 rounded-full" />

                <p className="text-5xl font-bold">34&deg;</p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                       
                        <FaTemperatureLow size={18} className="mr-1" /> 
                        Real fell:
                        <span className="font-medium ml-1">14&deg;</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <WiHumidity size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">66%</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <BiWind size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">4 km/h</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

              <BiSun />
              <p className="font-light">
                Rise: <span className="font-medium ml-1">4:54 AM</span>
              </p>
              <p className="font-light">|</p>

              <GiSunset />
              <p className="font-light">
                Set: <span className="font-medium ml-1">4:54 AM</span>
              </p>
              <p className="font-light">|</p>

              <BiSun />
              <p className="font-light">
                High: <span className="font-medium ml-1">46&deg;</span>
              </p>
              <p className="font-light">|</p>

              <BiSun />
              <p className="font-light">
                Low: <span className="font-medium ml-1">46&deg;</span>
              </p>
              <p className="font-light">|</p>
            </div>
        </div>
    )
}
