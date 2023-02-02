import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }
  onCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { largeImg, onClose } = this.props;
    return (
      <div className={css.Overlay} onClick={onClose}>
        <div className={css.Modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}
