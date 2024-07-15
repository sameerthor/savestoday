import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function about({ stores }) {
    return (
        <>
            <NextSeo
                title="SavesToday - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            {/* ========privacy policy========= */}
            <section className="sitePolicy">
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <h1 class="text-center"> About SavesToday</h1>
                            <p>
                                Welcome to SavesToday, your go-to destination for the best deals and coupons. We believe everyone deserves to save money; therefore we have brought together all the amazing deals and coupons available on the web. On our platform, you will find great ways to grab incredible discounts on a broad range of products and services. Browse our website to discover the latest deals, promo codes, and discounts. 
                            </p>
                            <p>
                                Join us at SavesToday and start saving money today! 
                            <h1 class="text-center"> Savestoday About Us </h1>
                            <p>
                                Welcome to the world of Savestoday! 
                            </p>
                            <p>
                                At Savestoday, we are dedicated to finding the best coupons, discount codes, and deals. We help you save money and make the most of your hard-earned cash. As a reputable online coupon and deals platform, we believe that everyone should have access to fantastic savings, regardless of what they are buying. Savestoday is the ultimate destination for daily savings!  
                            </p>
                            <h2>
                                Our Company Background
                            </h2>
                            
                            <p>
                                Our mission is simple: to provide a user-friendly platform where you can discover exclusive coupons and offers from your favorite online stores. We aim to help our customers save money and make smart purchasing decisions. We understand that saving money is important to you in today’s economy, and that’s why we strive to provide the most up-to-date and exclusive deals on a wide range of products and services. SavesToday helps you score the best deals and discounts on electronics, fashion, travel, and anything in between.
                            </p>
                            <p>
                                Here’s how we achieve our mission:
                            </p>
                            <ul>
                                    <li>Our dedicated team finds and verifies the top deals, so you always have access to the best savings opportunities.
                                    </li>
                                    <li>We have designed our website with simplicity in mind. Finding the coupons you need is quick and easy.</li>
                                    <li>We offer deals and coupon codes across a vast range of categories. You can save on everything from groceries and clothing to travel and entertainment. 
                                    </li>
                            </ul>
                            <h2>Our Values </h2>
                            <h2>1. Customer-Centric Approach</h2>
                            <p>
                                Our commitment knows no bounds when it comes to providing our users with the most accurate deals. We hold a belief in simplicity and ease of use. Our site is designed with an intuitive interface where any individual can easily find discounts across various categories. By just a few clicks you are able to obtain either the promo codes or direct links to discounted products. Additionally, our customers form a valued community for whom we always provide exceptional customer service.
                            </p>
                            <h2>
                                2. Accuracy
                            </h2>
                            <p>
                                To find you the most valuable discounts, our dedicated team of bargain hunters browse the web. We handpick each coupon code and deal to make sure it is genuine. Before posting anything, we authenticate all deals which we have featured. Thus, whatever offer you will ever come across at SavesToday is genuine and can help you save money on your purchases.
                            </p>
                            <h2>
                                3. Privacy 
                            </h2>
                            <p>
                                What sets us apart is our commitment to protecting your privacy. We prioritize your data security and make sure that your personal information is never compromised. We do not use any tracking technologies that violate your privacy concern. SavesToday offers a completely safe browsing experience devoid of any kind of data collection. 
                            </p>
                            <h2>
                                How SavesToday Works
                            </h2>
                            <p>
                                    
                                SavesToday generates revenue through its partnerships with online retailers and brands. In case a user visits our site and uses a link to buy something or applies the coupon code, SavesToday receives an affiliate commission. With this model, SavesToday is capable of giving exclusive deals and discounts to users while at the same time making money to continue running its operations.

                            </p>
                            <p>
                                    It’s important to note that the commission earned by SavesToday does not affect the price of the products or services. The commission is solely based on the referral and does not impact the user’s shopping experience or the final amount they pay. 
                            </p>
                            <p>
                                Thank you for choosing SavesToday as your trusted source for all things coupons and deals!

                            Our story began when the founders of Savestoday recognized the growing need for a one-stop shop for the best coupons, discount codes, and deals across a wide range of products and services. We understand how challenging it may be for buyers to spend hours scouring the internet in search of valuable savings. That's why we created Savestoday, a user-friendly website where you can simply search and enjoy the best deals. 

                            </p>
                            <p>
                            Today, our team of deal hunters works tirelessly to search the web and collaborate with the top brands, retailers, and service providers. We are continually updating our huge coupon database so that you have access to the latest money-saving offers. Whether you're shopping for clothes, booking a flight, or ordering food from a restaurant, Savestoday offers unbeatable savings on all of your purchases. 

                            </p>
                           
                            <p>
                            One of the things that distinguishes Savestoday from the competition is our commitment to curation. We do not simply publish any coupon we find on our website. Instead, we check and validate each coupon to ensure it is worth your time. Additionally, our team brings the updated and verified coupon codes, so you can be assured that you’re getting the best savings possible. We are constantly seeking new ways to enhance your shopping experience by expanding our coupon selection. 

                            </p>
                            <p>
                                 We also pride ourselves on our user-friendly platform. We know how hard it can be to scroll through countless deal and coupon code pages. To make things simpler for you, we‘ve designed Savestoday to be intuitive and simple to use. Whether you're shopping on your desktop or your smartphone, you can easily grab the deals you're looking for. 
                            </p>
                            <p>
                                 Let's save some money! Join Savestoday now to start saving big on all of your favourite products and services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
