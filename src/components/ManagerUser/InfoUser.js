import React from 'react';

const InfoUser = () => {
    return (
        <div className="lm_m-4" style={{background : "white"}}>
            <div className="h25IfI" role="main">
                <div className="my-account-section">
                <div className="my-account-section__header">
                    <div className="my-account-section__header-left">
                    <div className="my-account-section__header-title">Hồ sơ của tôi</div>
                    <div className="my-account-section__header-subtitle">
                        Quản lý thông tin hồ sơ để bảo mật tài khoản
                    </div>
                    </div>
                </div>
                <div className="my-account-profile">
                    <div className="my-account-profile__left">
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Tên đăng nhập</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="my-account__inline-container">
                            <div className="my-account__input-text">huythang0903</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Tên</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="input-with-validator-wrapper">
                            <div className="input-with-validator">
                                <input type="text" placeholder="nhập thông tin" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Email</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="my-account__inline-container">
                            <div className="my-account__input-text">hu****@gmail.com</div>
                            <button className="my-account__no-background-button my-account-profile__change-button">
                                Thay đổi
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Số điện thoại</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="my-account__inline-container">
                            <div className="my-account__input-text">*********51</div>
                            <button className="my-account__no-background-button my-account-profile__change-button">
                                Thay đổi
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Tên Shop</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="input-with-validator-wrapper">
                            <div className="input-with-validator">
                                <input
                                type="text"
                                placeholder="nhập thông tin"
                                defaultValue="huythang0903"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Giới tính</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="my-account-profile__gender">
                            <div className="stardust-radio-group">
                                <div className="stardust-radio">
                                <div className="stardust-radio-button">
                                    <div className="stardust-radio-button__outer-circle">
                                    <div className="stardust-radio-button__inner-circle" />
                                    </div>
                                </div>
                                <div className="stardust-radio__content">
                                    <div className="stardust-radio__label">Nam</div>
                                </div>
                                </div>
                                <div className="stardust-radio">
                                <div className="stardust-radio-button">
                                    <div className="stardust-radio-button__outer-circle">
                                    <div className="stardust-radio-button__inner-circle" />
                                    </div>
                                </div>
                                <div className="stardust-radio__content">
                                    <div className="stardust-radio__label">Nữ</div>
                                </div>
                                </div>
                                <div className="stardust-radio">
                                <div className="stardust-radio-button">
                                    <div className="stardust-radio-button__outer-circle">
                                    <div className="stardust-radio-button__inner-circle" />
                                    </div>
                                </div>
                                <div className="stardust-radio__content">
                                    <div className="stardust-radio__label">Khác</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="input-with-label">
                        <div className="input-with-label__wrapper">
                        <div className="input-with-label__label">
                            <label>Ngày sinh</label>
                        </div>
                        <div className="input-with-label__content">
                            <div className="_2AC_Jd">
                            <div
                                className="shopee-dropdown shopee-dropdown--has-selected"
                                style={{ position: "relative" }}
                            >
                                <div className="shopee-dropdown__entry shopee-dropdown__entry--selected">
                                <span>1</span>
                                <svg
                                    className="shopee-svg-icon icon-arrow-down"
                                    enableBackground="new 0 0 11 11"
                                    viewBox="0 0 11 11"
                                    x={0}
                                    y={0}
                                >
                                    <g>
                                    <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                    </g>
                                </svg>
                                </div>
                            </div>
                            <div
                                className="shopee-dropdown shopee-dropdown--has-selected"
                                style={{ position: "relative" }}
                            >
                                <div className="shopee-dropdown__entry shopee-dropdown__entry--selected">
                                <span>Tháng 1</span>
                                <svg
                                    className="shopee-svg-icon icon-arrow-down"
                                    enableBackground="new 0 0 11 11"
                                    viewBox="0 0 11 11"
                                    x={0}
                                    y={0}
                                >
                                    <g>
                                    <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                    </g>
                                </svg>
                                </div>
                            </div>
                            <div
                                className="shopee-dropdown shopee-dropdown--has-selected"
                                style={{ position: "relative" }}
                            >
                                <div className="shopee-dropdown__entry shopee-dropdown__entry--selected">
                                <span>1990</span>
                                <svg
                                    className="shopee-svg-icon icon-arrow-down"
                                    enableBackground="new 0 0 11 11"
                                    viewBox="0 0 11 11"
                                    x={0}
                                    y={0}
                                >
                                    <g>
                                    <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                                    </g>
                                </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="my-account-page__submit">
                        <button
                        type="button"
                        className="btn btn-solid-primary btn--m btn--inline"
                        aria-disabled="false"
                        >
                        Lưu
                        </button>
                    </div>
                    </div>
                    <div className="my-account-profile__right">
                    <div className="avatar-uploader">
                        <div className="avatar-uploader__avatar">
                        <div
                            className="avatar-uploader__avatar-image"
                            style={{
                            backgroundImage:
                                'url("https://cf.shopee.vn/file/b8e8ce1a01f365ff6bfe8ce7ba732509_tn")'
                            }}
                        />
                        </div>
                        <input
                        className="avatar-uploader__file-input"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        />
                        <button type="button" className="btn btn-light btn--m btn--inline">
                        Chọn ảnh
                        </button>
                        <div className="avatar-uploader__text-container">
                        <div className="avatar-uploader__text">
                            Dụng lượng file tối đa 1 MB
                        </div>
                        <div className="avatar-uploader__text">Định dạng:.JPEG, .PNG</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default InfoUser;