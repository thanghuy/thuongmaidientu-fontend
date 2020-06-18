import React from 'react';
import Img from '../../assets/images/avatar.png';
const DetailShop = (props) => {
    var {OneProduct} = props;
    return (
        <div className="product_review">
            <div className="_1zBnTu page-product__shop">
                <div className="_1Sw6Er">
                    <span className="_136nGn">
                    <div className="shopee-avatar _2dEPf7">
                        <div className="shopee-avatar__placeholder">
                        <svg
                            className="shopee-svg-icon icon-headshot"
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                        >
                            <g>
                            <circle
                                cx="7.5"
                                cy="4.5"
                                fill="none"
                                r="3.8"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                                fill="none"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                            />
                            </g>
                        </svg>
                        </div>
                        <img
                        className="shopee-avatar__img"
                        src={Img} alt="shop"
                        />
                    </div>
                    </span>
                    <div className="_2S9T8Y">
                        <div className="_3Lybjn">{OneProduct.fullName}</div>
                    </div>
                </div>
                <div className="_3mK1I2">
                    <div className="TuJk3S">
                    <div className="-Gna22 _32EvOQ">
                        <label className="_1q9CHQ">Đánh giá</label>
                        <span className="_1rsHot OuQDPE">712</span>
                    </div>
                    <span className="F6kLFJ _32EvOQ">
                        <label className="_1q9CHQ">Sản phẩm</label>
                        <span className="_1rsHot OuQDPE">40</span>
                    </span>
                    </div>
                    <div className="TuJk3S">
                    <div className="-Gna22 _32EvOQ">
                        <label className="_1q9CHQ">tỉ lệ phản hồi</label>
                        <span className="_1rsHot OuQDPE">100%</span>
                    </div>
                    <div className="-Gna22 _32EvOQ">
                        <label className="_1q9CHQ">thời gian phản hồi</label>
                        <span className="_1rsHot">trong vài giờ</span>
                    </div>
                    </div>
                    <div className="TuJk3S">
                    <div className="-Gna22 _32EvOQ">
                        <label className="_1q9CHQ">tham gia</label>
                        <span className="_1rsHot">20 tháng trước</span>
                    </div>
                    <div className="-Gna22 _32EvOQ">
                        <label className="_1q9CHQ">Người theo dõi</label>
                        <span className="_1rsHot">4,1k</span>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default DetailShop;