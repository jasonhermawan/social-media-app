'use client';
import { Dropzone } from '@/components/cores/Dropzone';
import { PreviewImages } from '@/components/cores/PreviewImage';
import { Button, Flex, Modal, Text } from '@mantine/core';
import { Form, useFormikContext } from 'formik';
import React from 'react';

interface IEditProfilePictureProps {
  opened: any;
  close: any;
}

const EditProfilePicture: React.FC<IEditProfilePictureProps> = ({
  opened,
  close,
}) => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<IEditProfilePictureForm>();
  return (
    <Modal
      opened={opened}
      onClose={close}
      title='Edit Profile Picture'
      withCloseButton={false}
    >
      <Form>
        {values.picture ? (
          <PreviewImages
            fileImage={values.picture}
            onRemoveImage={() => setFieldValue('picture', undefined)}
          />
        ) : (
          <Dropzone
            title='Drag or click to select file'
            description='Image file should not exceed 5MB'
            maxSize={5 * 1024 ** 2} //5MB
            multiple={false}
            onDrop={(file) => setFieldValue('picture', file)}
          />
        )}
        <Flex justify='end' mt='20px'>
          <Button type='submit' disabled={!values.picture}>
            Submit
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default EditProfilePicture;
