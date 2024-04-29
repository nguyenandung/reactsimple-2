import { Col, Row } from 'antd';
import React from 'react';
import './style.scss';

const BlogPrefer: React.FC<any> = ({ value }) => (
  <div className="blog-prefer">
    <Row gutter={[{ xl: 16, lg: 16, md: 16, sm: 16, xs: 16 }, {}]}>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="blog-prefer__thumb" style={{ background: `url(${value.image}), #D9D9D9` }}></div>
      </Col>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="blog-prefer__content" dangerouslySetInnerHTML={{ __html: value.name }}></div>
      </Col>
    </Row>
  </div>
);

export default BlogPrefer;
