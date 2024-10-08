import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function privacyPolicy({ stores }) {
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
                            <h1 className="text-center">Savestoday Privacy Policy</h1>
                            <p>
                                At Savestoday, we take your privacy very seriously. We understand how important it is to protect your personal information, and we are committed to being transparent about how we collect, use, and safeguard your data. This privacy policy explains our practices when it comes to the information we gather through our website. It covers what type of data we collect, how we use it, and the steps we take to keep it secure.

                            </p>
                            <h2>
                                Information We Collect

                            </h2>
                            <p>
                                When you interact with Savestoday, we collect two main types of information from our users: personal information and non-personal information.
                            </p>
                            <p>
                                Personal information refers to data that can be used to identify you as an individual, including your name, email address, and payment information. We only collect your personal information when you voluntarily provide it to us such as when you create an account, make a purchase, or sign up for our newsletter.
                            </p>
                            <p>
                                Non-personal information includes data that cannot be used to identify you specifically, like your IP address, browser type, device information, and location. We may collect this type of information automatically when you interact with our platform, use our cookies, or engage with our content.
                            </p>
                            <h2>
                                How We Use Your Information
                            </h2>
                            <p>
                                The information we collect is used to provide you with the best possible experience on Savestoday. This includes:
                            </p>
                            <ul>
                                <li>Fulfilling orders and processing payments.</li>
                                <li>Personalizing your experience and providing customized offers. </li>
                                <li>Communication with you about your account, orders, and other important updates.</li>
                                <li>Improving and enhancing our platforms, products, and services</li>
                                <li>Analyzing usage trends and user behavior.</li>
                                <li>Preventing fraud and ensuring the security of our systems. </li>
                            </ul>
                            <p>
                                We may also use your information for marketing purposes, such as sending your promotional emails, push notifications, or targeted ads. However, you can always opt out of these communications if you prefer. If you do not accept our policies, please don’t register, subscribe, create an account, or interact with the Savestoday services.
                            </p>
                            <h2>Information Sharing and Disclosure</h2>
                            <p>
                                We do not sell or rent your personal information to third parties to analyze user behavior and improve our services. We only share the minimum amount of information necessary and protect your data with care. However, these third parties are required to maintain the confidentiality of your information and are not allowed to use it for any other purpose. 

                            </p>
                            <h2>Data Security</h2>
                            <p>
                                Protecting your data is of the utmost importance to us. We employ various security measures to safeguard your personal data against unauthorized access, disclosure, alteration, or any other threat. 
                            </p>
                            <p>
                                Some of the specific steps we take include:

                            </p>
                            <ol>
                                <li>Encrypting your data during transmission and storage using secure socket layer (SSL) technology. </li>
                                <li>Regularly monitoring our systems for potential vulnerabilities or breaches.</li>
                                <li> Restricting access to your personal information on a “need to know” basis.</li>
                                <li>Providing security and privacy training to our employees. </li>
                            </ol>
                            <p>
                                While we strive to keep your data secure, we encourage you to also take precautions to protect your information, such as using strong passwords and being cautious of phishing scams.
                            </p>
                            <h2>
                                Your Rights and Choices
                            </h2>
                            <p>We believe you should have control over your personal information. That’s why we provide you with the following rights and choices:</p>
                            <ol>
                                <li>Access, correct, or delete your account information. </li>
                                <li> Opt out of marketing communications or targeted advertising. </li>
                                <li> Download a copy of the data we have collected about you.</li>
                                <li>Restrict certain types of data processing.</li>
                            </ol>
                            <p>
                                To exercise these rights, you can simply reach out to our privacy team and they will respond to your request as quickly as possible.
                            </p>
                            <h2>Children's Privacy</h2>
                            <p>
                                Savestoday is not intended for children under the age of 13. We do not knowingly personal information from minors. Accessing our website means you confirm you’re 13 or older, and understand the age needed for creating an account and online purchasing. If we discover that a child has provided us with personal data, we will delete it immediately. 
                            </p>
                            <h2>Updates to this Policy</h2>
                            <p>
                                If needed, Savestoday may update this privacy policy from time to time to reflect changes in our practices, technology, or legal requirements. We encourage you to read this policy periodically for the latest information on our privacy practices. If we make any changes, we will notify you by email or by posting a notice on our website prior to the changes taking effect. 
                            </p>
                            <h2>Contact Us</h2>
                            <p>
                                If you have any questions, concerns, or complaints about our privacy policy, the practices of Savestoday, or your dealings with our website, please contact us at <a href="/contact-us">https://savestoday.com/contact-us/</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
