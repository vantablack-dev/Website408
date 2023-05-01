import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react'

const NewProductForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <Form name="new_product" onFinish={onFinish}>
      <Form.Item
        label="Product name"
        name="name"
        rules={[{ required: true, message: 'Please input the product name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input the product price!' }]}
      >
        <Input type="number" min={0} step={0.01} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the product description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Please upload an image!' }]}
      >
        <Upload name="image" listType="picture">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};
export default NewProductForm;