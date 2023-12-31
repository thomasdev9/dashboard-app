const formatName = (name) => {
  return `${name?.firstname} ${name?.lastname}`;
};

const formatAddress = (address) => {
  return `${address?.street} ${address?.number}, ${address?.city}`;
};

export const formatCustomersData = (data) => {
  return data?.map((customer) => ({
    id: customer?.id,
    name: formatName(customer?.name),
    email: customer?.email,
    phone: customer?.phone,
    address: formatAddress(customer?.address),
  }));
};

export const formatProductsData = (data) => {
  return data?.map((product) => ({
    id: product?.id,
    title: product?.title,
    price: product?.price,
    category: product?.category,
    image: product?.image,
  }));
};
