import { DatePicker, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";

const CollectionEditForm = ({ cpf, open, onCreate, onCancel }) => {
  const { drivers } = useContext(DriversContext);
  const driver = drivers.find((driver) => driver.documents.cpf.number === cpf);
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
          onCreate(values);
        });
      }}
    >
      {driver && (
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
            initialValue={driver.documents.cnh.number}
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
            initialValue={driver.documents.cnh.category}
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
            initialValue={driver.documents.cpf.number}
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
      )}
    </Modal>
  );
};

export default CollectionEditForm;
