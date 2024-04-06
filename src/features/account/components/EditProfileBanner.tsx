'use client';
import { Dropzone } from '@/components/cores/Dropzone';
import { PreviewImages } from '@/components/cores/PreviewImage';
import { Button, Flex, Modal, Text } from '@mantine/core';
import { Form, useFormikContext } from 'formik';
import React from 'react';

interface IEditProfileBannerProps {
  opened: any;
  close: any;
}

const EditProfileBanner: React.FC<IEditProfileBannerProps> = ({
  opened,
  close,
}) => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<IEditProfileBannerForm>();
  return (
    <Modal
      opened={opened}
      onClose={close}
      title='Edit Profile Banner'
      withCloseButton={false}
    >
      <Form>
        {values.banner ? (
          <PreviewImages
            fileImage={values.banner}
            onRemoveImage={() => setFieldValue('banner', undefined)}
          />
        ) : (
          <Dropzone
            title='Drag or click to select file'
            description='Image file should not exceed 5MB'
            maxSize={5 * 1024 ** 2} //5MB
            multiple={false}
            onDrop={(file) => setFieldValue('banner', file)}
          />
        )}
        <Flex justify='end' mt='20px'>
          <Button type='submit' disabled={!values.banner}>
            Submit
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default EditProfileBanner;
