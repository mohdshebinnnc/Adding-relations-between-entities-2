// import React from 'react'
import PropTypes from "prop-types"
import RatingWidget from './RatingWidget';
import './ProductCard.css';


const ProductCard = ({product,onRatingSubmit}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="rating">⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</p>
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onRatingSubmit: PropTypes.func.isRequired,
  };

export default ProductCard
