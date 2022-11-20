import React from "react";
import styles from './styles.module.css'

function Searchbar () {
    const [counter,setCounter] = React.useState(0)

    function update() {
        if (counter > 0){
         setCounter(counter - 1)
        }
        else {
            alert(`you can't reduce more it is Zero`)
        }
    }


    return (<div className={styles.searchbar}>
        <button onClick={()=>update()}> decrease</button>
        <text>{counter}  </text>
        <button onClick={()=> {
            setCounter(counter + 1)
        }}> increase</button>
    </div>)
    
}

export default Searchbar