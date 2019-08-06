import React, { Component } from 'react';
import Main from '../layouts/main';
import Slideshow from '../components/Slideshow';

class Home extends Component {
    render () {
        return (
            <Main>
                <div className="Home">
                    <h1>Get to Know Distortion 2 High</h1>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="https://s0.as-img.com/r/shop/distortion2high/623/620/crafting.jpg?bg=ffffff&u=1564450766"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Handcrafted in Italy</h3>
                            <p>
                            All custom shoes are handmade by master Italian craftsman from pristine Italian leather. Each designer pair is a one-of-a-kind, combining handcrafting tradition, quality and modern style for a product that’s perfectly Italian.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="row second">
                        <div className="col-sm-6">
                            <h3>Cutting-Edge Design</h3>
                            <p>
                            The hi-top mountain is a 130mm-high sneaker with fully embossed upper. This design gets inspiration by the traditional mountain 'pedula' with his special lace hooks. This model is a great mix between robust upper construction and light-boxed sole design.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <img src="https://s0.as-img.com/r/pic/distortion2high/1000/1000/top_bottom.jpg?u=1564450766&bg=f5f5f5"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="https://s0.as-img.com/r/box/distortion2high/1000/1000/horizontal.jpg?u=1564450766&bg=ffffff"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Collector’s Edition Packaging</h3>
                            <p>
                            Enjoy a completely custom and top-quality collector’s edition packaging featuring amazing print quality, handmade Italian construction and a solid magnetic clip. This design piece adds great value to an already exclusive pair of custom made shoes.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <h1>Gallery</h1>
                    <hr/>
                    <br/>
                    <Slideshow/>
                </div>
            </Main>
        );
    }
}

export default Home;