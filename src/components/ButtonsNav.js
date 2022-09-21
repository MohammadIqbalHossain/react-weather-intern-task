import React from 'react'

function ButtonsNav({setQuery}) {

    const randomNum = () => Math.floor(Math.random() * 100)


    const cities = [
        {
            id: randomNum(),
            city: "Toronto"
        },
        {
            id: randomNum(),
            city: "Sydney"
        },
        {
            id: randomNum(),
            city: "London"
        },
        {
            id: randomNum(),
            city: "Ontonio"
        },
        {
            id: randomNum(),
            city: "New york"
        },
    ]
    console.log(cities[0].city);

    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery({ q: city.city })}
                >
                    {city.city}
                </button>
            ))}
        </div>
    )
}

export default ButtonsNav