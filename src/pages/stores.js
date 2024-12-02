import { useState } from "react";
import Link from "next/link";
import "@/styles/stores.css";
import { NextSeo } from "next-seo";

export default function Stores({ initialStoreData }) {
  const [storeData, setStoreData] = useState(initialStoreData); // Initialize with preloaded data
  const [pageNumbers, setPageNumbers] = useState(
    Object.keys(initialStoreData).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
  ); // Track page numbers for each letter
  const [loading, setLoading] = useState({}); // Track loading state per alphabet

  const alphabets = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))];

  const handleLoadMore = async (letter) => {
    setLoading((prev) => ({ ...prev, [letter]: true })); // Set loading state for the letter

    try {
      const nextPage = pageNumbers[letter] + 1;
      const response = await fetch(
        `https://backend.savestoday.com/store-page/alphabetical-filter/?letter=${letter}&page=${nextPage}`
      );
      const data = await response.json();

      setStoreData((prevData) => ({
        ...prevData,
        [letter]: [...prevData[letter], ...data.results], // Append new results
      }));

      setPageNumbers((prevPages) => ({ ...prevPages, [letter]: nextPage })); // Increment page number
    } catch (error) {
      console.error(`Error loading more stores for ${letter}:`, error);
    } finally {
      setLoading((prev) => ({ ...prev, [letter]: false })); // Reset loading state
    }
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
                          <span>
                            {item.coupon_set.filter((x) => x.coupon_type === "deal").length > 0 &&
                              `${item.coupon_set.filter((x) => x.coupon_type === "deal").length} deals`}
                            {item.coupon_set.filter((x) => x.coupon_type === "deal").length > 0 &&
                              item.coupon_set.filter((x) => x.coupon_type === "code").length > 0 &&
                              " & "}
                            {item.coupon_set.filter((x) => x.coupon_type === "code").length > 0 &&
                              `${item.coupon_set.filter((x) => x.coupon_type === "code").length} codes`}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                 
                  <div class="loadMoreCoupon text-center"><button onClick={() => handleLoadMore(c)} disabled={loading[c]}>{loading[c] ? "Loading..." : "Load More"}</button></div>
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
