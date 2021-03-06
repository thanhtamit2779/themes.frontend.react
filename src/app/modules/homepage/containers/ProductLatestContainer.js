import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';

import { fetch_product_latest } from './../actions/index';
import ProductLatestCarousel from './../components/ProductLatestCarousel';

class ProductLatestContainer extends Component {
    constructor(props) {
      super(props);
    }

    // FETCH API
    componentDidMount() {
      this.props.fetch_product_latest({
        total_record  : 12,
        post_status   : 'publish',
        type          : 'latest',
        resize        : 1,
        resize_width  : 270,
        resize_height  : 360,
      });
    }

    render() {
      let { items } = this.props;
      return (
        <ProductLatestCarousel items={ items } />
      )
    }
}
  
const mapStateToProps = (state, ownProps) => {
  return {
    items         : state.home_product_latest.items,
    notification  : state.home_product_latest.notification
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_product_latest : (data) => {
      dispatch(fetch_product_latest(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductLatestContainer);