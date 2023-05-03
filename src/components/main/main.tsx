import { useEffect } from 'react';
import ceta from '../../assets/ceta.png'
import { ContentMain } from './style';

export default function Main(){

    useEffect(() =>{
        const setaDown = document.getElementById('setaDown');
        setaDown?.addEventListener('click', () =>{
            window.scroll({ top: window.innerHeight, behavior: "smooth" })
        }) 
    })

    return(
        <div>
            <ContentMain>
                <div className="center">
                    <h1>I’m a designer specialising in <strong>Developer</strong> and <strong>Interaction Design</strong></h1>
                </div>
                <div className="flexivel"  id='setaDown' > 
                   <img src={ceta} alt=""/>
                </div>
            </ContentMain>
        </div>
    );
}