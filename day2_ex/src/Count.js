import { useState, useEffect } from 'react';

const Count = (props) => {

    const {init, inc} = props
    const [count, setCount] = useState(init);

    useEffect(() => {
        const storedCount = localStorage.getItem('count');
        setCount(parseInt(storedCount))
    }, []);

    useEffect(() => {
        document.title = `you clicked ${count} times`;
        localStorage.setItem('count', count);
    }, [count]);

 

    return (
        <div>
            <p>you clicked {count} times </p>
            <button onClick ={() => setCount(count - inc)}>
                - 
                </button>

            <button onClick ={() => setCount(count + inc)}> 
            +
            </button>
        </div>


    );
    }
    export default Count