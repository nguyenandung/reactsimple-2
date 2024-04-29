import React from 'react';
import { Button, Result } from 'antd';

const NotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle={
        <>
          <h2>Không tìm thấy nội dung 😓</h2>
          <div>Hãy thử truy cập lại từ trang chủ</div>
        </>
      }
      extra={
        <Button type="primary" href="/">
          Quay lại trang chủ
        </Button>
      }
    />
  );
};

export default NotFound;
