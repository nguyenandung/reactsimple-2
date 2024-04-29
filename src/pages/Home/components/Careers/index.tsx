import React, { LegacyRef, memo, useEffect, useRef, useState } from "react";
import JOBS_API from "src/axios/jobs";
import Jobs from "./components/Jobs";
import UploadCV from "./components/UploadCV";
import "./style.scss";

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
};

export const CareersContext = React.createContext<any>(null);

const Careers: React.FC<Props> = ({ ref }) => {
  const [jobs, setJobs] = useState<any>([]);
  const [jobTeams, setJobTeams] = useState<JobTeam[]>([]);
  const [careers, setCareers] = useState<any>(null);
  const nameCvRef = useRef<any>(null);

  const getJobs = async () => {
    const response = await JOBS_API.getJobs();
    console.log("response", response.data);

    if (response?.status === 200) {
      const data = response?.data;
      setJobs(data);
    } else {
      /// false
    }
  };

  const getJobTeams = async () => {
    const response = await JOBS_API.getJobTeams();

    if (response?.status === 200) {
      const data = response?.data;
      setJobTeams(data);
    } else {
      /// false
    }
  };

  useEffect(() => {
    getJobs();
    getJobTeams();
  }, []);

  return (
    <CareersContext.Provider
      value={{ jobs, jobTeams, careers, nameCvRef, setCareers }}
    >
      <section id="home-careers" className="section" ref={ref}>
        <div className="careers__header section-header">
          <h2 className="careers-header__title section-header__title">
            BẢNG TIN TUYỂN DỤNG
          </h2>
          <p className="careers-header__desc section-header__description">
            Gửi CV của bạn và trở thành thành viên của Exsoft!
          </p>
        </div>
        {jobs.length && jobTeams.length ? (
          <Jobs jobs={jobs} jobTeams={jobTeams} />
        ) : null}
        <UploadCV jobs={jobs} />
      </section>
    </CareersContext.Provider>
  );
};

export default memo(Careers);
