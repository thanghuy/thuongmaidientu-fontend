import React from 'react';
import Chart from './component/chart'
const index = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card" style={{height : "200px"}}>
                    <div className="card-header border-0">
                        <h3 className="card-title">Danh sách cần làm</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="card">
                    <Chart/>
                </div>
            </div>
        </div>
    );
};

export default index;