import { useEffect, useRef } from 'react';
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

export default InputWithLabel;