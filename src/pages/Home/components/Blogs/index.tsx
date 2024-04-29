import { Col, Row } from 'antd';
import React, { LegacyRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BLOGS_API from 'src/axios/blogs';
import { ButtonC } from 'src/components';
import Blog from 'src/components/Blog';
import { SCREEN_DESKTOP, SCREEN_TABLET, SIZE_LARGE } from 'src/constants';
import { useScreenSize } from 'src/hooks/useScreenSize';
import { checkRowEnd } from 'src/utils/checkArray';
import { Helper } from 'src/utils/helper';
import './style.scss';

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
};

const Blogs: React.FC<Props> = ({ ref }) => {
  const [blogs, setBlogs] = useState<any>([]);
  const screenSize: any = useScreenSize();

  // api getBlogs
  useEffect(() => {
    (async () => {
      try {
        const response: any = await BLOGS_API.getBlogs({ sort: 'addedTimestamp:desc' });
        const { status, data } = response;

        if (status === 200) {
          setBlogs(data);
        }
      } catch (error: any) {
        console.log('error', error);
      }
    })();
  }, []);

  return (
    <section id="home-blogs" className="section" ref={ref}>
      <div className="blogs__header">
        <div className="blogs-header__wrapper">
          <h2 className="blogs-header__title section-header__title">BLOG - CÓ THỂ BẠN QUAN TÂM</h2>
          <p className="blogs-header__desc section-header__description">
            Chia sẻ bài viết về các chủ đề đa dạng: phát triển sản phẩm, kinh doanh, marketing, tuyển dụng, chuyện vui
            công sở...
          </p>
        </div>
      </div>
      <div className="blogs__main">
        <Row
          gutter={[
            { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
            { xl: 24, lg: 24, md: 24, sm: 24, xs: 12 }
          ]}
        >
          {blogs.slice(0, 6).map((item: any, index: number) => (
            <Col
              xl={8}
              lg={12}
              md={12}
              sm={12}
              xs={24}
              key={item.id}
              style={{
                borderTop:
                  index < (screenSize === SCREEN_DESKTOP ? 3 : screenSize === SCREEN_TABLET ? 2 : 1)
                    ? '0'
                    : '1px solid #dddddd',
                paddingTop: index < (screenSize === SCREEN_DESKTOP ? 3 : screenSize === SCREEN_TABLET ? 2 : 1) ? 0 : 20
              }}
            >
              <Link to={`/blogs/${item.id}/${Helper.slugUrl(item.name)}`} className="blog-item">
                <Blog value={item} size={SIZE_LARGE} category />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      {blogs.length > 6 && (
        <div className="blogs__more">
          <ButtonC primary children="Xem tất cả" to="/blogs"></ButtonC>
        </div>
      )}
    </section>
  );
};

export default Blogs;
