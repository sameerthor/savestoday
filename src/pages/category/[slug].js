import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import Link from "next/link";
import moment from "moment";
import _ from 'lodash';
import "@/styles/categories.css";

function Category({ category, categories }) {
    const CategoriesBox = dynamic(() => import('@/components/categorybox'), { ssr: false });

    // Pagination State
    const [storeData, setStoreData] = useState(category.store_set.results || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(category.store_set.count / 10)); // Assuming page size is 10
    const [isLoading, setIsLoading] = useState(false);

    // Fetch data for a specific page
    const fetchPageData = async (page) => {
        setIsLoading(true);
        const res = await fetch(`https://backend.savestoday.com/categories/${category.slug}?page=${page}`);
        const data = await res.json();
        setStoreData(data.store_set.results);
        setCurrentPage(page);
        setIsLoading(false);
    };

    return (
        <>
            <NextSeo
                title={category.meta_title.replace("%%currentyear%%", moment().format('YYYY'))}
                description={category.meta_description.replace(
                    "%%stores%%",
                    _.map(
                        category.store_set.results.sort((a, b) => b.coupon_set.length - a.coupon_set.length).slice(0, 3),
                        'title'
                    ).join(', ') + "."
                )}
            />
            <section className="storePage">
                <div className="container">
                    <div className="breadcrumb">
                        <ul>
                            <li>
                                <Link href="/">SavesToday.com</Link> /
                            </li>
                            <li>
                                <Link href="/category">categories</Link> /
                            </li>
                            <li>{category.title}</li>
                        </ul>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <h1 className="pageHeading">
                            Best {category.title} Coupons &amp; Deals for {moment().format("MMMM YYYY")}
                        </h1>
                        <div className="subCatBox">
                            <div className="row flex-reverse">
                                <div className="col-lg-3">
                                    <div className="offerToday">
                                        <h3>Today's {category.title} Offers</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>🛍️ Total Offers</td>
                                                    <td className="text-right">
                                                        {storeData.reduce((count, current) => count + current.coupon_set.length, 0)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>🏷️ Active Coupon Codes</td>
                                                    <td className="text-right">
                                                        {storeData.reduce((count, current) =>
                                                            count + current.coupon_set.filter(x => x.coupon_type === 'code').length, 0
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>🛒 Free Shipping</td>
                                                    <td className="text-right">
                                                        {storeData.reduce((count, current) =>
                                                            count + current.coupon_set.filter(x => x.title.toLowerCase().includes("shipping")).length, 0
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="similarStore">
                                        <h3 className="widgetHeading">Similar Categories</h3>
                                        <CategoriesBox />
                                    </div>
                                </div>
                                <div className="col-lg-9 p-0 mb catList">
                                    {isLoading ? (
                                        <div style={{textAlign:"center"}}>Loading...</div>
                                    ) : (
                                        <div className="row">
                                            {storeData.map(item => (
                                                <div className='col-md-3' key={item.slug}>
                                                    <Link href={`/${item.slug}`} className="storeBox">
                                                        <div className="imgBox">
                                                            <img src={item.image} alt={item.title} width={80} height={80} />
                                                        </div>
                                                        <div className="dealCount">
                                                            <span>{item.title}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {/* Pagination */}
                                    {!isLoading &&
                                    <div className="pagination">
                                        <ul>
                                            {currentPage !== 1 &&
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (currentPage > 1) fetchPageData(currentPage - 1);
                                                        }}
                                                        className={currentPage === 1 ? 'disabled' : ''}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708-.708L6.707 8l5.647-5.646a.5.5 0 0 0 0-.708z" />
                                                            <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708-.708L2.707 8l5.647-5.646a.5.5 0 0 0 0-.708z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            }
                                            {/* Page Numbers */}
                                            {Array.from({ length: totalPages }).map((_, index) => (
                                                <li key={index}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            fetchPageData(index + 1);
                                                        }}
                                                        className={currentPage === index + 1 ? 'active' : ''}
                                                    >
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            {currentPage !== totalPages &&
                                                < li >

                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (currentPage < totalPages) fetchPageData(currentPage + 1);
                                                        }}
                                                        className={currentPage === totalPages ? 'disabled' : ''}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            }
                                        </ul>
                                    </div>
}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}



// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.savestoday.com/categories/${params.slug}`)
    const category = await res.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }



    return {
        props: {
            category
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://backend.savestoday.com/categories?no_pagination=true')
    const categories = await res.json()

    // Get the paths we want to pre-render based on categories
    const paths = categories.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default Category