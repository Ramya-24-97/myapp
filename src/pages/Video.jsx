import React from 'react';
import { Container } from 'react-bootstrap';

function Video() {
    return (
        <div>
            <section className='video-section padding-t-120 padding-b-120 bg-dark-theme'>
                <Container>
                    <div className="head-txt text-center">
                        <h2>What Our Clients Have to Say About Us</h2>
                        <p>We are grateful for our clients’ trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us:</p>
                    </div>
                    <div className="glider-contain client-testimonial-slider">
                        <div className="glider draggable">
                            <div className="glider-track ">
                                <div className="client-videos shadow-box glider-slide left-5" id="cvbox-1" data-gslide="0" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player display:none;" id="ytiframe-1" src='https://www.youtube.com/embed/d78gD-wwVTg?autoplay=1?rel=0' ></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(1, 'https://www.youtube.com/embed/d78gD-wwVTg?autoplay=1?rel=0', this)">
                                            <picture>
                                        <source type='image/png' srcSet="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-2.webp"></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-2.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>Working with ValueCoders has been a rewarding experience. Their software solutions are a perfect blend of innovation and functionality.</p>
                                        <i className="star-rating"></i>
                                        <h3>James Kelly</h3>
                                        <span className="detail">Co-founder, Miracle Choice</span>
                                    </div>
                                </div><div className="client-videos shadow-box glider-slide left-4 " id="cvbox-2" data-gslide="1" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player " id="ytiframe-2" src='https://www.youtube.com/embed/e7nbilPZzBE?autoplay=1'></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(2, 'https://www.youtube.com/embed/e7nbilPZzBE?autoplay=1', this)">
                                            <picture><source type="image/png" srcset="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-3.webp"></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-3.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>ValueCoders provided us with a robust and scalable software solution. Their team's proficiency is commendable.</p>
                                        <i className="star-rating"></i>
                                        <h3>Judith Mueller</h3>
                                        <span className="detail">Executive Director, Mueller Health Foundation</span>
                                    </div>
                                </div>
                                <div className="client-videos shadow-box glider-slide left-3 " id="cvbox-3" data-gslide="2" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player " id="ytiframe-3" src='https://www.youtube.com/embed/W7Bxt2Up0NQ?autoplay=1'></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(3, 'https://www.youtube.com/embed/W7Bxt2Up0NQ?autoplay=1', this)">
                                            <picture><source type='image/png' srcset='"https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-7.webp'></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-7.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>ValueCoders delivered a software solution that perfectly aligns with our business needs. They've been instrumental in our project's success.</p>
                                        <i className="star-rating"></i>
                                        <h3>Kris Bruynson</h3>
                                        <span className="detail">Director, Storloft</span>
                                    </div>
                                </div><div className="client-videos shadow-box glider-slide left-2 " id="cvbox-4" data-gslide="3" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player " id="ytiframe-4" src='https://www.youtube.com/embed/aErqOtvMClY?autoplay=1' ></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(4, 'https://www.youtube.com/embed/aErqOtvMClY?autoplay=1', this)">
                                            <picture><source type="image/png" srcset="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-1.webp"></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/02/client-video-1.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>ValueCoders' commitment to delivering high-quality software solutions has made them our go-to partner for all our software needs.</p>
                                        <i className="star-rating"></i>
                                        <h3>Mohammed Mirza</h3>
                                        <span className="detail">Director, LOCALMASTERCHEFS LTD</span>
                                    </div>
                                </div><div className="client-videos shadow-box glider-slide left-1" id="cvbox-5" data-gslide="4" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player " id="ytiframe-5" src='https://www.youtube.com/embed/QCIMuRQkfKU?autoplay=1'></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(5, 'https://www.youtube.com/embed/QCIMuRQkfKU?autoplay=1', this)">
                                            <picture><source type="image/png" srcset="https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-8.webp"></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-8.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>Working with ValueCoders has been a rewarding experience. Their team's expertise is impressive.</p>
                                        <i className="star-rating"></i>
                                        <h3>Mr.Savarni</h3>
                                        <span className="detail">Founder- sbspco.com</span>
                                    </div>
                                </div><div className="client-videos shadow-box glider-slide active center visible " id="cvbox-6" data-gslide="5" >
                                    <div className="client-video-box">
                                        <iframe className="yt-player " id="ytiframe-6" src='https://www.youtube.com/embed/oVbfGyMPq50?autoplay=1' ></iframe>
                                        <a className="frame-mask" href="javascript:void(0);" onclick="playTetiVideo(6, 'https://www.youtube.com/embed/oVbfGyMPq50?autoplay=1', this)">
                                            <picture><source type="image/png" srcset="https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-5.webp"></source>
                                                <img loading="lazy" src="https://www.valuecoders.com/wp-content/uploads/2022/05/client-video-5.webp" alt="Valuecoders" width="351" height="175">
                                                </img></picture>
                                        </a>
                                    </div>
                                    <div className="client-description bg-white">
                                        <p>ValueCoders' innovative approach to software engineering has significantly improved our business operations.</p>
                                        <i className="star-rating"></i>
                                        <h3>Jame Thompson</h3>
                                        <span className="detail">edinstitute.com.au</span>
                                    </div>
                                </div></div></div>
                        <button aria-label="Previous" className="glider-prev vlazy"></button>
                        <button aria-label="Next" className="glider-next vlazy"></button>
                        <div role="tablist" className="dots glider-dots">
                        <button data-index="0" aria-label="Page 1" role="tab" className="glider-dot"></button>
                        <button data-index="1" aria-label="Page 2" role="tab" className="glider-dot"></button> 
                       <button data-index="2" aria-label="Page 3" role="tab" className="glider-dot active"></button> 
                       <button data-index="3" aria-label="Page 4" role="tab" className="glider-dot"></button> 
                       <button data-index="4" aria-label="Page 5" role="tab" className="glider-dot"></button> 
                       <button data-index="5" aria-label="Page 6" role="tab" className="glider-dot"></button>
                       </div>
                    </div>

                </Container>
            </section>
        </div>
    )
}

export default Video;