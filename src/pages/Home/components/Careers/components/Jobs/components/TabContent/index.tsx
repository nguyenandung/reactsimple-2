import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import JOBS_API from 'src/axios/jobs';
import { ButtonC } from 'src/components';
import { ArrowRightIcon } from 'src/components/Icons';
import { SCREEN_MOBILE } from 'src/constants';
import { useScreenSize } from 'src/hooks/useScreenSize';
import { CareersContext } from 'src/pages/Home/components/Careers';
import Job from './components/Job';
import './style.scss';

type Props = any;

const TabContent: React.FC<Props> = ({ jobsContent }) => {
  const [jobDetails, setJobDetails] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setCareers, nameCvRef } = useContext(CareersContext);
  const screenSize: any = useScreenSize();

  const handleShowJobDetail = async (value: any) => {
    try {
      const response: any = await JOBS_API.getJobDetail(value);
      const { status, data } = response;

      if (status === 200) {
        setJobDetails(data);
      }
    } catch (error: any) {
      console.log('error:', error);
    }

    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleApplyNow = () => {
    setCareers(jobDetails);
    handleCancel();
    setTimeout(() => {
      if (nameCvRef?.current) {
        nameCvRef.current.focus();
      }
    }, 300);
  };

  return (
    <div className="tab__content">
      {jobsContent?.map((item: any) => {
        return (
          <div key={item.id} className="job-item--wrapper">
            <Job value={item} handleShowJobDetail={handleShowJobDetail} />
          </div>
        );
      })}
      {jobDetails && (
        <Modal
          title=""
          width={1020}
          open={isModalOpen}
          footer={null}
          centered
          wrapClassName="job-details-modal"
          onCancel={handleCancel}
        >
          <div className="job-details-modal__header">
            <h2 className="modal-header__name">{jobDetails.name}</h2>
            <ButtonC
              primary
              children="Apply Now"
              rightIcon={<ArrowRightIcon />}
              href="/#upload-cv"
              onClick={handleApplyNow}
              small={screenSize === SCREEN_MOBILE}
            ></ButtonC>
          </div>
          <div className="job-details-modal__main">
            <div
              className="job-details-modal-main__wrap"
              dangerouslySetInnerHTML={{ __html: jobDetails.description }}
            ></div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default React.memo(TabContent);
