import React from "react";
import Logo from "./Logo";
import Searchbar from "./searchBar";
import styles from './styles.module.css'

function Home () {
    return (<div className={styles.Home}>
        <Logo/>
        <Searchbar/>
    </div>)
}

export default Home