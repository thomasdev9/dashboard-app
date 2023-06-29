import Content from '../features/ui/content';
import { Typography, Input, Table, Empty, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const dropdownMenu = (
  <Menu>
    <Menu.Item key="1">
      <Button type="link" danger>
        <DeleteOutlined /> Διαγραφή
      </Button>
    </Menu.Item>
  </Menu>
);

function Orders() {
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
        Orders
      </Title>
      <Search placeholder="Search Customers" className="search-bar" enterButton={false} addonAfter={false} />
      <Table
        dataSource={[]}
        columns={columns}
        scroll={{ x: true }}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'No orders found'} /> }}
      />
    </Content>
  );
}

export default Orders;
