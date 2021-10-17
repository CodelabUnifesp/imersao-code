import {Container, Content, StyledLink} from './styles';

const Header = () => {
    return(
        <Container>
            <Content>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/receitas">Receitas</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
            </Content>
        </Container>
    );
}

export default Header;