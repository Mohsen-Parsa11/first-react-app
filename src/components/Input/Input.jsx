import styled from './Input.module.css'

function Input (props) {

    return (
        <div>
            <div className={styled.inputWrapper}>
                    <label
                        htmlFor={props.name}
                    >
                        {props.label}
                    </label>
                    <input
                        type="text"
                        name={props.name}
                        autoComplete="off"
                        onChange={props.handleChange}
                    />
            </div>
        </div>
    )   
}

export default Input;