import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function cookiePolicy({ stores }) {
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
            <h1 class="text-center">Savestoday Cookie Policy</h1>
            <p>
                At Savestoday, we take your privacy seriously. This cookie policy explains how we use cookies and similar technologies to enhance your browsing experience on our website. It allows you to understand how cookies are used and how you can manage your preferences.
            </p>
            <h2>What Are Cookies?</h2>
            <p>
                Cookies are small data files that are stored on your device (computer, phone, tablet) by a website when you visit it. They include an anonymous unique identifier and allow the site’s or service provider’s systems to recognize your web browser and remember certain information. 
            </p>
            <h2>How We Use Cookies</h2>
            <p>
                We use cookies to track site traffic and integration, understand and store your preferences for future visits, and enhance the user experience on our site. Certain cookies are necessary for the website to function properly and allow you to access its features. We use cookies to analyze how you use Savestoday, helping us improve its performance and usability. Cookies can help you remember your preferences and tailor your Savestoday experience. Additionally, cookies can remember your past visits and simplify processes like logging in.
            </p>
            <h2>Managing Cookies</h2>
            <p>You may manage cookies through your web browser settings. This may include:</p>
            <ol>
                <li> Disabling cookies entirely.</li>
                <li>Choose which cookies to allow.</li>
                <li>Delete cookies after each session.</li>
            </ol>
            <p>
                Please be aware that deactivating cookies may limit your functionality on Savestoday.
            </p>
            <h2>Consent To Use Cookies</h2>
            <p>
                By using the Savestoday website, you consent to our use of cookies in accordance with our policy.
            </p>
            <h2>Changes to the Cookie Policy</h2>
            <p>
                Savestoday reserves the right to revise this cookie policy at any time. Your continued use of our website after any changes to this cookie policy constitutes your acceptance of the modified policy. We will notify you of any significant changes by posting the new policy on Savestoday.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions about this policy, please get in touch with us acceptance <a href="/contact-us"> https://savestoday.com/contact-us.</a>
            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}
