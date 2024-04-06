import { Box, Flex, Group, Text, rem } from '@mantine/core';
import {
  FileRejection,
  FileWithPath,
  Dropzone as MantineDropzone,
  DropzoneProps as MantineDropzoneProps,
} from '@mantine/dropzone';
import { BiImage, BiUpload, BiX } from 'react-icons/bi';
import '@mantine/dropzone/styles.css';
import { FC } from 'react';

interface DropzoneProps extends Partial<MantineDropzoneProps> {
  onDrop: (files: FileWithPath[]) => void;
  onReject?: (fileRejections: FileRejection[]) => void;
  title: string;
  description: string;
  error?: string;
}

export const Dropzone: FC<DropzoneProps> = ({
  onDrop,
  onReject,
  title,
  description,
  error,
  ...props
}) => {
  return (
    <>
      <MantineDropzone
        onDrop={onDrop}
        onReject={onReject}
        {...props}
        style={error ? { border: '1px dashed red' } : undefined}
      >
        <Group
          justify='center'
          gap='xl'
          mih={220}
          style={{ pointerEvents: 'none' }}
        >
          <MantineDropzone.Accept>
            <BiUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-dimmed)',
              }}
            />
          </MantineDropzone.Accept>
          <MantineDropzone.Reject>
            <BiX
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-dimmed)',
              }}
            />
          </MantineDropzone.Reject>
          <MantineDropzone.Idle>
            <BiImage
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-dimmed)',
              }}
            />
          </MantineDropzone.Idle>

          <Box component='div'>
            <Text size='xl' inline>
              {title}
            </Text>
            <Text size='sm' c='dimmed' inline mt={7}>
              {description}
            </Text>
          </Box>
        </Group>
      </MantineDropzone>
      {error && (
        <Flex direction='column' mt='7px' gap='2px'>
          <Text fz='sm' c='red'>
            {error}
          </Text>
        </Flex>
      )}
    </>
  );
};
