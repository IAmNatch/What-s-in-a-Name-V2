import React from 'react';
import {QuestionMark} from "../svg/icons"

export const BigInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='center-box'>
                <QuestionMark className='search-icon'/>
                <input className='center-me-h' type='text'
                    value={props.currentText}
                    onChange={props.handleInputChange}
                    placeholder={props.placeHolder} />
                <button type='submit' className='submit'>Submit</button>
                {props.errorMessage &&
                    <div className='message'> 
                        <span>{props.errorMessage}
                        </span>
                    </div>}
            </div>
        </form>);
};
