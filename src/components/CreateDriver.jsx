import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import React, { useState } from "react";

const CreateDriver = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Nome">
        <Input />
      </Form.Item>
      <Form.Item label="Telefone">
        <Input />
      </Form.Item>
      <Form.Item label="Data de Nascimento">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Número da CNH">
        <Input />
      </Form.Item>
      <Form.Item label="Categoria da CNH">
        <Input />
      </Form.Item>
      <Form.Item label="CPF">
        <Input />
      </Form.Item>
      <Form.Item label="">
        <Button>Cadastrar</Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDriver;
