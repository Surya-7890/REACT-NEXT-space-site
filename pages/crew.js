import styles from "../styles/Crew.module.css";
import Image from "next/image";
import React from "react";

export const getStaticProps = async()=>{
    const res = await fetch('http://localhost:8000/crew')
    const data = await res.json();

    return{
        props:{data}
    }
}

export default function Crew({ data }){
    const [info, setInfo] = React.useState([data[0]][0])

    function getInfo(event) {
        const id = document.getElementById('circles_container').children;
        for(let i=0;i<id.length; i++){
            id[i].classList.remove(styles.active_circle)
        }
        const index = event.target.id
        setInfo([data[index]][0])
        event.target.classList.add(styles.active_circle)
    }

    return(
        <div className={styles.body}>
            <div className={styles.grid_container}>
                <div className={styles.top}><span className="red--text">02</span> MEET YOUR CREW</div>
                <div className={styles.left}>
                    <div className={styles.occupation}>{info.role}</div>
                    <div className={styles.name}>{info.name}</div>
                    <div className={styles.description}>{info.bio}</div>
                    <div className={styles.circles_container} id="circles_container">
                        <div id='0' className={'circles' +" "+ styles.active_circle} onClick={getInfo}></div>
                        <div id='1' className={'circles'} onClick={getInfo}></div>
                        <div id='2' className={'circles'} onClick={getInfo}></div>
                        <div id='3' className={'circles'} onClick={getInfo}></div>
                    </div>
                </div>
                <div className={styles.right}><Image src={`/${info.images.png}`} height={info.height} width={info.width} /></div>
            </div>
        </div>
    )
}