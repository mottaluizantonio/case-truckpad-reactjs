import { createContext, useEffect, useState } from "react";

export const DriversContext = createContext([]);

export const DriversProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setDrivers(myJson);
      });
  }, []);

  const addDriver = (driver) => {
    setDrivers([...drivers, driver]);
  };

  const editDriver = (driver, is_active = true) => {
    const updatedDriverList = drivers.map((item) =>
      item.documents.cpf.number === driver.documents.cpf.number
        ? { ...driver, is_active }
        : item
    );

    setDrivers(updatedDriverList);
  };

  return (
    <DriversContext.Provider value={{ drivers, addDriver, editDriver }}>
      {children}
    </DriversContext.Provider>
  );
};
