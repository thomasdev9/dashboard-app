import { UserOutlined, ShoppingOutlined, SkinOutlined } from '@ant-design/icons';

export const cardsData = [
  {
    icon: <UserOutlined style={{ color: 'rgb(11, 183, 175)', size: '21px' }} />,
    color: 'rgb(213, 243, 242)',
    header: 'Customers',
    linkText: 'View Customers',
    path: '/customers',
    value: 20,
  },
  {
    icon: <ShoppingOutlined style={{ color: 'rgb(246, 78, 96)', size: '21px' }} />,
    color: 'rgb(248, 221, 221)',
    header: 'Orders',
    linkText: 'View Orders',
    path: '/orders',
    value: 32,
  },
  {
    icon: <SkinOutlined style={{ color: 'rgb(238, 157, 1)', size: '21px' }} />,
    color: 'rgb(248, 236, 220)',
    header: 'Products',
    linkText: 'View Products',
    path: '/products',
    value: 18,
  },
];

export const columns = [
  {
    title: 'ID',
    name: 'id',
    dataIndex: 'id',
  },
  {
    title: 'PRICE',
    name: 'price',
    dataIndex: 'price',
  },
  {
    title: 'DATE',
    name: 'date',
    dataIndex: 'date',
  },
  {
    title: 'ADDRESS',
    name: 'address',
    dataIndex: 'address',
  },
];
