import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchBar from './SearchBar';
import RightContent from './rightContent/RightContent';
;

const Navbar: React.FC = () => {

    return (
        <Flex bg='white' height='44px' padding="6px 12px" alignItems='center' >
            <Flex alignItems='center'>
                <Image src="/Images/redditFace.svg" height='30px' />      
                {/* //! defining media queery for responsiveness */}
                <Image src="/Images/redditText.svg" height='46px' display={{ base: 'none', md: 'unset', }} />
            </Flex>
            <SearchBar/>
            <RightContent/>
            {/* <Directory/>
            <SearchBarInput/>
            <RightContent/> */}
        </Flex>
    )
}
export default Navbar;