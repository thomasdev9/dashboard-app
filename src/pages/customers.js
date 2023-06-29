import React from 'react';
import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

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

function Customers() {
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

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Customers
      </Title>
      <Search placeholder="Search Customers" className="search-bar" enterButton={false} addonAfter={false} />
      <Table
        dataSource={[]}
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No customers found'} /> }}
      />
    </Content>
  );
}

export default Customers;
