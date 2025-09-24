import Image from 'next/image'
import React from 'react'

const ProductImage = ({img}) => {
  return (
    <div>
      <Image
      src={img}
      height={167}
      width={152}
      alt='Productimage123'
      />
    </div>
  )
}

export default ProductImage
