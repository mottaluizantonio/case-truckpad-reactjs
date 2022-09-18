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
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDrivers(myJson);
      });
  }, []);

  const addDriver = (driver) => {
    setDrivers([...drivers, driver]);
  };

  const editDriver = (driver, is_active = true) => {
    const updatedDriverList = drivers.map((item) => {
      if (item.documents.cpf.number === driver.documents.cpf.number) {
        return { ...driver, is_active };
      }
      return item;
    });

    setDrivers(updatedDriverList);
  };

  return (
    <DriversContext.Provider value={{ drivers, addDriver, editDriver }}>
      {children}
    </DriversContext.Provider>
  );
};
