const getDocument = (driver, docType) => {
  if (docType === "CNH") {
    return (
      driver.documents.find((doc) => (doc.doc_type = "CNH")).category ||
      "indisponível"
    );
  } else {
    if (docType === "numberCNH") {
      return (
        driver.documents.find((doc) => (doc.doc_type = "CNH")).number ||
        "indisponível"
      );
    }
    return driver.documents.find((doc) => (doc.doc_type = "CPF")).number;
  }
};

export default getDocument;
