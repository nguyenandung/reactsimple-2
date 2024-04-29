import { Breadcrumb } from 'antd';
import React from 'react';

const BreadcrumbComponent: React.FC<any> = ({ categoryBlog }) => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
    <Breadcrumb.Item>{categoryBlog.name}</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbComponent;
