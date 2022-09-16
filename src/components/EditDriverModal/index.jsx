import { Button } from "antd";
import React, { useContext, useState } from "react";
import { DriversContext } from "../../providers/drivers";
import CollectionEditForm from "./CollectionEditForm";

const EditDriverModal = ({ cpf, children }) => {
  const { drivers, editDriver } = useContext(DriversContext);

  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    const { name, phone, birthdate, cnh, category, cpf } = values;

    const newDriver = {
      name,
      birth_date: birthdate._d,
      phone,
      documents: [
        {
          doc_type: "CNH",
          category,
          number: cnh,
        },
        {
          doc_type: "CPF",
          number: cpf,
        },
      ],
    };

    console.log("New driver: ", newDriver);
    editDriver(newDriver);
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
