import styles from "../styles/Destination.module.css";
import Image from "next/image";
import React from "react";

export const getStaticProps = async ()=>{ 
        const res = await fetch('http://localhost:8000/destinations')
        const data = await res.json()
        return{
            props:{data}
        }
} 

export default function Destination({data}){

    const [info, setInfo] = React.useState([data[0]][0])
    
    function getInfo(event){
        const links = document.getElementById('links_container').children;
        const id = event.target.id;
        for(let i=0; i<links.length; i++){
            links[i].classList.remove('active_place');
            console.log(links[i].classList);
        }
        data.forEach((element, i) => {
            if(element.name === id){
                setInfo([data[i]][0])
            }
        })
        event.target.classList.add('active_place')
    }

    return(
        <div className={styles.body}>
            <div className={styles.grid_container}>
                <div className={styles.top}><span className="red--text">01</span>  PICK YOUR DESTINATION</div>
                <div className={styles.left}><Image src={`/${info.images.png}`} height={380} width={380} /></div>
                <div className={styles.right}>
                    <div className={styles.inner_grid}>
                        <div className={styles.links_container} id="links_container">
                            <div className={styles.links+" "+ 'active_place'} id='Moon' onClick={getInfo}>MOON</div>
                            <div className={styles.links} id='Mars' onClick={getInfo}>MARS</div>
                            <div className={styles.links} id='Europa' onClick={getInfo}>EUROPA</div>
                            <div className={styles.links} id='Titan' onClick={getInfo}>TITAN</div>
                        </div>
                        <div className={styles.place}><div className={styles.place_name}>{info.name}</div>
                           <div>{info.description}</div>
                        </div>
                        <div className={styles.place_info}>
                            <div><span className={styles.less_opacity}>AVG. DISTANCE</span>
                             <br/>
                             <span className={styles.space_time}>{info.distance}</span>
                            </div>
                            <div><span className={styles.less_opacity}>EST. TRAVEL TIME</span>
                             <br/>
                             <span className={styles.space_time}>{info.travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}