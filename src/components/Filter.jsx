import React from 'react'
import pokemonTypes from '../pokemonTypes'

export default function Filter( { selectedType, onTypeChange } ) {
  return (
    <div className="pl-10 md:pl-20 pt-14 w-36 md:w-60">
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className='w-full border focus:outline-none p-3 rounded-full'
        >
          <option value="">All Types</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
  )
}
