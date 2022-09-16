import { Avatar, List, Button, message, Popconfirm } from "antd";
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
            <Popconfirm
              title="Tem certeza que quer excluir esse motorista?"
              onConfirm={() => handleClick(driver)}
              okText="Sim"
              cancelText="Não"
            >
              <Button danger>Excluir</Button>
            </Popconfirm>,
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
