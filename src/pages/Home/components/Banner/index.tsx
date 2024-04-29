import { Col, Row } from "antd";
import React, { LegacyRef } from "react";
import bannerNewSrc from "src/assets/images/banner-new.webp";
import { SCREEN_DESKTOP } from "src/constants";
import { useScreenSize } from "src/hooks/useScreenSize";
import bannerMobileSrc from "../../../../assets/images/banner-bg-mobile.webp";
import bannerSrc from "../../../../assets/images/banner-bg.webp";
import "./style.scss";

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
};

const Banner: React.FC<Props> = ({ ref }) => {
  const screenSize: any = useScreenSize();

  return (
    <section
      id="banner"
      ref={ref}
      style={{
        background: `url(${
          screenSize !== SCREEN_DESKTOP ? bannerMobileSrc : bannerSrc
        })`,
        backgroundSize: " cover",
        backgroundPosition: "center",
      }}
    >
      <Row gutter={[{ xl: 0, lg: 0, md: 0, sm: 0, xs: 0 }, {}]}>
        <Col xl={2} lg={0} md={0} sm={0} xs={24}></Col>
        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <div className="banner-left">
            <h2>EXSOFT JSC</h2>
            <h3>Expertise, Tech & H.E.A.R.T</h3>
            <p>
              <strong>Exsoft</strong> là startup công nghệ trong lĩnh vực Chăm
              sóc sức khỏe và Giáo dục sớm. Các sản phẩm của Exsoft đều tập
              trung vào việc đem lại giá trị cho khách hàng và xã hội, tạo ra
              giải pháp hữu ích cho hàng triệu cha mẹ trong quá trình chăm sóc
              và giáo dục con cái.
              <br />
              <br />
              Bằng sự kết hợp giữa Công nghệ, Chuyên gia và Trải nghiệm người
              dùng trong các sản phẩm của Exsoft, chúng tôi hướng đến việc trở
              thành thương hiệu hàng đầu trong việc cung cấp các sản phẩm ứng
              dụng dành cho mẹ và bé, hoàn thành sứ mệnh kiến tạo nên những giá
              trị tốt đẹp, cải thiện phương pháp chăm sóc và nuôi dạy con, tạo
              nền tảng vững chắc cho các mầm non tương lai để thúc đẩy xã hội
              phát triển tốt đẹp hơn.
            </p>
          </div>
        </Col>
        <Col xl={13} lg={24} md={24} sm={24} xs={24}>
          <div className="banner-right">
            <img src={bannerNewSrc} alt="union" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
