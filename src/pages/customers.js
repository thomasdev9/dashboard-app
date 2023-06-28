import Content from '../features/ui/content';
import { Typography, Input } from 'antd';

const { Title } = Typography;
const { Search } = Input;

function Customers() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Customers
      </Title>
      <Search placeholder="Search Customers" className="search-bar" enterButton={false} addonAfter={false} />
    </Content>
  );
}

export default Customers;
