import React from 'react';
import './style.scss';
import { Col, Divider, Row } from 'antd';
import thumbSrc1 from 'src/assets/images/environment-1.png';
import thumbSrc2 from 'src/assets/images/environment-2.png';
import thumbSrc4 from 'src/assets/images/environment-4.png';
import thumbSrc5 from 'src/assets/images/environment-5.png';
import thumbSrc7 from 'src/assets/images/environment-7.png';
import thumbSrc8 from 'src/assets/images/environment-8.png';
import { useScreenSize } from 'src/hooks/useScreenSize';
import { SCREEN_MOBILE } from 'src/constants';

const environments = [
  { id: 1, thumb: thumbSrc1 },
  { id: 2, thumb: thumbSrc2 },
  { id: 3 },
  { id: 4, thumb: thumbSrc4 },
  { id: 5, thumb: thumbSrc5 },
  { id: 6 },
  { id: 7, thumb: thumbSrc7 },
  { id: 8, thumb: thumbSrc8 }
];

const environmentsMobile = [
  { id: 1, thumb: thumbSrc1 },
  { id: 2, thumb: thumbSrc2 },
  { id: 3, thumb: thumbSrc5 },
  { id: 4 },
  { id: 5 },
  { id: 6, thumb: thumbSrc4 },
  { id: 7, thumb: thumbSrc7 },
  { id: 8, thumb: thumbSrc8 }
];

const Environment: React.FC = () => {
  const screenSize: any = useScreenSize();

  return (
    <div id="environment" className="section">
      <div className="environment__wrap">
        <div className="environment-header section-header">
          <Divider orientation="left" orientationMargin={0}>
            <h2 className="environment-header__title section-header__title">
              ĐỒNG HÀNH CÙNG EXSOFT. {screenSize === SCREEN_MOBILE && <br />}TẠI SAO KHÔNG?
            </h2>
          </Divider>
          <p className="environment-header__description section-header__description">
            Con người là yếu tố quan trọng nhất của Exsoft!
            <span style={{ display: 'block', marginTop: 8 }}>
              Dù bạn là ai, sinh viên mới ra trường hay người đã có kinh nghiệm.
            </span>
          </p>
          <p className="environment-header__sub-title">
            Đừng ngần ngại tìm hiểu môi trường nơi đây và trở thành một phần của chúng tôi!
          </p>
        </div>
        <div className="environment-main">
          <Row>
            {(screenSize === SCREEN_MOBILE ? environmentsMobile : environments).map((item: any) => (
              <Col xl={6} lg={6} md={6} sm={6} xs={12} key={item.id}>
                <div className="environment-item">
                  <div className="environment-item__thumb">
                    {item.thumb && <img src={item.thumb} alt="environment" />}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Environment;
