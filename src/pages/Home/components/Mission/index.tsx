import { Col, Divider, Row } from 'antd';
import React, { LegacyRef } from 'react';
import MissionC from './components/Mission';
import './style.scss';
import resSrc from 'src/assets/icons/res.png';
import understandSrc from 'src/assets/icons/understand.png';
import conscientiousSrc from 'src/assets/icons/conscientious.png';
import renewSrc from 'src/assets/icons/renew.png';

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
};

export type ValueT = {
  id: number;
  title: string;
  description: string;
  thumb: string;
};

const values = [
  {
    id: 1,
    title: 'TRÁCH NHIỆM',
    description: 'Cam kết đem lại giá trị và luôn là người đồng hành cùng khách hàng',
    thumb: resSrc
  },
  {
    id: 2,
    title: 'THẤU HIỂU',
    description: 'Lắng nghe, thấu hiểu trọn vẹn mọi vấn đề của khách hàng',
    thumb: understandSrc
  },
  {
    id: 3,
    title: 'TẬN TÂM',
    description: 'Sẵn sàng thực hiện hành động mang lại giá trị cho khách  hàng',
    thumb: conscientiousSrc
  },
  {
    id: 4,
    title: 'ĐỔI MỚI',
    description: 'Luôn cải tiến, nâng cao năng lực để đem lại trải nghiệm tốt nhất cho khách hàng',
    thumb: renewSrc
  }
];

const Mission: React.FC<Props> = ({ ref }) => {
  return (
    <section id="mission" className="section" ref={ref}>
      <div className="mission-header section-header">
        <Divider orientation="left" orientationMargin={0}>
          <h2 className="mission-header__title section-header__title">"Khách hàng là trung tâm"</h2>
        </Divider>
        <p className="mission-header__description section-header__description">
          Là triết lý, là giá trị văn hóa, là năng lực cạnh tranh và là cách mà Exsoft chọn để sống với nó.
        </p>
      </div>
      <div className="mission__content">
        <Row
          gutter={[
            { xl: 16, lg: 32, md: 32, sm: 32, xs: 16 },
            { xl: 16, lg: 32, md: 32, sm: 32, xs: 16 }
          ]}
        >
          {values.map((item: ValueT) => {
            return (
              <Col xl={6} lg={12} md={12} sm={12} xs={12} key={item.id}>
                <MissionC value={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Mission;
