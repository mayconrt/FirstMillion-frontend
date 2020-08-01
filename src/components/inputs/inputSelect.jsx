import React from 'react'

export default function InputSelect({input, data}) {

    function renderOptions() {
        const options = (data)?data:[]

        return options.map(item => (
            <option key={item.name} value={item.value}>{item.name}</option>
        ))
    }

    return (
        <div className="form-group">
            <select {...input}  className="form-control select2 select2-hidden-accessible" style={{ width: "100%" }} data-select2-id="1" aria-hidden="true">
                <option key="default" value=""></option>
                {renderOptions()}
            </select>
        </div>
    )
}