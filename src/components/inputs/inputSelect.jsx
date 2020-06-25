import React from 'react'

export default function InputSelect() {
    return (
        <div className="form-group">
            <select className="form-control select2 select2-hidden-accessible" style={{ width: "100%" }} data-select2-id="1" aria-hidden="true">
                <option defaultValue="Alabama" data-select2-id="3">Alabama</option>
                <option data-select2-id="30">Alaska</option>
                <option data-select2-id="31">California</option>
                <option data-select2-id="32">Delaware</option>
                <option data-select2-id="33">Tennessee</option>
                <option data-select2-id="34">Texas</option>
                <option data-select2-id="35">Washington</option>
            </select>
        </div>
    )
}