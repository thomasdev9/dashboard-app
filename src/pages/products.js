import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Content from '../features/ui/content';
import { Typography, Table, Empty, Dropdown, Menu, Button, Modal, message } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { fetchProducts } from '../redux/slices/products';
import { formatProductsData } from '../shared/utils';
import { ProductsAPI } from '../api/products-api';
import CreateFormModal from '../features/components/create-form-modal';
import CreateForm from '../features/components/create-form';
import { editProductData } from '../shared/setup/products';
import LoadingSpinner from '../features/ui/loading-spinner';

const ProductsImg = styled.img`
  width: 70px;
  height: 70px;
`;

const { Title } = Typography;
const { confirm } = Modal;

function products() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);
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
      okText: 'Delete',
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

  const handleSubmit = (values, { resetForm }) => {
    ProductsAPI.updateProduct({ id: selectedProduct, data: values }).then(() => {
      dispatch(fetchProducts());
      resetForm({ values: '' });
      message.success('Product successfully updated.');
    });
  };

  const dropdownMenu = (record) => (
    <Menu>
      <Menu.Item key="0">
        <Button
          type="link"
          onClick={() => {
            setSelectedProduct(record?.id);
            setOpen(true);
          }}
        >
          <EditOutlined /> Edit
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="link" danger onClick={() => showConfirm(record)}>
          <DeleteOutlined /> Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Products
      </Title>
      <CreateFormModal
        title="Product Data"
        open={open}
        setOpen={setOpen}
        form={<CreateForm {...editProductData} handleSubmit={handleSubmit} />}
      />
      {!isLoading ? (
        <Table
          dataSource={formatProductsData(dataSource)}
          columns={columns}
          scroll={{ x: true }}
          pagination={{ pageSize: 5, position: ['bottomCenter'] }}
          locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No orders found'} /> }}
        />
      ) : (
        <LoadingSpinner message="Loading products..." />
      )}
    </Content>
  );
}

export default products;
