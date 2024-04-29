import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TiktokIcon,
  YoutubeIcon
} from 'src/components/Icons';
import './style.scss';
import footerLogoSrc from 'src/assets/images/footer-logo.png';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer__logo">
        <img src={footerLogoSrc} alt="footer" />
      </div>
      <Row
        className="footer__main"
        gutter={[
          { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
          { xl: 16, lg: 16, md: 16, sm: 16, xs: 24 }
        ]}
      >
        <Col xl={16} lg={16} md={16} sm={24} xs={24}>
          <section className="footer__left">
            <div className="info">
              <span>Công ty Cổ phần công nghệ phần mềm Exsoft</span>
              <br />
              <span>MST: 0109676861</span>
            </div>
            <ul className="office">
              <li>
                <address>
                  <a href="mailto:info@exsoft.com.vn?subject=Liên hệ với Exsoft JSC!" target="_blank" rel="noreferrer">
                    <label>
                      <EmailIcon />
                    </label>
                    <span>info@exsoft.com.vn</span>
                  </a>
                </address>
              </li>
              <li>
                <a href="tel:0988911160">
                  <label>
                    <PhoneIcon />
                  </label>
                  <span>0896 696 696</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/%C3%82u+Vi%E1%BB%87t+Building/@21.0374662,105.7696684,17z/data=!3m1!4b1!4m6!3m5!1s0x313454b7e7c379cd:0x6130fa573351b263!8m2!3d21.0374662!4d105.7718624!16s%2Fg%2F11bccmjpph?hl=vi"
                >
                  <label>
                    <LocationIcon />
                  </label>
                  <span>Tầng 02, tòa nhà Âu Việt, số 01 Lê Đức Thọ, Mai Dịch, Cầu Giấy, Hà Nội</span>
                </a>
              </li>
            </ul>
            <span className="copyright">Copyright © 2022 Exsoft JSC </span>
          </section>
        </Col>
        <Col xl={0} lg={0} md={0} sm={24} xs={24}>
          <Divider />
        </Col>
        <Col xl={8} lg={8} md={8} sm={24} xs={24}>
          <div className="footer__right">
            <a href="/#" className="title">
              Giới thiệu
            </a>
            <Row
              className="activities"
              gutter={[
                { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
                { xl: 12, lg: 12, md: 12, sm: 12, xs: 24 }
              ]}
            >
              <Col xl={24} lg={24} md={24} sm={24} xs={12}>
                <Link to="/#products">Sản phẩm</Link>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={12}>
                <Link to="/#careers">Tuyển dụng</Link>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={12}>
                <Link to="/blogs">Blogs</Link>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={12}>
                <Link to="/contacts">Liên hệ</Link>
              </Col>
            </Row>
            <ul className="socials">
              <li>
                <a href="https://www.youtube.com/channel/UCEU_8P2XXWsDWMquHwG70Mg" target="_blank" rel="noreferrer">
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/exsoft.vn" target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <Link to="#">
                  <TiktokIcon />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
