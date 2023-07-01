import React from 'react';
import Content from '../features/ui/content';
import { Typography, Card, message } from 'antd';
import CreateForm from '../features/components/create-form';
import { settingsData } from '../shared/setup/settings';
import { SettingsAPI } from '../api/settings-api';

const { Title } = Typography;

function Settings() {
  const handleSubmit = (values, { resetForm }) => {
    SettingsAPI.updateSettings({ data: values }).then(() => {
      resetForm({ values: '' });
      message.success('Settings successfully updated!');
    });
  };
  return (
    <Content>
      <Title style={{ color: 'rgb(17, 25, 39)' }} level={2}>
        Settings
      </Title>
      <Card title="Personal Data">
        <CreateForm {...settingsData} handleSubmit={handleSubmit} />
      </Card>
    </Content>
  );
}

export default Settings;
