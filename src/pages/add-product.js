import Content from '../features/ui/content';
import { Typography, Card } from 'antd';
import CreateForm from '../features/components/create-form';
import { formData } from '../shared/setup/add-product';

const { Title } = Typography;

function AddProduct() {
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Add new product
      </Title>
      <Card title="Product Data">
        <CreateForm {...formData} />
      </Card>
    </Content>
  );
}

export default AddProduct;
