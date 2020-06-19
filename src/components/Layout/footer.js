import React, { Component } from 'react';
import ImgSend from '../../assets/images/send.png'
class footer extends Component {
    render() {
        return (
          <div>
          <div className="newsletter">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                    <div className="newsletter_title_container">
                      <div className="newsletter_icon">
                        <img src={ImgSend} alt="send" />
                      </div>
                      <div className="newsletter_title">Đăng ký nhận thông tin của web</div>
                      <div className="newsletter_text">
                        <p>...Có cơ hội nhận mã khuyến mãi đến 50%.</p>
                      </div>
                    </div>
                    <div className="newsletter_content clearfix">
                      <form action="#" className="newsletter_form">
                        <input
                          type="email"
                          className="newsletter_input"
                          required="required"
                          placeholder="Nhập gmail của bạn"
                        ></input>
                        <button className="newsletter_button">Đăng ký</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 footer_col">
                  <div className="footer_column footer_contact">
                    <div className="logo_container">
                      <div className="logo">
                        <a href="/">AliBook</a>
                      </div>
                    </div>
                    <div className="footer_phone">+38 068 005 3570</div>
                    <div className="footer_contact_text">
                      <p>273 An dương vương</p>
                      <p>Thành phố Hồ Chí Minh</p>
                    </div>
                    <div className="footer_social">
                      <ul>
                        <li>
                          <a href="/">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-google" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 offset-lg-2">
                  <div className="footer_column">
                    <div className="footer_title">Find it Fast</div>
                    <ul className="footer_list">
                      <li>
                        <a href="/">Computers &amp; Laptops</a>
                      </li>
                      <li>
                        <a href="/">Cameras &amp; Photos</a>
                      </li>
                      <li>
                        <a href="/">Hardware</a>
                      </li>
                      <li>
                        <a href="/">Smartphones &amp; Tablets</a>
                      </li>
                      <li>
                        <a href="/">TV &amp; Audio</a>
                      </li>
                    </ul>
                    <div className="footer_subtitle">Gadgets</div>
                    <ul className="footer_list">
                      <li>
                        <a href="/">Car Electronics</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer_column">
                    <ul className="footer_list footer_list_2">
                      <li>
                        <a href="/">Video Games &amp; Consoles</a>
                      </li>
                      <li>
                        <a href="/">Accessories</a>
                      </li>
                      <li>
                        <a href="/">Cameras &amp; Photos</a>
                      </li>
                      <li>
                        <a href="/">Hardware</a>
                      </li>
                      <li>
                        <a href="/">Computers &amp; Laptops</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer_column">
                    <div className="footer_title">Customer Care</div>
                    <ul className="footer_list">
                      <li>
                        <a href="/">My Account</a>
                      </li>
                      <li>
                        <a href="/">Order Tracking</a>
                      </li>
                      <li>
                        <a href="/">Wish List</a>
                      </li>
                      <li>
                        <a href="/">Customer Services</a>
                      </li>
                      <li>
                        <a href="/">Returns / Exchange</a>
                      </li>
                      <li>
                        <a href="/">FAQs</a>
                      </li>
                      <li>
                        <a href="/">Product Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>         
          </div> 
        );
    }
}

export default footer;