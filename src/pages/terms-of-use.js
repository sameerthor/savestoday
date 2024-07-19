import Image from "next/image";
import "@/styles/site-policy.css";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Router from "next/router";
export default function termsOfUse({ stores }) {
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
                            <h1 class="text-center">Savestoday Terms Of Use</h1>
                            <p>
                                Welcome to Savestoday! These Terms of Use establish the guidelines for using our services and accessing our website. By using our site, you agree to be bound by these terms to ensure a smooth and secure experience for all our users. We advise you to read the instructions outlined “Terms of Use'' as they hold vital information regarding your legal rights and responsibilities.
                            </p>
                            <h2>1. Use Of Services</h2>
                            <p>
                                By using the Savestoday website, you acknowledge that you have read, understand, and agree to comply with these terms of use (“Terms”). If you do not agree with any of these Terms of Use, you are not authorized to use our services. You may use our website Savestoday.com to browse, obtain, and redeem coupons and deals offered by various merchants.
                            </p>
                            <h2>2. Validity of Coupon, Discount Codes, and Deals</h2>
                            <p>
                                We strive to do our best to ensure all coupon codes and offers listed on Savestoday are the latest and valid, but we cannot check each one. Therefore it is your responsibility to check that the expected discount has been applied when you enter the code at checkout on the merchant’s website.
                            </p>
                            <h2>3. User Conduct</h2>
                            <p>
                                You agree to use the services only for lawful purposes and in accordance with these terms. You also agree to not be involved in any activity that interferes with or disrupts our website or services. You may not:
                            </p>
                            <ul>
                                <li>Use the services to violate any laws or regulations.</li>
                                <li>Infringe on the intellectual property of rights of others.</li>
                                <li>Manipulate or disrupt the platform's security.</li>
                                <li>Send any malicious programs, viruses, or other files.</li>
                                <li>Scrape or extract data from the platform without prior consent.</li>
                                <li>Create or spread false or misleading content on the platform.</li>
                                <li>Violate another user's right to privacy.</li>
                            </ul>
                            <h2>4. Intellectual Property Rights</h2>
                            <p>
                                The content, trademark, logos, and other intellectual property on the Savestoday website are the property of Savestoday. You may not use the services for any commercial purposes without prior written permission.
                            </p>
                            <h2>5. Third-Party Links</h2>
                            <p>
                                Savestoday contains links to third-party websites or services that are managed and controlled by others. We aren't responsible for any content or practices connected with these third-party websites.
                            </p>
                            <h2>
                                6. Disclaimer Of Warranties
                            </h2>
                            <p>
                                Savestoday provides its services on an “as is'' and “as available” basis. We do not make any warranties regarding the availability, reliability, or accuracy of our website or the coupons and deals provided. Savestoday does not warrant that the services will be uninterrupted, secure, or error-free. Additionally, we make no guarantees regarding the accuracy or reliability of the results that can be received by using the services.
                            </p>
                            <h2>7. Limitation Of Liability</h2>
                            <p>
                                In no circumstances shall Savestoday be liable for any indirect, incidental, or consequential damages arising out of or related to your use of the services.
                            </p>
                            <h2>8. Governing Law</h2>
                            <p>
                                These Terms of Use are governed and constructed under the laws of the United States, without regard to its conflict of law provisions.
                            </p>
                            <h2>9. Changes To These Terms</h2>
                            <p>
                                Savestoday holds the right to modify or revise these terms from time to time. You are responsible for checking the Terms of Use periodically. Your continued use of our website after any alteration to these terms constitutes your acceptance of the revised terms.
                            </p>
                            <h2>10. Contact Us</h2>
                            <p>
                                If you have any questions about these terms, please get in touch with us at <a href="/contact-us">https://savestoday.com/contact-us.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
