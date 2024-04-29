import { Tabs } from 'antd';
import React, { LegacyRef, memo, useEffect, useState } from 'react';
import './style.scss';
import { ReactComponent as Briefcase } from 'src/assets/icons/briefcase.svg';
import { ReactComponent as Product } from 'src/assets/icons/product.svg';
import { ReactComponent as Marketing } from 'src/assets/icons/marketing.svg';
import { ReactComponent as CustomerService } from 'src/assets/icons/customer-service.svg';
import { ReactComponent as BackOffice } from 'src/assets/icons/back-office.svg';
import TabLabel from './components/TabLabel';
import TabContent from './components/TabContent';
import { useScreenSize } from 'src/hooks/useScreenSize';
import { SCREEN_MOBILE } from 'src/constants';

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
  jobs?: any;
  jobTeams: JobTeam[];
};

const jobIcons: any = {
  all: <Briefcase />,
  product: <Product />,
  marketing: <Marketing />,
  sale: <CustomerService />,
  back_office: <BackOffice />
};

const Jobs: React.FC<Props> = ({ ref, jobs, jobTeams }) => {
  const [items, setItems] = useState<any>([]);
  const screenSize: any = useScreenSize();

  useEffect(() => {
    // const items = jobsConvert.map((item: any) => {
    //   return (
    //     jobs[item.key]?.length && {
    //       key: item.key,
    //       label: <TabLabel icon={item.icon} title={item.title} quantity={jobs[item.key].length} />,
    //       children: <TabContent jobsContent={jobs[item.key]} />
    //     }
    //   );
    // });
    const items = jobTeams.map((item: any) => {
      const jobsOfTeam = jobs.filter((job: any) => job.jobTeam.code === item.code);
      return (
        jobsOfTeam.length && {
          key: item.id,
          label: <TabLabel icon={jobIcons[item.code]} title={item.name} quantity={jobsOfTeam.length} />,
          children: <TabContent jobsContent={jobsOfTeam} />
        }
      );
    });

    setItems([
      {
        key: 'all',
        label: <TabLabel icon={jobIcons.all} title="Tất cả các vị trí" quantity={jobs.length} />,
        children: <TabContent jobsContent={jobs} />
      },
      ...items
    ]);
  }, []);
  console.log(items);

  return (
    <div id="jobs" ref={ref}>
      <Tabs
        items={items}
        defaultActiveKey="all"
        tabPosition={screenSize !== SCREEN_MOBILE ? 'left' : 'top'}
        tabBarGutter={0}
      ></Tabs>
    </div>
  );
};

export default memo(Jobs);
