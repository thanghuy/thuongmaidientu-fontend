import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
const sekeletonDetailP = () => {
    return (
        <div className="card">
            <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-5">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1">
                                <Skeleton variant="rect" width="100%" height="500px">
                                    <div style={{ paddingTop: '57%' }} />
                                </Skeleton>
                            </div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs"/>
                    </div>
                    <div className="details col-md-7">
                        <Skeleton animation="wave" height="50px"/>
                        <Skeleton animation="wave" width="80%" height="40px"/>
                        <Skeleton animation="wave" width="60%"/>
                        <Skeleton animation="wave" width="35%"/>
                        <Skeleton animation="wave"  width="60%" height="50px"/>
                        <Skeleton animation="wave"  width="40%" height="30px"/>
                        <Skeleton animation="wave"  width="50%" height="30px"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default sekeletonDetailP;