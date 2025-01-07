import styled from "./Textarea.module.css"

function Textarea (props) {
    return (
        <div>

            <div className={styled.textAreaWrapper}>
                <label htmlFor={props.label}>{props.label}</label>
                <textarea onChange={props.handleChange}></textarea>
            </div>
        </div>
    )
}

export default Textarea;