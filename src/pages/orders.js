import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../features/ui/content';
import { Typography, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, DeleteOutlined, ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import { fetchOrders } from '../redux/slices/orders';
import { OrdersAPI } from '../api/orders-api';
import LoadingSpinner from '../features/ui/loading-spinner';

const { Title } = Typography;
const { confirm } = Modal;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AddButton = styled.button`
  background: rgb(99, 102, 241);
  border-radius: 12px;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgb(67, 56, 202);
  }
`;

function Orders() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.orders.data);
  const isLoading = useSelector((state) => state.orders.loading);
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
      <HeaderWrapper>
        <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
          Orders
        </Title>
        <Link to="/add-order">
          <AddButton>
            <PlusOutlined style={{ marginRight: '5px' }} /> Add
          </AddButton>
        </Link>
      </HeaderWrapper>
      {!isLoading ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: true }}
          pagination={{ pageSize: 5, position: ['bottomCenter'] }}
          locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No orders found'} /> }}
        />
      ) : (
        <LoadingSpinner message="Loading orders..." />
      )}
    </Content>
  );
}

export default Orders;
