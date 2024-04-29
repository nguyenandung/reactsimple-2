import { PAGE_SIZE } from 'src/constants';
import axiosClient from './instances';

type Params = {
  name?: string;
  categoryBlogId?: number;
  sort?: string;
  size?: number;
  page?: number;
};

const getBlogs = ({ name, categoryBlogId, sort, size = PAGE_SIZE, page = 0 }: Params) => {
  return axiosClient({
    method: 'GET',
    url: '/web-blogs',
    params: {
      name,
      categoryBlogId,
      sort,
      size,
      page
    }
  });
};

const getBlogDetails = (id?: string) => {
  return axiosClient({
    method: 'GET',
    url: `/web-blogs/${id}`
  });
};

const getBlogDetailsPrefer = (id?: string, sort?: string) => {
  return axiosClient({
    method: 'GET',
    url: `/web-blogs/${id}/prefer`,
    params: { sort }
  });
};

const getCategoryBlogs = () => {
  return axiosClient({
    method: 'GET',
    url: `/web-category-blogs`
  });
};

const BLOGS_API = {
  getBlogs,
  getBlogDetails,
  getBlogDetailsPrefer,
  getCategoryBlogs
};

export default BLOGS_API;
