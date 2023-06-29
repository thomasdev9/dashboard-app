import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchProducts } from '../redux/slices/products';
import { formatProductsData } from '../shared/utils';

const ProductsImg = styled.img`
  width: 70px;
  height: 70px;
`;

const { Title } = Typography;
const { Search } = Input;

const dropdownMenu = (
  <Menu>
    <Menu.Item key="0">
      <Button type="link">
        <EditOutlined /> Επεξεργασία
      </Button>
    </Menu.Item>
    <Menu.Item key="1">
      <Button type="link" danger>
        <DeleteOutlined /> Διαγραφή
      </Button>
    </Menu.Item>
  </Menu>
);

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
      dataIndex: 'actions',
      render: () => {
        return (
          <Dropdown overlay={dropdownMenu} trigger={['hover']}>
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
