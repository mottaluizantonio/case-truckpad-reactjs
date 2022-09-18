import { DatePicker, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DriversContext } from "../../providers/drivers";
import getDocument from "../../utils/getDocument";

const CollectionEditForm = ({ cpf, open, onCreate, onCancel }) => {
  const { drivers } = useContext(DriversContext);
  const [driver, setDriver] = useState(
    drivers.find((driver) => getDocument(driver) === cpf)
  );

  useEffect(() => {
    setDriver(drivers.find((driver) => getDocument(driver) === cpf));
  }, [drivers]);

  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Editar motorista:"
      style={{ maxWidth: "300px" }}
      okText="Salvar"
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
          initialValue={driver.name}
          label="Nome completo"
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
          initialValue={driver.phone}
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
          initialValue={getDocument(driver, "numberCNH")}
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
          initialValue={getDocument(driver, "CNH")}
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
          initialValue={getDocument(driver)}
          label="CPF"
          rules={[
            {
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

export default CollectionEditForm;
