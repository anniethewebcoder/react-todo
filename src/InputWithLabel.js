const InputWithLabel = (props) => {

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input type='text' id={props.id} name={props.title} value={props.value} onChange={props.onChange}></input>
        </>
    );
};

export default InputWithLabel;