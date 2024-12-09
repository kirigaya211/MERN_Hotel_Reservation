import {useDispatch} from 'react-redux';

const CounterControl = () =>{
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    );
};


export default CounterControl;
