import styles from "../styles/Technologies.module.css";
import Image from "next/image"
import React from "react";

export const getStaticProps = async()=>{
    const res = await fetch('http://localhost:8000/technology');
    const data = await res.json();
    return {
        props: {data}
    }
}

export default function Technology({data }){
    const [info, setInfo] = React.useState([data[0]][0])
    
    function getInfo(event) {
        const index = event.target.id;
        const circles = document.getElementById('number_container').children;
        for(let i=0; i<circles.length; i++){
            circles[i].classList.remove(styles.active_number)
        }
        setInfo([data[index]][0])
        event.target.classList.add(styles.active_number);
    }

    return(
        <div className={styles.body}>
            <div className={styles.grid_container}>
                <div className={styles.top}><span><span className="red--text">03</span> SPACE LAUNCH 101</span></div>
                <div className={styles.left}>
                    <div className={styles.circles_container} id="number_container">
                        <div className={'numbers'+" "+styles.active_number} onClick={getInfo} id='0'>1</div>
                        <div className='numbers' onClick={getInfo} id='1'>2</div>
                        <div className='numbers' onClick={getInfo} id='2'>3</div>
                    </div>
                    <div className={styles.left_right}>
                        <div className={styles.small_text}> THE TERMINOLOGY </div>
                        <div className={styles.name}>{info.name}</div>
                        <div className={styles.description}>{info.description}</div>
                    </div>
                </div>
                <div className={styles.right}><Image src={`/${info.images.portrait}`} height={400} width={400} /></div>
            </div>
        </div>
    )
}