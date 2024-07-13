import Link from "next/link";


export default function Footer() {


    return (
        <>
            <footer className="footer">
                <div className="container p-4">
                    <div className="row text-md-start mt-5">
                        <div className="col-lg-3 col-md-6 mb-3 footerColumn">
                            <a href="/" className="footerLogo pb-2" title="anddeals.com">
                                Saves<span>Today</span>
                            </a>
                            <p className="aboutUs">
                                {" "}
                                Explore exclusive discounts and deals at SavesToday.com, where you can find incredible savings on a wide range of products and services. From electronics and Google products to home goods and more, we offer unbeatable value on top offers. Shop smarter and save more with our curated selection, ensuring you get the best deals every time you visit.
                            </p>
                            <div className="footerSocialLinks">
                                <a href="#" title="Visit our Facebook Page">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width={20}
                                        height={20}
                                        fill="#1877F2"
                                    >
                                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                    </svg>
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=+91 9511104026&text=share me daily coupons, deals and discounts" title="Subscribe our WhatsApp">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width={20}
                                        height={20}
                                        fill="#25D366"
                                    >
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                </a>
                                <a href="#" title="Visit our Twitter X Profile">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width={20}
                                        height={20}
                                        fill="#000"
                                    >
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </a>
                                <a href="#" title="Join our telegram Channel">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="#0088cc"
                                        className="bi bi-telegram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 footerColumn">
                            <span className="pb-3 columnHeading"> Quick links </span>
                            <ul className="list-style">
                                <li className="pb-3">
                                    <a href="/">Home</a>
                                </li>
                                <li className="pb-3">
                                    <a href="category">categories</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/stores">Store</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 footerColumn">
                            <span className="pb-3 columnHeading">Help &amp; Support </span>
                            <ul className="list-style">
                                <li className="pb-3">
                                    <a href="/contact-us">Contact Us</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/faqs">FAQs</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/about">about andDeals</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3 footerColumn">
                            <span className="pb-3 columnHeading"> Legal </span>
                            <ul className="list-style">
                                <li className="pb-3">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                                <li className="pb-3">
                                    <a href="terms-of-use">Terms of Use</a>
                                </li>
                                <li className="pb-3">
                                    <a href="cookie-policy">Cookie Policy</a>
                                </li>
                                <li className="pb-3">
                                    <a href="terms-of-use">Terms of use</a>
                                </li>
                            </ul>
                        </div>
                        {/*Other end*/}
                    </div>
                    <div className="row copyRightText">
                        <p className="lovetext">
                            © 2024 <a href="/" title="savestoday.com">savesToday.com</a> Made in London with love ❤️.
                            andDeals is operated by andDeals IT Desk a company registered in the
                            United Kingdom. Company No: XYZABC123. ICO: GFDG2323.
                        </p>
                        <p className="amznAffi">
                            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
                            affiliates. <a href="#" title="visit affiliate disclouser">Learn More</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )

}
