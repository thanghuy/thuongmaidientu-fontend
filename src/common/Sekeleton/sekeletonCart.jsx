import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
const sekeletonCart = () => {
    return (
        <div style={{width : "100%",height : "100%",background : "white", padding : "10px 15px 20px 15px"}}>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="0px">
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="0px">
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="100px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="100px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="100px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
    </div>
    );
};

export default sekeletonCart;