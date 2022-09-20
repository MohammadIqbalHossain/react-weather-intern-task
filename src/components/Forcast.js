import React from 'react'

export default function Forcast({title}) {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className='flex justify-between items-center'>
                <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-white">4:50</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
                    <p className="text-white">22&deg;</p>
                </div>

                <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-white">4:50</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
                    <p className="text-white">22&deg;</p>
                </div>

                <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-white">4:50</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
                    <p className="text-white">22&deg;</p>
                </div>

                <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-white">4:50</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
                    <p className="text-white">22&deg;</p>
                </div>

                <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-white">4:50</p>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
                    <p className="text-white">22&deg;</p>
                </div>
            </div>


        </div>
    )
}
