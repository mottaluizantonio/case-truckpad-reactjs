import { Button, message } from "antd";
import React, { useContext, useState } from "react";
import { DriversContext } from "../../providers/drivers";
import nameCapitalizer from "../../utils/nameCapitalizer";
import CollectionCreateForm from "./CollectionCreateForm";

const CreateDriverModal = ({ children }) => {
  const { drivers, addDriver } = useContext(DriversContext);

  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    const { name, phone, birthdate, cnh, category, cpf } = values;

    const cpfAlreadyRegistered = drivers.find(
      (driver) => driver.documents.cpf.number === cpf
    );

    if (!cpfAlreadyRegistered) {
      const newDriver = {
        name: nameCapitalizer(name),
        is_active: true,
        birth_date: birthdate,
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

      addDriver(newDriver);
      console.log("motorista: ", newDriver);
      setOpen(false);
    } else {
      message.error("CPF já cadastrado!");
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        style={{
          marginTop: "50px",
        }}
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default CreateDriverModal;
