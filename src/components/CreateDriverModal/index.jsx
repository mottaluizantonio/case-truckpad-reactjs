import { Button } from "antd";
import React, { useContext, useState } from "react";
import { DriversContext } from "../../providers/drivers";
import getDocument from "../../utils/getDocument";
import CollectionCreateForm from "./CollectionCreateForm";

const CreateDriverModal = ({ children }) => {
  const { drivers, addDriver } = useContext(DriversContext);

  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    const { name, phone, birthdate, cnh, category, cpf } = values;

    const cpfAlreadyRegistered = drivers.find(
      (driver) => getDocument(driver) === cpf
    );

    if (!cpfAlreadyRegistered) {
      const newDriver = {
        name,
        birthdate,
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

      addDriver(newDriver);
      setOpen(false);
    }
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