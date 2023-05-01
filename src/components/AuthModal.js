import React, { useState } from 'react';
import { Modal, Form, Input, Button, Spin } from 'antd';

const AuthModal = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    handleOk();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Login"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Login
          </Button>,
        ]}
      >
        <Spin spinning={loading}>
          <Form onFinish={onFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};

export default AuthModal;
