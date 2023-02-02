import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImages } from 'service/fetchImages';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    total: 0,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page)
      fetchImages(query, page)
        .then(resp => {
          if (resp.hits.lenght === 0) {
            return alert("oops, there's nothing here");
          }
          this.setState(prevState => ({
            images:
              page === 1 ? [...resp.hits] : [...prevState.images, ...resp.hits],
            total: resp.totalHits,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
  }

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading: true }));
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [], isLoading: true });
  };

  renderButtonOrLoader = () => {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      this.state.images.length !== 0 &&
        this.state.images.length < this.state.total && (
          <Button onClick={this.handleLoadMore} />
        )
    );
  };

  render() {
    return (
      <div
        style={{
          paddingBottom: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#22232B',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.renderButtonOrLoader()}
      </div>
    );
  }
}
