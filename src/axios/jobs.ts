import axiosClient from './instances';

const getJobs = () => {
  return axiosClient({
    method: 'GET',
    url: '/jobs'
  });
};

const getJobTeams = () => {
  return axiosClient({
    method: 'GET',
    url: '/jobjob-teams'
  });
};

const getJobDetail = (id: string) => {
  return axiosClient({
    method: 'GET',
    url: `/jobs/${id}`
  });
};

const jobsApply = (data: any) => {
  return axiosClient({
    method: 'POST',
    url: '/jobs/apply',
    data
  });
};

const JOBS_API = {
  getJobs,
  getJobTeams,
  jobsApply,
  getJobDetail
};

export default JOBS_API;
