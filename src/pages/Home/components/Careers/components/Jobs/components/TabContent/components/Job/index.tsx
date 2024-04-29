import { Col, Divider, Row } from 'antd';
import moment from 'moment';
import React, { memo, useContext } from 'react';
import { ReactComponent as DeadTimeIcon } from 'src/assets/icons/dead-time.svg';
import { ReactComponent as FormWorkIcon } from 'src/assets/icons/form-work.svg';
import { ButtonC } from 'src/components';
import { ArrowRightIcon } from 'src/components/Icons';
import { CareersContext } from 'src/pages/Home/components/Careers';
import './style.scss';

type Props = any;

const Job: React.FC<Props> = ({ value, handleShowJobDetail }) => {
  const { setCareers, nameCvRef } = useContext(CareersContext);

  const handleApply = () => {
    setCareers(value);
    setTimeout(() => {
      if (nameCvRef?.current) {
        nameCvRef.current.focus();
      }
    }, 300);
  };

  return (
    <div className="job-item">
      <Row
        gutter={[
          { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
          { xl: 16, lg: 16, md: 16, sm: 16, xs: 16 }
        ]}
      >
        <Col xl={16} lg={16} md={16} sm={16} xs={24}>
          <section className="job-item__left">
            <Row
              gutter={[
                { xl: 32, lg: 32, md: 32, sm: 32, xs: 32 },
                { xl: 12, lg: 12, md: 12, sm: 12, xs: 8 }
              ]}
            >
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <h4 className="title">{value.name}</h4>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Row
                  gutter={[
                    { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
                    { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 }
                  ]}
                >
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="dead__time">
                      <DeadTimeIcon />
                      <span className="dead__time-content">{moment(Number(value.deadline)).format('DD/MM/YYYY')}</span>
                    </div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="form__work">
                      <FormWorkIcon />
                      <span className="form__work-content">{value.workScheduleType === 1 && 'Fulltime'}</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <span className="salary">{value.salary}</span>
              </Col>
            </Row>
          </section>
        </Col>
        <Col xl={0} lg={0} md={0} sm={0} xs={24}>
          <Divider />
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={24}>
          <section className="job-item__right">
            <div className="job-item__right__wrap">
              <ButtonC
                primary
                children="Apply Now"
                href="/#upload-cv"
                rightIcon={<ArrowRightIcon />}
                onClick={handleApply}
                className="job-item-right__apply"
              ></ButtonC>
              <span onClick={() => handleShowJobDetail(value.id)} className="job-item-right__details">
                Xem chi tiết
              </span>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Job);
