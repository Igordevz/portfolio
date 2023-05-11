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
              <a href="#projetos" id="two">PROJECTS</a>
              <a href="#items-about" id="three">ABOUT</a>
            </nav>
        </NavBar>
      </HeaderContent>
    );

}