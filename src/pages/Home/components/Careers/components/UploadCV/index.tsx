import { CheckCircleFilled, CheckOutlined } from "@ant-design/icons";
import { Col, Form, Input, Modal, Row, Select, Upload } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as UploadIcon } from "src/assets/icons/upload.svg";
import JOBS_API from "src/axios/jobs";
import { ButtonC } from "src/components";
import { DELAY } from "src/constants";
import { CareersContext } from "src/pages/Home/components/Careers";
import { phoneReg } from "src/utils/validations";
import "./style.scss";

type Props = {
  jobs: any;
};
const { Option } = Select;

const UploadCV: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const [files, setFiles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { careers, jobs, nameCvRef } = useContext(CareersContext);

  const handleUploadFile = (file: any, fileList: any) => {
    setFiles(fileList);
  };

  const onFinish = (values: any) => {
    setLoading(true);
    try {
      const { file, ...rest } = values;
      const body = new FormData();
      const data = new Blob([JSON.stringify(rest)], {
        type: "application/json",
      });
      body.append("payload", data);
      if (files.length) {
        files.forEach((f: any) => {
          body.append("file", f);
        });
      }
      setTimeout(async () => {
        const response: any = await JOBS_API.jobsApply(body);
        const { status } = response;

        if (status === 204) {
          setLoading(false);
          setIsModalOpen(true);
          form.resetFields(undefined);
          setFiles([]);
        }
      }, DELAY);
    } catch (error: any) {
      console.log("error:", error);
    }
  };

  // onFinishFailed
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const props: any = {
    name: "file",
    multiple: true,
    fileList: files,
    accept: ".doc, .docx, .pdf",
    showUploadList: {
      showPreviewIcon: false,
    },
    customRequest: () => {},
    beforeUpload: handleUploadFile,
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (careers) {
      form.setFieldsValue({ jobId: careers.id });
    }
  }, [careers, form]);

  return (
    <div id="upload-cv">
      <div className="upload-cv__wrap">
        <Form
          form={form}
          name="upload-cv-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          colon={false}
          layout="vertical"
        >
          <Row gutter={[{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }, {}]}>
            <Col xl={12} lg={12} md={12} sm={12} xs={24}>
              <Form.Item
                name="jobId"
                label="Ứng tuyển cho vị trí"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn vị trí ứng tuyển",
                  },
                ]}
              >
                <Select
                  allowClear
                  placeholder="Chọn vị trí ứng tuyển"
                  optionFilterProp="value"
                  menuItemSelectedIcon={
                    <CheckOutlined
                      style={{ color: `var(--primary)`, fontSize: 18 }}
                    />
                  }
                >
                  {jobs?.all?.map((item: any) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                  {/* <Option value="reactjs">React Js</Option>
                  <Option value="java">Java</Option>
                  <Option value="C#">C#</Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={24}>
              <Form.Item
                name="name"
                label="Họ và tên"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ và tên",
                  },
                ]}
              >
                <Input
                  ref={nameCvRef}
                  allowClear
                  placeholder="Nhập họ và tên"
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={24}>
              <Form.Item
                name="email"
                label="Địa chỉ email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ email",
                  },
                  {
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                ]}
              >
                <Input allowClear placeholder="Nhập địa chỉ email" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={24}>
              <Form.Item
                name="phoneNumber"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                  {
                    pattern: phoneReg,
                    message: "Số điện thoại không hợp lệ",
                    whitespace: true,
                  },
                ]}
              >
                <Input allowClear placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={24}>
              <Form.Item
                name="file"
                label="Tải lên CV của bạn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng tải lên CV của bạn",
                  },
                ]}
              >
                <Upload {...props}>
                  <div className="upload-file">
                    <div className="upload-file__icon">
                      <UploadIcon />
                    </div>
                    <span>Chỉ tải lên CV .pdf, .doc, .docx và tối đa 10MB</span>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item shouldUpdate style={{ margin: 0 }}>
                <div className="button-submit">
                  <ButtonC primary children="Gửi" loading={loading}></ButtonC>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Modal
          title=""
          open={isModalOpen}
          centered
          footer={null}
          closable={false}
          onCancel={handleCancel}
          wrapClassName="upload-cv-success-modal"
        >
          <div className="upload-cv-success-modal__header">
            <CheckCircleFilled
              style={{ fontSize: 24, color: "var(--primary)" }}
            />
            <h4>Nộp hồ sơ thành công</h4>
          </div>
          <p>
            Chúc mừng bạn! Hồ sơ của bạn đã được gửi thành công
            <br />
            Tuyển dụng Exsoft sẽ liên hệ với bạn trong thời gian sớm nhất
          </p>
          <ButtonC primary children="Đóng" onClick={handleCancel}></ButtonC>
        </Modal>
      </div>
    </div>
  );
};

export default UploadCV;
