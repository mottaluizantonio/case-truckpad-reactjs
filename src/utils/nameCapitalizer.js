const nameCapitalizer = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase() + n.substring(1))
    .join(" ");
};

export default nameCapitalizer;
