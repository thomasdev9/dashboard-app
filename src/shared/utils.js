const formatName = (name) => {
  return `${name?.firstname} ${name?.lastname}`;
};

const formatAddress = (address) => {
  return `${address?.street} ${address?.number}, ${address?.city}`;
};

export const formatCustomersData = (data) => {
  return data?.map((customer) => ({
    name: formatName(customer?.name),
    email: customer?.email,
    phone: customer?.phone,
    address: formatAddress(customer?.address),
  }));
};
