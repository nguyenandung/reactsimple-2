import { CheckCircleFilled } from '@ant-design/icons';
import { Col, Form, Input, Modal, Row } from 'antd';
import React, { useState } from 'react';
import CONTACT_API from 'src/axios/contact';
import { ButtonC } from 'src/components';
import { EmailBoxIcon } from 'src/components/Icons';
import { phoneReg } from 'src/utils/validations';
import './style.scss';
import contactLineSrc from 'src/assets/images/contact-line.png';
import { DELAY, SCREEN_DESKTOP } from 'src/constants';
import { useScreenSize } from 'src/hooks/useScreenSize';

const Contacts: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const screenSize: any = useScreenSize();

  // onFinish
  const onFinish = (values: any) => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response: any = await CONTACT_API.contact(values);
        const { status } = response;

        if (status === 204) {
          setLoading(false);
          setIsModalOpen(true);
          form.resetFields(undefined);
        }
      }, DELAY);
    } catch (error: any) {
      console.log('error:', error);
    }
  };

  // onFinishFailed
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__header contacts--block">
          <h2 className="header__title">Gửi tin nhắn cho chúng tôi</h2>
          {screenSize === SCREEN_DESKTOP && <img src={contactLineSrc} alt="contact" />}
          <EmailBoxIcon />
        </div>
        <div className="contacts__main contacts--block">
          <Form
            form={form}
            name="contacts-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            colon={false}
            layout="vertical"
            initialValues={{ position: 100 }}
          >
            <Row gutter={[{ xl: 16, lg: 16, md: 16, sm: 16, xs: 16 }, {}]}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="name"
                  label="Họ và tên"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập họ và tên'
                    }
                  ]}
                >
                  <Input allowClear placeholder="Nhập họ và tên" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="email"
                  label="Địa chỉ email"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập địa chỉ email'
                    },
                    {
                      type: 'email',
                      message: 'Email không hợp lệ'
                    }
                  ]}
                >
                  <Input allowClear placeholder="Nhập địa chỉ email" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="phoneNumber"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập số điện thoại'
                    },
                    {
                      pattern: phoneReg,
                      message: 'Số điện thoại gồm 10 số',
                      whitespace: true
                    }
                  ]}
                >
                  <Input allowClear placeholder="Nhập số điện thoại" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item name="company" label="Công ty" normalize={(value: string) => (value ? value : null)}>
                  <Input allowClear placeholder="Nhập tên công ty" />
                </Form.Item>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Form.Item
                  name="content"
                  label="Tin nhắn"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập nội dung tin nhắn'
                    }
                  ]}
                >
                  <Input.TextArea allowClear placeholder="Nhập nội dung tin nhắn" style={{ height: 112 }} />
                </Form.Item>
              </Col>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Form.Item shouldUpdate style={{ margin: 0 }}>
                  <div className="contacts__submit">
                    <ButtonC primary children="Gửi" loading={loading}></ButtonC>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <Modal
        title=""
        open={isModalOpen}
        centered
        footer={null}
        closable={false}
        onCancel={handleCancel}
        wrapClassName="contact-success-modal"
      >
        <div className="contact-success-modal__header">
          <CheckCircleFilled style={{ fontSize: 24, color: 'var(--primary)' }} />
          <h4>Liên hệ thành công</h4>
        </div>
        <p>
          Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi đi
          <br />
          Chúng tôi sẽ tiếp nhận và phản hồi trong thời gian sớm nhất
        </p>
        <ButtonC primary children="Đóng" loading={loading} onClick={handleCancel}></ButtonC>
      </Modal>
    </section>
  );
};

export default Contacts;
