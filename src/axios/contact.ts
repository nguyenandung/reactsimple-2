import axiosClient from './instances';

const contact = (data: any) => {
  return axiosClient({
    method: 'POST',
    url: '/contact',
    data
  });
};

const CONTACT_API = {
  contact
};

export default CONTACT_API;
