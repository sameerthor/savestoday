import { useState } from "react";
import Link from "next/link";
import "@/styles/stores.css";
import { NextSeo } from "next-seo";

export default function Stores({ initialStoreData }) {
    const [storeData, setStoreData] = useState(initialStoreData);
    const [pageNumbers, setPageNumbers] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
    );
    const [loading, setLoading] = useState({});
    const [hasMore, setHasMore] = useState(
        Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

    const handleLoadMore = async (letter) => {
        if (!hasMore[letter]) return; // If no more data, stop fetching

        setLoading((prev) => ({ ...prev, [letter]: true }));
        try {
            const nextPage = pageNumbers[letter] + 1;
            const response = await fetch(
                `https://backend.savestoday.com/store-page/alphabetical-filter/?letter=${letter}&page=${nextPage}`
            );
            const data = await response.json();

            if (data.detail === "Invalid page.") {
                // If API returns "Invalid page", disable further pagination
                setHasMore((prev) => ({ ...prev, [letter]: false }));
            } else {
                setStoreData((prev) => ({
                    ...prev,
                    [letter]: [...prev[letter], ...(data.results || [])], // Append new results
                }));
                setPageNumbers((prev) => ({ ...prev, [letter]: nextPage }));
            }
        } catch (error) {
            console.error(`Error loading more stores for ${letter}:`, error);
        } finally {
            setLoading((prev) => ({ ...prev, [letter]: false }));
        }
    };

    const calculateCoupons = (coupons) => {
        const dealCount = coupons.filter((x) => x.coupon_type === "deal").length;
        const codeCount = coupons.filter((x) => x.coupon_type === "code").length;
        const dealText = dealCount > 0 ? `${dealCount} deal${dealCount > 1 ? "s" : ""}` : "";
        const codeText = codeCount > 0 ? `${codeCount} code${codeCount > 1 ? "s" : ""}` : "";
        return [dealText, codeText].filter(Boolean).join(" & ");
    };

    return (
        <>
            <NextSeo
                title="Stores 2024 - Savestoday"
                description="Savestoday offers the best coupons & promo codes for thousands of stores. Save big on fashion, electronics, travel, and more. Get up to 40% Off discount codes for guaranteed savings. Enjoy Free Shipping Offers."
            />
            <section className="allStorePage">
                <div className="container">
                    <div className="storeBox">
                        <div className="alpha-store">
                            <h1 className="text-center">All Stores</h1>
                            <div>
                                <p className="all_list">
                                    {alphabets.map((c) => (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(`#alpha${c.toUpperCase()}`);
                                                if (target) {
                                                    window.scrollTo({
                                                        top: target.offsetTop - 30,
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                            className="getStore"
                                            aria-label={`Scroll to ${c.toUpperCase()} section`}
                                            key={c}
                                        >
                                            {c.toUpperCase()}
                                        </button>
                                    ))}
                                </p>
                            </div>

                            {Object.keys(storeData).map((c) => (
                                <div className="storeList" id={`alpha${c.toUpperCase()}`} key={c}>
                                    <ul>
                                        {storeData[c].map((item, index) => (
                                            <li key={index}>
                                                <Link href={`/${item.slug}`}>
                                                    {item.title}
                                                    <span>{calculateCoupons(item.coupon_set)}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {hasMore[c] &&
                                        <div className="loadMoreCoupon text-center">
                                            <button
                                                onClick={() => handleLoadMore(c)}
                                                disabled={loading[c] || !hasMore[c]} // Disable if loading or no more data
                                                aria-live="polite"
                                                className="load-more-btn"
                                            >
                                                {loading[c] ? "Loading..." : "Load More"}
                                            </button>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];
    const storeData = {};

    try {
        const responses = await Promise.all(
            alphabets.map((letter) =>
                fetch(`https://backend.savestoday.com/store-page/alphabetical-filter/?letter=${letter}&page=1`)
                    .then((res) => res.json())
                    .then((data) => ({ [letter]: data.results || [] }))
            )
        );

        responses.forEach((response) => {
            Object.assign(storeData, response);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        props: {
            initialStoreData: storeData,
        },
        revalidate: 10, // Incremental static regeneration
    };
}
