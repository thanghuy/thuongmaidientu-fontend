import React, { Component } from 'react'
import char1 from '../../assets/images/char_1.png';
import char2 from '../../assets/images/char_2.png';
import char3 from '../../assets/images/char_3.png';
import char4 from '../../assets/images/char_4.png';
export default class Characteristics extends Component {
    render() {
        return (
            <div className="characteristics">
                <div className="container">
                    <div className="row">
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                        <div className="char_icon">
                            <img src={char1} alt="s" />
                        </div>
                        <div className="char_content">
                            <div className="char_title">Miễn phí vận chuyển</div>
                            <div className="char_subtitle">trên 150.000 VNĐ</div>
                        </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                        <div className="char_icon">
                            <img src={char2} alt="s" />
                        </div>
                        <div className="char_content">
                            <div className="char_title">Đổi trả</div>
                            <div className="char_subtitle">trong 30 ngày</div>
                        </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                        <div className="char_icon">
                            <img src={char3} alt="s" />
                        </div>
                        <div className="char_content">
                            <div className="char_title">Thanh toán</div>
                            <div className="char_subtitle">đa dạng</div>
                        </div>
                        </div>
                    </div>
                    {/* Char. Item */}
                    <div className="col-lg-3 col-md-6 char_col">
                        <div className="char_item d-flex flex-row align-items-center justify-content-start">
                        <div className="char_icon">
                            <img src={char4} alt="s" />
                        </div>
                        <div className="char_content">
                            <div className="char_title">Khuyến mãi</div>
                            <div className="char_subtitle">Đa dạng</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
