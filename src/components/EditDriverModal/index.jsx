import { Button, message } from "antd";
import React, { useContext, useState } from "react";
import { DriversContext } from "../../providers/drivers";
import nameCapitalizer from "../../utils/nameCapitalizer";
import CollectionEditForm from "./CollectionEditForm";

const EditDriverModal = ({ cpf, children }) => {
  const { editDriver } = useContext(DriversContext);

  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    const { name, phone, birthdate, cnh, category, cpf } = values;

    const newDriver = {
      name: nameCapitalizer(name),
      is_active: true,
      birth_date: birthdate._d,
      phone,
      documents: {
        cpf: {
          doc_type: "CPF",
          number: cpf,
        },
        cnh: {
          doc_type: "CNH",
          category: category.toUpperCase(),
          number: cnh,
        },
      },
    };

    editDriver(newDriver);
    message.success("Motorista atualizado com sucesso!");
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </Button>
      <CollectionEditForm
        cpf={cpf}
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default EditDriverModal;
