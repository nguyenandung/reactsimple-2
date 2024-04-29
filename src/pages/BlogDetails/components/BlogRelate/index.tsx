import moment from 'moment';
import React from 'react';
import './style.scss';

const BlogRelate: React.FC<any> = ({ value }) => {
  return (
    <div className="blog-relate">
      <div className="blog-relate__thumb" style={{ background: `url(${value.image}), #D9D9D9` }}></div>
      <p className="blog-relate__content" dangerouslySetInnerHTML={{ __html: value.name }}></p>
      <span>{moment(Number(value.addedTimestamp)).format('DD/MM/YYYY')}</span>
    </div>
  );
};

export default BlogRelate;
