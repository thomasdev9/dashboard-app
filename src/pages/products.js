import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { fetchProducts } from '../redux/slices/products';
import { formatProductsData } from '../shared/utils';
import { ProductsAPI } from '../api/products-api';

const ProductsImg = styled.img`
  width: 70px;
  height: 70px;
`;

const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

function products() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.products.data);
  const columns = [
    {
      title: 'IMAGE',
      dataIndex: 'image',
      key: 'image',
      render: (record) => {
        return <ProductsImg src={record} />;
      },
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
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
    dispatch(fetchProducts());
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
        ProductsAPI.deleteProduct({ id: record?.id }).then(() => {
          dispatch(fetchProducts());
          message.success('Product successfully deleted.');
        });
      },
    });
  };

  const dropdownMenu = (record) => (
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

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Products
      </Title>
      <Search placeholder="Search Customers" className="search-bar" />
      <Table
        dataSource={formatProductsData(dataSource)}
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No orders found'} /> }}
      />
    </Content>
  );
}

export default products;
