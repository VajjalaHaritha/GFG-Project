import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// Styled components
const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
`;

const Container = styled(Box)`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        background: #f1f1f1;
    }
`;

// CustomButtons component
const CustomButtons = () => {
    return (
        <Wrapper>
            {/* Login Button */}
            <LoginButton variant="contained">Login</LoginButton>

            {/* Become a Seller */}
            <Typography style={{ marginTop: 3, width: 135, cursor: 'pointer' }}>Become a Seller</Typography>

            {/* More */}
            <Typography style={{ marginTop: 3, cursor: 'pointer' }}>More</Typography>

            {/* Cart */}
            <Container>
                <ShoppingCart />
                <Typography style={{ marginLeft: 5 }}>Cart</Typography>
            </Container>
        </Wrapper>
    );
};

export default CustomButtons;