import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type RightContentProps = {
    // user:
};

const RightContent:React.FC<RightContentProps> = () => {
    return (
        <>
        {/* //! create auth modal here */}
        <Flex justify='center' align='center'>
            <AuthButtons/>
        </Flex>
        </>
    );
}
export default RightContent;