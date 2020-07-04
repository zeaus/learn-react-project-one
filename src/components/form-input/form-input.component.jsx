import React from 'react'
export const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="formWrapper">
        <input className="formInput" onChange={handleChange} {...otherProps} />
        {
            label ?
                <label >{label}</label>
                : null
        }
    </div>
)