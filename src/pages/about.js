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
                        <h1 className="text-center">Savestoday About Us  </h1>
                        <p>
                            Welcome to the world of Savestoday! 

                        </p>
                        <p>
                            At Savestoday, we are dedicated to finding the best coupons, discount codes, and deals. We help you save money and make the most of your hard-earned cash. As a reputable online coupon and deals platform, we believe that everyone should have access to fantastic savings, regardless of what they are buying. Savestoday is the ultimate destination for daily savings! 
                        </p>
                        <h2>Our Company Background</h2>
                        <p>
                            Our story began when the founders of Savestoday recognized the growing need for a one-stop shop for the best coupons, discount codes, and deals across a wide range of products and services. We understand how challenging it may be for buyers to spend hours scouring the internet in search of valuable savings. That's why we created Savestoday, a user-friendly website where you can simply search and enjoy the best deals. 
                        </p>
                        <p>
                            Today, our team of deal hunters works tirelessly to search the web and collaborate with the top brands, retailers, and service providers. We are continually updating our huge coupon database so that you have access to the latest money-saving offers. Whether you're shopping for clothes, booking a flight, or ordering food from a restaurant, Savestoday offers unbeatable savings on all of your purchases. 
                        </p>
                        <h2>
                            What Sets Us Apart

                        </h2>
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
            </section>  
        </>
    );
}
