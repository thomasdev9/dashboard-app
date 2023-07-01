import React from 'react';
import { Modal } from 'antd';

function CreateFormModal({ open, setOpen, title, form }) {
  return (
    <Modal open={open} onCancel={() => setOpen(false)} title={title} footer={null}>
      {form}
    </Modal>
  );
}

export default CreateFormModal;
