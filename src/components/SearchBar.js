import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';


export default function SearchBar() {
    return (
        <div className="flex justify-center my-6">
            <div className="flex w-3/4 items-center justify-center space-x-3">
                <input
                    type="text"
                    placeholder="Name your city..."
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg"
                />
                <GoSearch
                    size={30}
                    className="text-white transition ease-out hover:scale-125 cursor-pointer" />
                <IoLocationSharp
                    size={30}
                    className="text-white transition ease-out hover:scale-125 cursor-pointer" />
            </div>

            <div className="flex justify-center items-center w-1/4">
                <button
                    className="text-white ">
                    &deg;C
                </button>
                <p className="text-white mx-1">|</p>
                <button
                    className="text-white ">
                    &deg;F
                </button>
            </div>

        </div>
    )
}

