import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
    console.log(country)
    const {name ,flags,population,area,cca3} =country

    const [visited,setVisited] =useState(false);

    const handleVisited =() =>{
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountry(country);
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this Country.' : 'I want to Visit'}
        </div>
    );
};

export default Country;