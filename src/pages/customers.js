import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { fetchCustomers } from '../redux/slices/customers';
import { formatCustomersData } from '../shared/utils';
import { CustomersAPI } from '../api/customers-api';

const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

function Customers() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.customers.data);
  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'ADDRESS',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'PHONE',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'ACTIONS',
      key: 'actions',
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
    dispatch(fetchCustomers());
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
        CustomersAPI.deleteCustomer({ id: record?.id }).then(() => {
          dispatch(fetchCustomers());
          message.success('Customer successfully deleted.');
        });
      },
    });
  };

  const dropdownMenu = (record) => {
    return (
      <Menu>
        <Menu.Item key="0">
          <Button type="link">
            <EditOutlined /> Επεξεργασία
          </Button>
        </Menu.Item>
        <Menu.Item key="1">
          <Button type="link" danger onClick={() => showConfirm(record)}>
            <DeleteOutlined /> Διαγραφή
          </Button>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Customers
      </Title>
      <Search placeholder="Search Customers" className="search-bar" enterButton={false} addonAfter={false} />
      <Table
        dataSource={formatCustomersData(dataSource)}
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No customers found'} /> }}
      />
    </Content>
  );
}

export default Customers;
