import React,{useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api';
const CountryPicker = ( {handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
    useEffect (() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }
        fetchAPI();
    },[setCountries]);
    console.log(countries);
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
