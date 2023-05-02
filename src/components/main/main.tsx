import ceta from '../../assets/ceta.png'
import { ContentMain } from './style';

export default function Main(){
    return(
        <div>
            <ContentMain>
             
                <div className="center">
                    <h1>I’m a designer specialising in <strong>Developer</strong> and <strong>Interaction Design</strong></h1>
                </div>
                <img src={ceta} alt="" />
            </ContentMain>
        </div>
    );
}