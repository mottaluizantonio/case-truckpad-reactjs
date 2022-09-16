import { Avatar, List, Button } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";
import getDocument from "../../utils/getDocument";
import EditDriverModal from "../EditDriverModal";

const DriversList = () => {
  const { drivers, editDriver } = useContext(DriversContext);

  const driversActives = drivers.filter((item) => item.is_active);

  return (
    <List
      itemLayout="horizontal"
      dataSource={driversActives}
      renderItem={(driver) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{driver.name}</a>}
            description={getDocument(driver, "CNH")}
          />
          <EditDriverModal cpf={getDocument(driver)}>Editar</EditDriverModal>
          <Button onClick={() => editDriver(driver, false)} danger>
            Excluir
          </Button>
        </List.Item>
      )}
    />
  );
};

export default DriversList;
