import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ul>
  );
};
