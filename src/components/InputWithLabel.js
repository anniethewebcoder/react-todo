import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import style from './TodoListItem.module.css'
const InputWithLabel = ({
    id,
    title,
    value,
    isFocused,
    onChange,
    children
}) => {

    const inputRef = useRef();

    useEffect(() => {
        if(isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label className={style.Label} htmlFor='todoTitle'>{children}</label>
            <input
                className={style.Input}
                ref={inputRef}
                type='text' 
                id={id} 
                name={title} 
                value={value} 
                autoFocus={isFocused}
                onChange={onChange} />
        </>
    );
};

InputWithLabel.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    isFocused: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.string
}

export default InputWithLabel;