import { HeaderContent, Logo, NavBar } from "./style";

export default function Header(){

    return(
      <HeaderContent>
        <Logo>
            <h1>IGOR</h1>
        </Logo>
        <NavBar>
            <nav>
               <a href="#">HOME</a>
              <a href="#">WORK</a>
              <a href="#">ABOUT</a>
            </nav>
        </NavBar>
      </HeaderContent>
    );

}