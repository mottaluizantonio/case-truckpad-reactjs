import { DatePicker, Form, Input, Modal } from "antd";
import React from "react";

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      style={{ maxWidth: "300px" }}
      title="Cadastrar motorista:"
      okText="Cadastrar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              message: "Por favor, insira o nome completo do motorista.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefone"
          rules={[
            {
              required: true,
              message: "Por favor, insira o número de telefone.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthdate"
          label="Data de Nascimento"
          rules={[
            {
              required: true,
              message: "Por favor, informe a data de nascimento.",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="cnh"
          label="Número da CNH"
          rules={[
            {
              required: true,
              message: "Por favor, insira o número da CNH.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Categoria da CNH"
          rules={[
            {
              required: true,
              message: "Por favor, insira a categoria da CNH.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cpf"
          label="CPF"
          rules={[
            {
              unique: true,
              required: true,
              message: "Por favor, insira o número do CPF.",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
