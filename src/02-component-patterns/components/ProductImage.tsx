import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }: { img?: string}) => {

  const { product } = useContext( ProductContext );
  
  return (
    <img className={styles.productImg} src={ ( img ? img : product.img )|| noImage } alt="Product Image" />
  );
};
  