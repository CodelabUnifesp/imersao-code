import {Container} from './styles';

const Button = (props) => {
    const {title, click} = props;
    return (
        <Container onClick={click}>
            {title}
        </Container>
    );
}
export default Button;