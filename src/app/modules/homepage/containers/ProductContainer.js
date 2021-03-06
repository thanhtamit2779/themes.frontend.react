import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

import ProductFeaturedContainer from './ProductFeaturedContainer';
import ProductLatestContainer from './ProductLatestContainer';
import ProductViewedContainer from './ProductViewedContainer';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="bgwhite p-t-40 p-b-40">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME MỚI NHẤT
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-latest owl-theme">
                                <ProductLatestContainer/>
                            </div>
                        </div>
                        <div className="text-center block-view-all"><NavLink to="/san-pham/moi-nhat" className="text-view-all">Xem tất cả</NavLink></div>
                    </div>
                </section>
                <section className="bgwhite p-t-40 p-b-40">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME NỔI BẬT
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-featured owl-theme">
                                <ProductFeaturedContainer/>
                            </div>
                        </div>
                        <div className="text-center block-view-all"><NavLink to="/san-pham/noi-bat" className="text-view-all">Xem tất cả</NavLink></div>
                    </div>
                </section>
                <section className="bgwhite p-t-40 p-b-105">
                    <div className="container">
                        <div className="sec-title p-b-22">
                            <h3 className="m-text5 t-center">
                                THEME XEM NHIỀU
                            </h3>
                        </div>
                        <div className="sec-content">
                            <div className="owl-stage owl-carousel owl-carousel-viewed owl-theme">
                                <ProductViewedContainer/>
                            </div>                                   
                        </div>
                        <div className="text-center block-view-all"><NavLink to="/san-pham/xem-nhieu" className="text-view-all">Xem tất cả</NavLink></div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ProductContainer;
