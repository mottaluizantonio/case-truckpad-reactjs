import { Button } from "antd";
import React, { useState } from "react";
import CollectionEditForm from "./CollectionEditForm";

const EditDriverModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
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
