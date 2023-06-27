import Content from '../features/ui/content';
import { Typography } from 'antd';

const { Title } = Typography;

function Analytics() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Analytics
      </Title>
    </Content>
  );
}

export default Analytics;
