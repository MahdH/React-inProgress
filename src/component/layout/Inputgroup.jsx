import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// const { type, name, placeholder, onChange, value, label, error } = props | BELOW FUNCTION ARGUMENTS

function Inputgroup({
    type,  
    name,
    placeholder,
    onChange,
    value,
    label,
    error
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={classnames('form-control form-control-lg', {
                    'is-invalid' : error
                })}
                value={value}
                onChange={onChange}
            />
            {error && <div className="inavlid-feedback">{error}</div>}  
        </div>
        /* inline if with && operator | */ 
    )
}

Inputgroup.prototypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired

}

Inputgroup.defaultProps = {
    type: 'text'
}

export default Inputgroup;
