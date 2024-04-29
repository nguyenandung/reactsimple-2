import { Col, Divider, Row, Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DeadTime } from 'src/assets/icons/dead-time.svg';
import BLOGS_API from 'src/axios/blogs';
import { ButtonC } from 'src/components';
import Blog from 'src/components/Blog';
import { LAYOUT_HORIZONTAL, SCREEN_MOBILE } from 'src/constants';
import { useRouter } from 'src/hooks';
import { useScreenSize } from 'src/hooks/useScreenSize';
import BreadcrumbComponent from './components/Breadcrumb';
import './style.scss';

const BlogDetails = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router as any;
  const [blogDetails, setBlogDetails] = useState<any>();
  const [blogDetailsPrefer, setBlogDetailsPrefer] = useState<any>([]);
  const screenSize: any = useScreenSize();
  console.log('router', router);

  // api getBlogDetails
  useEffect(() => {
    (async () => {
      try {
        const response: any = await BLOGS_API.getBlogDetails(id);
        const { status, data } = response;

        if (status === 200) {
          setBlogDetails(data);
        }
      } catch (error: any) {
        console.log('error', error);
      }
    })();
  }, [id]);

  // api getBlogDetailsPrefer
  useEffect(() => {
    (async () => {
      try {
        const response: any = await BLOGS_API.getBlogDetailsPrefer(id, 'addedTimestamp:desc');
        const { status, data } = response;

        console.log('data', data);
        if (status === 200) {
          setBlogDetailsPrefer(data);
        }
      } catch (error: any) {
        console.log('error', error);
      }
    })();
  }, [id]);

  return (
    <div className="blog-details">
      <Row gutter={[{ xl: 32, lg: 32, md: 32, sm: 32, xs: 32 }, {}]}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          {blogDetails && (
            <Spin spinning={!blogDetails}>
              <div className="blog-details__main">
                <BreadcrumbComponent categoryBlog={blogDetails.categoryBlog} />
                <div className="blog-details-main__header">
                  <h2 className="blog-details-main__title">{blogDetails.name}</h2>
                  <div className="blog-details-main__time">
                    <DeadTime />
                    <span className="blog-details-main-time__value">
                      {moment(Number(blogDetails.addedTimestamp)).format('DD/MM/YYYY')}
                    </span>
                  </div>
                </div>
                <div
                  className="blog-details-main__content"
                  dangerouslySetInnerHTML={{ __html: blogDetails.content }}
                ></div>
                {blogDetails.relateBlogs?.slice(0, 3)?.length ? (
                  <div className="blog-details-main__relate">
                    <div className="relate__title">
                      <Divider orientation="left" orientationMargin={0}>
                        <h2>Bài viết liên quan</h2>
                      </Divider>
                    </div>
                    <div className="relate__main">
                      <Row
                        gutter={[
                          { xl: 16, lg: 16, md: 16, sm: 16, xs: 16 },
                          { xl: 16, lg: 16, md: 16, sm: 16, xs: 16 }
                        ]}
                      >
                        {blogDetails.relateBlogs?.map((item: any) => (
                          <Col xl={8} lg={8} md={8} sm={8} xs={24} key={item.id}>
                            <Link to={`/blogs/${item.id}`}>
                              <Blog
                                value={item}
                                layout={screenSize === SCREEN_MOBILE && LAYOUT_HORIZONTAL}
                                thumbSize={screenSize !== SCREEN_MOBILE ? ['62%', '62%'] : ['30%', '46%']}
                              />
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    {blogDetails.relateBlogs?.length > 3 && (
                      <div className="relate__more">
                        <ButtonC
                          primary
                          children="Xem thêm"
                          to={`/blogs?categoryBlogId=${blogDetails.categoryBlog.id}`}
                        />
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </Spin>
          )}
        </Col>
        <Col xl={8} lg={0} md={0} sm={0} xs={0}>
          <Spin spinning={!blogDetailsPrefer.length}>
            {blogDetailsPrefer.length ? (
              <div className="blog-details__prefer">
                <h2>Bài viết nổi bật</h2>
                <div className="blogs-details-prefer__content">
                  {blogDetailsPrefer.map((item: any, index: number) => (
                    <Link key={item.id} to={`/blogs/${item.id}`} className="blog-prefer__item">
                      <div className="blog-prefer-item__wrap">
                        <Blog value={item} layout={LAYOUT_HORIZONTAL} thumbSize={['30%', '46%']} />
                      </div>
                      {index !== blogDetailsPrefer.length - 1 && <Divider style={{ margin: '16px 0' }} />}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetails;
