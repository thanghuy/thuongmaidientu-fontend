import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
const sekeletonOrder = () => {
    return (
        <div style={{width : "100%",height : "100%",background : "white", padding : "0px 15px 20px 15px"}}>
            <Skeleton height={100} />
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="0px">
                <Skeleton variant="circle">
                    <Avatar />
                    </Skeleton>
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="150px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton variant="circle">
                    <Avatar />
                    </Skeleton>
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="150px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton variant="circle">
                    <Avatar />
                    </Skeleton>
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="150px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton variant="circle">
                    <Avatar />
                    </Skeleton>
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
            <Skeleton variant="rect" width="100%" height="150px">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="30px">
                <Skeleton variant="circle">
                    <Avatar />
                    </Skeleton>
                <Skeleton width="100%">
                    <Typography>.</Typography>
                    </Skeleton>
            </Box>
        </div>
    );
};

export default sekeletonOrder;