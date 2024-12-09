import { useSelector } from "react-redux";

const Counter = () =>{
    const count = useSelector((state)=>state.count);
    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default Counter;