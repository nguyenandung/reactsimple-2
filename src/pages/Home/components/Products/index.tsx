import { Col, Divider, Row, Space } from 'antd';
import React, { LegacyRef } from 'react';
import './style.scss';
import { ButtonC } from 'src/components';

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
};

const Products: React.FC<Props> = ({ ref }) => {
  return (
    <section id="products" ref={ref}>
      <Row
        gutter={[
          { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
          { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 }
        ]}
      >
        <Col xl={0} lg={3} md={3} sm={3} xs={0}></Col>
        <Col xl={13} lg={18} md={18} sm={18} xs={24}>
          <div className="products__left">
            <iframe
              title="products"
              src="https://www.youtube.com/embed/mYwRSkTDwIg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="products__left__view">
              <ButtonC primary children="Xem sản phẩm" href="https://babiuni.vn" target="_blank"></ButtonC>
            </div>
          </div>
        </Col>
        <Col xl={0} lg={3} md={3} sm={3} xs={0}></Col>
        <Col xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="products__right">
            <Divider orientation="left" orientationMargin={0}>
              <h2 className="products-right__title">Babiuni - Trợ lý của mẹ</h2>
            </Divider>
            <div className="products-right__description">
              <Space direction="vertical" size={8}>
                <p>
                  <strong>Babiuni</strong> là ứng dụng đầu tiên trong hệ sinh thái các sản phẩm của Exsoft, cung cấp
                  <strong> giải pháp mang thai khỏe mạnh – an toàn, nuôi con khoa học - hiện đại</strong> tích hợp tất
                  cả trong một ứng dụng di động.
                </p>
                <p>
                  <strong>Babiuni</strong> đồng hành cùng cha mẹ từ giai đoạn mong có con đến mang thai và sau khi sinh,
                  đảm bảo mọi thông tin nhất quán, giúp ba mẹ dễ dàng theo dõi và giúp đem lại sự phát triển toàn diện
                  cho con.
                </p>
                <p>
                  Kiến thức chuyên khoa trên Babiuni được <strong>kiểm chứng bởi các chuyên gia đầu ngành</strong>. Lộ
                  trình mang thai - chăm con thực hành hàng ngày mọi lúc mọi nơi, hệ thống tiện ích giúp mẹ nhàn tênh,
                  con phát triển vượt trội.
                </p>
              </Space>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Products;
