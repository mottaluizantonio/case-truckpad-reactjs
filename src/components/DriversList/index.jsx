import { Avatar, List, Button, message } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";
import getDocument from "../../utils/getDocument";
import EditDriverModal from "../EditDriverModal";

const DriversList = () => {
  const { drivers, editDriver } = useContext(DriversContext);

  const driversActives = drivers.filter((item) => item.is_active);

  const handleClick = (driver) => {
    editDriver(driver, false);
    message.success("Motorista excluído com sucesso!");
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={driversActives}
      renderItem={(driver) => (
        <List.Item
          actions={[
            <EditDriverModal cpf={getDocument(driver)}>Editar</EditDriverModal>,
            <Button onClick={() => handleClick(driver)} danger>
              Excluir
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{driver.name}</a>}
            description={getDocument(driver, "CNH")}
          />
        </List.Item>
      )}
    />
  );
};

export default DriversList;
