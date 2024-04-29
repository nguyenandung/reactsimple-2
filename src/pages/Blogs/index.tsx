import { Button, Col, Pagination, Result, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BLOGS_API from 'src/axios/blogs';
import { ButtonC } from 'src/components';
import Blog from 'src/components/Blog';
import { LAYOUT_HORIZONTAL, PAGE_SIZE, SCREEN_DESKTOP, SCREEN_MOBILE, SCREEN_TABLET } from 'src/constants';
import { useRouter } from 'src/hooks';
import { useScreenSize } from 'src/hooks/useScreenSize';
import { removeNilKeys, scrollTop } from 'src/utils';
import { checkRowEnd } from 'src/utils/checkArray';
import Filters from './components/Filters';
import './style.scss';

const Blogs: React.FC = () => {
  // filters
  const navigate = useNavigate();
  const router = useRouter();
  const { pathname, query } = router;
  const genUrl = (newQuery: any) => {
    delete query._id;
    const payload = { ...query, ...newQuery };
    let url = `${pathname}?`;
    Object.keys(removeNilKeys(payload)).forEach(e => {
      url += `${e}=${payload[e]}&`;
    });

    return url;
  };

  const [blogs, setBlogs] = useState<any>([]);
  const [name, setName] = useState<any>(() => {
    return query.name;
  });
  const [categoryBlogId, setCategoryBlogId] = useState<any>(query.categoryBlogId || 'all');
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>();
  const screenSize: any = useScreenSize();

  // handleSearchName
  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    const newQuery = {
      name: value
    };
    navigate(genUrl(newQuery));
  };

  // handleSearchCategory
  const handleSearchCategory = (value: number) => {
    const newQuery = {
      categoryBlogId: value
    };
    setLoading(true);
    navigate(genUrl(newQuery));
  };

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prev: number) => prev + 1);
  };

  const handlePagination = (value: number) => {
    scrollTop();
    setLoading(true);
    if (value - 1 !== page) {
      setPage(value - 1);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await BLOGS_API.getBlogs({
          name,
          categoryBlogId: categoryBlogId === 'all' || !categoryBlogId ? undefined : Number(categoryBlogId),
          sort: 'addedTimestamp:desc',
          page
        });
        const { status, data, headers } = response;

        if (status === 200) {
          setLoading(false);
          setTotalCount(Number(headers['x-total-count']));
          if (page && screenSize !== SCREEN_MOBILE) {
            setBlogs((prev: any) => [...prev, ...data]);
            return;
          }
          setBlogs(data);
        }
      } catch (error: any) {
        setLoading(false);
        console.log('error', error);
      }
    })();
  }, [name, categoryBlogId, page]);

  useEffect(() => {
    setPage(0);
  }, [name, categoryBlogId]);

  // update filters when query change
  useEffect(() => {
    const { name, categoryBlogId } = query;
    setName(name);
    categoryBlogId && setCategoryBlogId(categoryBlogId);
  }, [query]);

  return (
    <div id="blogs">
      <div>
        <Filters
          name={name}
          categoryBlogId={categoryBlogId}
          handleChangeName={handleSearchName}
          handleChangeCategory={handleSearchCategory}
        />
        <Spin spinning={loading}>
          {blogs.length ? (
            <div className="blogs__main">
              <Row
                gutter={[
                  { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
                  { xl: 16, lg: 16, md: 16, sm: 16, xs: 24 }
                ]}
              >
                {blogs.map((item: any, index: number) => (
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
                      paddingTop:
                        index < (screenSize === SCREEN_DESKTOP ? 3 : screenSize === SCREEN_TABLET ? 2 : 1) ? 0 : 20,
                      borderBottom: checkRowEnd(screenSize === SCREEN_DESKTOP ? 3 : 2, index, blogs.length)
                        ? '1px solid #dddddd'
                        : 0,
                      paddingBottom: checkRowEnd(screenSize === SCREEN_DESKTOP ? 3 : 2, index, blogs.length) ? 20 : 0,
                      marginBottom: checkRowEnd(screenSize === SCREEN_DESKTOP ? 3 : 2, index, blogs.length) ? -17 : 0
                    }}
                  >
                    <Link to={`/blogs/${item.id}`} className="blog-item">
                      <Blog
                        value={item}
                        layout={screenSize === SCREEN_MOBILE && LAYOUT_HORIZONTAL}
                        thumbSize={screenSize === SCREEN_MOBILE ? ['30%', '46%'] : ['60%', '100%']}
                        category={true}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          ) : (
            !loading && (
              <div className="blogs-not-result">
                <Result
                  title="Không tìm thấy kết quả"
                  extra={
                    <Button type="primary" key="console" href="/">
                      Về trang chủ
                    </Button>
                  }
                />
              </div>
            )
          )}
        </Spin>
        {totalCount && blogs.length < totalCount ? (
          screenSize !== SCREEN_MOBILE ? (
            <div className="blogs__more" onClick={handleLoadMore}>
              <ButtonC primary children="Xem thêm"></ButtonC>
            </div>
          ) : (
            <div className="blogs__pagination">
              <Pagination
                defaultCurrent={page + 1}
                total={totalCount}
                pageSize={PAGE_SIZE}
                onChange={handlePagination}
              />
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Blogs;
