import { HeaderContent, Logo, NavBar } from "./style";
export default function Header(){
    
 
    return(
      <HeaderContent>
        <Logo>
            <h1>IGOR</h1>
        </Logo>
        <NavBar>
            <nav>
               <a href="#" id="one">HOME</a>
              <a href="#" id="two">PROJECTS</a>
              <a href="#" id="three">ABOUT</a>
            </nav>
        </NavBar>
      </HeaderContent>
    );

}