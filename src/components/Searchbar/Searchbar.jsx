import { Component } from 'react';
import css from './Searchbar.module.css';
import propTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  hendlChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('');
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            name="query"
            value={query}
            onChange={this.hendlChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
