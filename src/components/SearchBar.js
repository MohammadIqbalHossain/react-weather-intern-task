import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';


export default function SearchBar({ setQuery, units, setUnits }) {

    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({ q: city })
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Fetching users location.");
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Location fetched!");
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    }

    const handleUnitChanges = (e) => {
        const selectedUnits = e.currentTarget.name;
        if (units !== selectedUnits) {
            setUnits(selectedUnits)
        }
    }
    return (
        <div className="flex justify-center my-6">
            <div className="flex w-3/4 items-center justify-center space-x-3">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Name your city..."
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg"
                />
                <GoSearch
                    onClick={handleSearchClick}
                    size={30}
                    className="text-white transition ease-out hover:scale-125 cursor-pointer" />
                <IoLocationSharp
                    size={30}
                    onClick={handleLocationClick}
                    className="text-white transition ease-out hover:scale-125 cursor-pointer" />
            </div>

            <div className="flex justify-center items-center w-1/4">
                <button
                    className="text-white ">
                    &deg;C
                </button>
                <p className="text-white mx-1">|</p>
                <button
                    className="text-white "
                    onClick={handleUnitChanges}>
                    &deg;F
                </button>
            </div>

        </div>
    )
}

