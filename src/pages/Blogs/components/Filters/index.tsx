import { Col, Input, Row, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import BLOGS_API from 'src/axios/blogs';
import './style.scss';

const Filters: React.FC<any> = ({ name, categoryBlogId, handleChangeName, handleChangeCategory }) => {
  const [categories, setCategories] = useState<any>([]);

  // api getCategoryBlogs
  useEffect(() => {
    (async () => {
      try {
        const response = await BLOGS_API.getCategoryBlogs();
        const { status, data } = response;

        if (status === 200) {
          const categories = data.map((item: any) => {
            return { key: String(item.id), label: item.name };
          });
          setCategories([{ label: 'Tất cả', key: 'all' }, ...categories]);
        }
      } catch (error: any) {
        console.log('error', error);
      }
    })();
  }, []);

  return (
    <div id="blogs-filters">
      <Row
        gutter={[
          { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
          { xl: 16, lg: 16, md: 16, sm: 16, xs: 16 }
        ]}
      >
        <Col xl={18} lg={16} md={16} sm={16} xs={24} className="ant-col__nav">
          <Tabs activeKey={String(categoryBlogId)} items={categories} onChange={handleChangeCategory} />
        </Col>
        <Col xl={6} lg={8} md={8} sm={8} xs={24}>
          <div className="blogs-filters__search">
            <Input.Search
              enterButton
              allowClear
              defaultValue={name}
              placeholder="Tìm kiếm..."
              onChange={handleChangeName}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
