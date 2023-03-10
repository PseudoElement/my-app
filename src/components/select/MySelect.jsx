import React from 'react';
export function Select({options, defaultValue, selectSort, value}){
    return(
        <select value={value} onChange={e=> selectSort(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option=>{
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    )
}