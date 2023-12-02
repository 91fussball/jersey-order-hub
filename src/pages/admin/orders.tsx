import React from 'react';

import { Button } from '@/shared/components/buttons/Button';
import { Box } from '@/shared/components/displays/Box';
import { HStack } from '@/shared/components/layouts/HStack';
import { Typography } from '@/shared/components/typography/Typography';

const AdminOrdersPage = () => {
    return (
        <Box h="100vh" w="100vw" bg="white" p="5rem">
            <HStack justify="space-between" align="center">
                <Typography as="h1">Jersey Orders</Typography>
                <Button>Add New Order</Button>
            </HStack>
        </Box>
    );
};

export default AdminOrdersPage;
