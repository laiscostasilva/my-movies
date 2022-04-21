import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";

//arrow function que retorna um conteúdo
export const Header = () => (
    <HeaderContainer>
        <h1>My Movies</h1>
        <MainMenu />
    </HeaderContainer>
);