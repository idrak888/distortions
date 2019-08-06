import React from 'react';

const Slideshow = props => {
    return (
        <div className="Slideshow">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active">
                    <img src="https://s0.as-img.com/r/pic/981428/1500/1500/with_box.jpg?bg=f5f5f5&u=1564450766" alt="Los Angeles"/>
                    </div>

                    <div class="item">
                    <img src="https://s0.as-img.com/r/pic/981428/1500/1500/side.jpg?bg=f5f5f5&u=1564450766" alt="Chicago"/>
                    </div>

                    <div class="item">
                    <img src="https://s0.as-img.com/r/pic/981428/1500/1500/double_quarter.jpg?bg=f5f5f5&u=1564450766" alt="New York"/>
                    </div>

                    <div className="item">
                    <img src="https://s0.as-img.com/r/pic/981428/1500/1500/top_bottom.jpg?bg=f5f5f5&u=1564450766"/>
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )   
}

export default Slideshow;