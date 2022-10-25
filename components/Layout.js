import Image from "next/image"
import Link from "next/link"


export default function Layout({ children }){

    function getInfo(event) {
        const links = document.querySelector('.navbar--links').children;
        const id = Number(event.target.id);
        for(let i=0;i<links.length; i++){
            links[i].classList.remove('active_page');
        }
        links[id].classList.add('active_page');
    }
    

    return(
        <>
         <div>{ children }</div>
         <div className="navbar">
             <Image src='/logo.svg' width={70} height={70} />
             <div className="middle--section"><div className="inner--section"></div></div>
             <div className="navbar--links">
                <Link href='/'>
                    <div className="link active_page" onClick={getInfo}>
                    <a id='0'>
                        <span className="red--text">00 </span>
                        HOME
                        </a>
                    </div>
                </Link>
                <Link href='/destination'>
                    <div className="link" onClick={getInfo}>
                        <a id='1'>
                        <span className="red--text">01 </span>
                        DESTINATION
                        </a>
                    </div>
                </Link>
                <Link href='/crew'>
                    <div className="link" onClick={getInfo}>
                        <a id='2'>
                        <span className="red--text">02 </span>
                        CREW
                        </a>
                    </div>
                </Link>
                <Link href='/technologies'>
                    <div className="link" onClick={getInfo}>
                        <a id='3'>
                        <span className="red--text">03 </span>
                        TECHNOLOGY
                        </a>
                    </div>
                </Link>
             </div>
         </div>
        </>
    )
}