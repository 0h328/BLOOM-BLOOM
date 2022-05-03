import React from 'react';
import Image from 'next/image';

interface MakingFlowerImageProps {
  makingFlowerImg: string;
}

function MakingFlowerImage({ makingFlowerImg }: MakingFlowerImageProps) {


  return (
    <Image
      id="img"
      src={makingFlowerImg}
      alt="꽃다발"
      width={360}
      height={450}
    ></Image>
  )
}

export default MakingFlowerImage;