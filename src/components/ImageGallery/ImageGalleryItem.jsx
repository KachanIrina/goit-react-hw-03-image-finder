import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <li onClick={this.handleToggleModal} className={css.imageGalleryItem}>
          <img
            src={webformatURL}
            alt="img"
            className={css.ImageGalleryItemImage}
          />
        </li>
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal} largeImg={largeImageURL} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    id: propTypes.number.isRequired,
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};
