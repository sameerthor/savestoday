import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function faqs({ stores }) {
    return (
        <>
            <NextSeo
                title="SavesToday - Free Verified Coupons, Discount Codes, & Deals"
                description="Find the latest coupons and promo codes for your favorite stores. Our constantly updated discount codes and deals help you get instant savings. We have top stores, exclusive discounts, and verified codes for all your shopping needs!"
            />
            {/* ========privacy policy========= */}
            {/* <section className="sitePolicy">
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <h1 class="text-center">Savestoday Coupon Code FAQs</h1>
                            <h2>What Are Coupon Codes?</h2>
                            <p>
                                A coupon code is a combination of letters and/or numbers that can be redeemed during checkout to avail a discount or any other special offer. These codes provide discounts on products, free shipping, or other special offers that attract customers to buy. Remember, coupons can vary in terms of the discount they offer, the products they apply to, and the time for which they are valid.
                            </p>
                            <p>
                                The discounts offered can vary widely, from a percentage off the total purchase price to a fixed dollar amount discount. Another interesting fact is that coupon codes give you free shipping or other benefits. Retailers use them to promote their products, boost sales, attract new customers, or reward loyal shoppers.
                            </p>
                            <p>
                                These coupon codes make a significant difference in the final cost of your order, so it's worth applying the available coupons before completing your final payment. Using discount codes is a smart way to save more and get the best deals while shopping online.
                            </p>
                            <h2>How Do I Use A Discount Code?</h2>
                            <p>
                                When you have a valid discount code you want to use, simply add the products you want to your shopping cart on the store's site. Look for the field or box at the time of the checkout where you can enter the code. Once applied, the discount or offer associated with the code will be automatically applied to your order. This will reduce the total amount you need to pay.
                            </p>
                            <p>
                                It's important to note that discount codes may have certain rules. Some coupons need a minimum buy, or have limits on items or brands, or an expiration date when they end. Read the terms and conditions beforehand so you can use them right and get the best deals.
                            </p>
                            <h2>Where Can I Find Coupon Codes On Savestoday?</h2>
                            <p>
                                Finding coupons on Savestoday is very simple! Savestoday categorizes discounts and deals to help you maximize savings. To find available offers, explore by category, brand, or shop. To view the current offers, browse to the appropriate category (e.g., Electronics, Fashion, Travel) or brand website. You may also search for specific stores to see what coupons are available. On our homepage, we also feature trending bargains and coupon codes.
                            </p>
                            <h2>Can I Use Multiple Promo Codes On The Same Order?</h2>
                            <p>
                                The ability to use multiple promo codes on a single order can vary by retailer. Some stores usually allow the use of one promotional code per order. When you attempt to use multiple codes on a single order, it may result in the invalidation of the code. So it's essential to read the terms and conditions carefully. Also, it’s recommended to check the retailer’s coupon policy or terms and conditions to understand their specific rules.
                            </p>
                            <h2>Do Coupon Codes Have An Expiration Date?</h2>
                            <p>
                                Yes, most of the time coupon codes come with an expiration date. The expiry date is the last day the code can be used to receive the discount or offer. If a code has expired, it will no longer work when entered during the checkout process, and the associated discount will not be applied to your purchase. So, it’s essential to check the expiration date and use the coupon before it expires so that the discount is applied correctly.
                            </p>
                            <h2>What Should I Do If A Coupon Doesn’t Work?</h2>
                            <p>
                                There are a few troubleshooting steps you can take if a code isn’t working correctly:
                            </p>
                            <ul>
                                <li>Double-check that you have entered the offer code correctly.</li>
                                <li>Read the fine print to verify that the code hasn't expired.</li>
                                <li>Check the code is valid for the specific items in your cart or the minimum purchase amount.</li>
                                <li>Get in touch with the retailer’s customer service if you continue to have issues with the code.</li>
                            </ul>
                            <h2>What Type Of Coupons Can I Find On Savestoday?</h2>
                            <p>
                                Savestoday offers a variety of top coupons and deals across a wide range of categories. You can find percentage discounts, fixed-dollar amounts off, free shipping codes, buy one get one (BOGO) deals, and more. Our platform features coupons and deals for clothing & accessories, electronics, hotels, or even outdoor experiences. Here, you’ll get the best deals and offers on almost everything including home decor, furniture, pet supplies, sports & fitness, and everyday essentials.
                            </p>
                            <h2>Is There A Fee To Use Savestoday?</h2>
                            <p>
                                Savestoday is completely free to use. We make money through affiliate commissions. When you click a link from Savestoday to a store’s website and make a purchase, Savestoday earns a commission. This affiliate commission structure of Savestoday helps you find the best deals and coupons free of cost.
                            </p>
                            <h2>Can I Get A Refund If I Use A Promo Code?</h2>
                            <p>
                                The ability to get a refund when a promo code has been used can vary by retailer. Some stores may allow you to receive a refund for the full amount, while others may only refund the discounted price after the code has been applied. We recommend you check the retailer’s return & refund policies before making a purchase.
                            </p>
                            <h2>What If I Have A Question About A Discount Code?</h2>
                            <p>
                                If you are unsure about a code’s validity or have trouble using it, get in touch with the store directly. Savestoday also has a helpful customer service team who might be able to assist you.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}
