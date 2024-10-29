import Image from "next/image";
import "@/styles/blog.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function allBlogs({ stores }) {
    return (
        <>
            <NextSeo
                title="SavesToday - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            {/* ========All blogs========= */}
            <section className="blog-details-page">
                <div className="container">
                    <div className="row blogBox">
                        <div className="col-lg-9 pe-4 mb-4">
                            <div  id="blogCarousel" className="blogCarosel carousel slide mb-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/09/Myntra-upcoming-sales.jpg" className="d-block w-100" alt="myntra Sale"/>
                                    <div className="carousel-caption d-none d-md-flex">
                                        <a href="#">
                                            <p>Myntra Upcoming Sales 2024: Sale Dates, Offers, and Discounts!</p>
                                            <span>Read More +</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/09/Ajio-Upcoming-Sales.jpg" className="d-block w-100" alt="Ajio Sale"/>
                                    <div className="carousel-caption d-none d-md-flex">
                                        <a href="#">
                                            <p>Ajio Upcoming Sales 2024: Discover Expected Dates & Hottest Offers!</p>
                                            <span>Read More +</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/09/Amazon-Upcoming-Sale.jpg" className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-flex">
                                        <a href="#">
                                            <p>Amazon Upcoming Sale 2024: Expected Sale Dates & Best Deals!</p>
                                            <span>Read More +</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/09/Nykaa-sale.jpg" className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-flex">
                                        <a href="#">
                                            <p>Nykaa Upcoming Sales 2024: Next Sale Dates, Deals, and Offers!</p>
                                            <span>Read More +</span>
                                        </a>
                                    </div>
                                </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            {/* Related Article  */}
                            <div className="retatedArticle">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/Best-Gaming-Headphones-Under-2000.jpg" alt=""/>   
                                            <h4>8 Best Gaming Headphones Under 2000: Get Game-Ready on Budget!</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2023/08/Best-TVs-in-India.jpg" alt=""/>   
                                            <h4>10 Best Soundbars Under 15000 in India for Epic Home Audio</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/best-soundbars-under-15000.jpg" alt=""/>   
                                            <h4>8 Best Sony Headphones in India: Choose Your Sound Style!</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2023/08/Best-TVs-in-India.jpg" alt=""/>   
                                            <h4>10 Best Soundbars Under 15000 in India for Epic Home Audio</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/best-soundbars-under-15000.jpg" alt=""/>   
                                            <h4>8 Best Sony Headphones in India: Choose Your Sound Style!</h4>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <a className="articleSnippet" href="#">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/Best-Gaming-Headphones-Under-2000.jpg" alt=""/>   
                                            <h4>8 Best Gaming Headphones Under 2000: Get Game-Ready on Budget!</h4>
                                        </a>
                                    </div>
                                    <div className="blogPagination">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                                        </a>
                                        <a href="#" className="active">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">...</a>
                                        <a href="#">10</a>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================  */}
                        <div className="col-lg-3 p-0">
                            <aside className="sidebar">
                                <div className="searchBlog mb-3 d-none d-lg-block">
                                    <div className="searchBox ms-auto">
                                        <form action="#noWhere" style= {{width: '300px'}}>
                                            <input type="search" searchmode="search" className="form-control" placeholder="Search blog"/>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebarFeaturedImg">
                                    <a href="#">
                                        <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/07/axis-flipkart-credit-card-350x350.png" alt="featuredImg"/>
                                    </a>
                                </div>
                                <div className="recentPost mb-5">
                                    <h4 className="sidebarHeading">Also Read</h4>
                                    <a href="/" className="recentLink">
                                        <div className="featureImg">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/Best-Headphones-Under-10000-in-India-100x53.jpg" width="100" alt="blog-imgage" title="Feture-Image"/>
                                        </div>
                                        <div>
                                            <h2 className="recentTitle">8 Best Gaming Headphones Under 2000: Get Game-Ready on Budget!</h2>
                                        </div>
                                    </a>
                                    <a href="/" className="recentLink">
                                        <div className="featureImg">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/Best-Gaming-Headphones-Under-2000-100x53.jpg" width="100" alt="blog-imgage" title="Feture-Image"/>
                                        </div>
                                        <div>
                                            <h2 className="recentTitle">10 Best Soundbars Under 15000 in India for Epic Home Audio</h2>
                                        </div>
                                    </a>
                                    <a href="/" className="recentLink">
                                        <div className="featureImg">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/10/best-soundbars-under-15000-100x53.jpg" width="100" alt="blog-imgage" title="Feture-Image"/>
                                        </div>
                                        <div>
                                            <h2 className="recentTitle">Tune into Perfection With Best Headphones Under 10000 in India</h2>
                                        </div>
                                    </a>
                                    <a href="/" className="recentLink">
                                        <div className="featureImg">
                                            <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/06/Water-Heater.jpg" width="100" alt="blog-imgage" title="Feture-Image"/>
                                        </div>
                                        <div>
                                            <h2 className="recentTitle">8 Best Sony Headphones in India: Choose Your Sound Style!</h2>
                                        </div>
                                    </a>

                                </div>
                                <div className="recentPost bestCoupons">
                                    <h4 className="sidebarHeading">Best Coupon Codes</h4>
                                    <a href="/" className="recentLink">
                                        Amazon Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Flipkart Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Mamaearth Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Myntra Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Booking.com Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Ajio Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Tata 1mg Coupon Codes
                                    </a>
                                    <a href="/" className="recentLink">
                                        Minimalist Coupon Codes
                                    </a>
                                
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
