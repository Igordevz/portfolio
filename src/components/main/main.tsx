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
                    <h1>I’m a Programmer specialising in <strong>Design</strong> and <strong>Developer FullStack</strong></h1>
                </div>
                <div className="flexivel"  id='setaDown' > 
                   <img src={ceta} alt=""/>
                </div>
            </ContentMain>
        </div>
    );
}