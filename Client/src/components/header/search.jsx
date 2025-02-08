

import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';  // Import the Search icon

const SearchContainer = styled(Box)`
    background: #fff;
    width: 40%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;


const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands, and more" />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    );
};

export default Search;
