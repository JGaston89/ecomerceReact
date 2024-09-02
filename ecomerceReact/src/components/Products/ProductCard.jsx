import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
        <div>{/* Card section */}
        {
            data.map((data) => (
                <div>
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                </div>
            ))
        }
            <div>{/* image section */}</div>
        </div>
    </div>
  )
}

export default ProductCard