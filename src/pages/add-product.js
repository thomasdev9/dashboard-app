import Content from '../features/ui/content';
import { Typography, Card, message } from 'antd';
import CreateForm from '../features/components/create-form';
import { formData } from '../shared/setup/add-product';
import { ProductsAPI } from '../api/products-api';

const { Title } = Typography;

function AddProduct() {
  const handleSubmit = (values) => {
    ProductsAPI.addProduct({ data: { ...values } }).then((res) => {
      window.location.reload(false);
      if (res?.id) {
        message.success('Product added successfully!');
      } else {
        message.error('There was a problem adding the product');
      }
    });
  };

  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Add new product
      </Title>
      <Card title="Product Data">
        <CreateForm {...formData} handleSubmit={handleSubmit} />
      </Card>
    </Content>
  );
}

export default AddProduct;
