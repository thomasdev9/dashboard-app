import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../features/ui/content';
import { Typography, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import { fetchCustomers } from '../redux/slices/customers';
import { CustomersAPI } from '../api/customers-api';
import { editCustomerData } from '../shared/setup/customers';
import CreateFormModal from '../features/components/create-form-modal';
import CreateForm from '../features/components/create-form';
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

function Customers() {
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.customers.data);
  const isLoading = useSelector((state) => state.customers.loading);
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

  const handleSubmit = (values, { resetForm }) => {
    CustomersAPI.updateCustomer({ id: selectedCustomer, data: values }).then(() => {
      dispatch(fetchCustomers());
      resetForm({ values: '' });
      message.success('Customer successfully updated.');
    });
  };

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
          <Button
            type="link"
            onClick={() => {
              setOpen(true);
              setSelectedCustomer(record?.id);
            }}
          >
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
      <HeaderWrapper>
        <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
          Customers
        </Title>
        <Link to="/add-customer">
          <AddButton>
            <PlusOutlined style={{ marginRight: '5px' }} /> Add
          </AddButton>
        </Link>
      </HeaderWrapper>
      <CreateFormModal
        title="Customer Data"
        open={open}
        setOpen={setOpen}
        form={<CreateForm {...editCustomerData} handleSubmit={handleSubmit} />}
      />
      {!isLoading ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: true }}
          pagination={{ pageSize: 5, position: ['bottomCenter'] }}
          locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No customers found'} /> }}
        />
      ) : (
        <LoadingSpinner message="Loading customers..." />
      )}
    </Content>
  );
}

export default Customers;
