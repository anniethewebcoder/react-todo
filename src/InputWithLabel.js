import { useEffect, useRef } from 'react';

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
            <label htmlFor='todoTitle'>{children}</label>
            <input
                ref={inputRef}
                type='text' 
                id={id} 
                name={title} 
                value={value} 
                autoFocus={isFocused}
                onChange={onChange}></input>
        </>
    );
};

export default InputWithLabel;