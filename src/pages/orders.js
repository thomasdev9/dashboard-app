import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { fetchOrders } from '../redux/slices/orders';
import { OrdersAPI } from '../api/orders-api';

const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

function Orders() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.orders.data);
  const columns = [
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
    {
      title: 'ACTIONS',
      name: 'actions',
      render: (record) => {
        return (
          <Dropdown overlay={dropdownMenu(record)} trigger={['hover']}>
            <Button className="ant-dropdown-link" onClick={(e) => e.preventDefault()} type="link">
              <MoreOutlined style={{ fontSize: '20px' }} />
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const showConfirm = (record) => {
    confirm({
      title: 'Are you sure you want to delete this customer?',
      icon: <ExclamationCircleFilled />,
      content: 'In case of deletion, the action is irreversible.',
      okText: 'Διαγραφή',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        OrdersAPI.deleteOrder({ id: record?.id }).then(() => {
          dispatch(fetchOrders());
          message.success('Order successfully deleted.');
        });
      },
    });
  };

  const dropdownMenu = (record) => (
    <Menu>
      <Menu.Item key="1">
        <Button type="link" danger onClick={() => showConfirm(record)}>
          <DeleteOutlined /> Διαγραφή
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Orders
      </Title>
      <Search placeholder="Search Customers" className="search-bar" enterButton={false} addonAfter={false} />
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No orders found'} /> }}
      />
    </Content>
  );
}

export default Orders;
