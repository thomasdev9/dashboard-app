import Content from '../features/ui/content';
import { Typography } from 'antd';

const { Title } = Typography;

function Settings() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Settings
      </Title>
    </Content>
  );
}

export default Settings;
