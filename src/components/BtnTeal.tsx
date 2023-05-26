import React from 'react'
import { BtnPropsTypes } from '../types/ProjectTypes'
import LoadingSpinner from './LoadingSpinner'



function BtnTeal({value,loading}:BtnPropsTypes) {
    return (
        <button
            type="submit"
            className="bg-[#39393F] text-white px-5 py-3 rounded-lg text-center mt-8"
        >
            {loading?<LoadingSpinner />:value}
        </button>
    )
}

export default BtnTeal