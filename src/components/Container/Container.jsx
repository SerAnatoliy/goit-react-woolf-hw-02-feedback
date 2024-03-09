import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container =({childred}) => {
    return <StyledContainer>{childred}</StyledContainer>
}

export default Container;

Container.propTypes = {
    childred: PropTypes.node.isRequired,
};