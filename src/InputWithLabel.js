import { useEffect, useRef } from 'react';

const InputWithLabel = (props) => {

    const inputRef = useRef();

    useEffect(() => {
        if(props.isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [props.isFocused]);

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input
                ref={inputRef}
                type='text' 
                id={props.id} 
                name={props.title} 
                value={props.value} 
                autoFocus={props.isFocused}
                onChange={props.onChange}></input>
        </>
    );
};

export default InputWithLabel;