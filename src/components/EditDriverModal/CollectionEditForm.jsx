import { DatePicker, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";
import getDocument from "../../utils/getDocument";

const CollectionEditForm = ({ cpf, open, onCreate, onCancel }) => {
  const { drivers } = useContext(DriversContext);
  const driver = drivers.find((driver) => getDocument(driver) === cpf);

  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Editar motorista:"
      okText="Salvar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
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
