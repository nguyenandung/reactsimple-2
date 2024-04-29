import moment from 'moment';
import React from 'react';
import { LAYOUT_HORIZONTAL, LAYOUT_VERTICAL, SIZE_LARGE } from 'src/constants';
import './style.scss';

type Props = any;

const Blog: React.FC<Props> = ({
  value,
  layout = LAYOUT_VERTICAL,
  thumbSize = ['60%', '100%'],
  size,
  category = false
}) => {
  if (!value?.name) return null;
  return (
    <div
      className={`blog-component ${
        layout !== LAYOUT_HORIZONTAL ? 'blog-component__vertical' : 'blog-component__horizontal'
      } ${size === SIZE_LARGE && 'blog-component__large'}`}
    >
      <div className="blog__thumb" style={{ paddingTop: thumbSize[0], paddingRight: thumbSize[1] }}>
        <img src={value.image} alt="blog" className="blog-thumb__img" />
      </div>
      <div className="blog__main">
        <h4 className="blog__title">{value.name}</h4>
        <div className={`${category && 'blog-main__footer'}`}>
          {category && <p className="blog-main__footer__category">{value.categoryBlog.name}</p>}
          {<p className="blog__time">{moment(Number(value.addedTimestamp)).format('DD/MM/YYYY')}</p>}
        </div>
      </div>
    </div>
  );
};

export default Blog;
