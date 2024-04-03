/* eslint-disable jsx-a11y/alt-text */
import {
  ActionIcon,
  Box,
  Image as MantineImage,
  Stack,
  rem,
} from '@mantine/core';
import React, { FC, useMemo } from 'react';
import { BiX } from 'react-icons/bi';

interface PreviewImagesProps {
  fileImages?: File[];
  fileImage?: File | any;
  disabled?: boolean;
  onRemoveImage: (index?: number) => void;
}

interface ImageProps {
  onRemoveImage: () => void;
  source: string;
  disabled: boolean;
}

const Image: FC<ImageProps> = ({ onRemoveImage, source, disabled }) => {
  return (
    <Box
      pos='relative'
      style={{ border: '1px solid #C7CED4', borderRadius: rem(6) }}
      w='100%'
      h={rem(254)}
    >
      <Box pos='absolute' top={rem(8)} right={rem(8)}>
        <ActionIcon onClick={onRemoveImage} disabled={disabled}>
          <BiX style={{ width: rem(30), height: rem(30) }} />
        </ActionIcon>
      </Box>
      <MantineImage
        src={source}
        alt={`previews-image-${source}`}
        style={{ borderRadius: rem(6) }}
        w='100%'
        h='100%'
        fit='cover'
      />
    </Box>
  );
};

export const PreviewImages: FC<PreviewImagesProps> = ({
  fileImages,
  fileImage,
  disabled = false,
  onRemoveImage,
}) => {
  const imageResults = useMemo(() => {
    if (fileImages) {
      return fileImages.map((image) => URL.createObjectURL(image));
    }
  }, [fileImages]);

  const imageResult = useMemo(() => {
    if (fileImage) {
      if (typeof fileImage === 'string') {
        return fileImage;
      }

      return URL.createObjectURL(fileImage[0]);
    }
  }, [fileImage]);

  return (
    <Box w='100%'>
      <Stack>
        {imageResults?.map((image, index) => (
          <Image
            key={index}
            source={image}
            disabled={disabled}
            onRemoveImage={() => onRemoveImage(index)}
          />
        ))}
      </Stack>
      {imageResult && (
        <Image
          source={imageResult}
          disabled={disabled}
          onRemoveImage={() => onRemoveImage()}
        />
      )}
    </Box>
  );
};
