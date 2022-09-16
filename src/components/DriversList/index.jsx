import { Avatar, List } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";
import EditDriverModal from "../EditDriverModal";

const DriversList = () => {
  const { drivers } = useContext(DriversContext);

  return (
    <List
      itemLayout="horizontal"
      dataSource={drivers}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.name}
          />
          <EditDriverModal>Editar</EditDriverModal>
        </List.Item>
      )}
    />
  );
};

export default DriversList;
