import React from 'react';
import '../Css/BlogPage.css';

const BlogPage = () => {
    return (
        <div className="blog-page">
            {/* Fixed Header */}
            <div className="fixed-top">
                <nav className="navbar">
                    <div className="logo">
                        <img src="/assets/logo.png" alt="AgroPrime Logo" />
                        
                    </div>
                    <ul className="nav-links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Information</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                        <li className="login-btn">Login</li>
                    </ul>
                </nav>

                <div className="blog-heading">
                    <h1>AgroPrime Blog</h1>
                    <p>Stay updated with the latest in agriculture, from innovative farming techniques to market trends and expert insights.</p>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="🔍 Search..." />
                </div>

                <div className="tag-buttons">
                    {["Farming Techniques", "Market Trends", "Crop Management", "Sustainable Agriculture", "Technology in Farming"].map((tag, i) => (
                        <button key={i}>{tag}</button>
                    ))}
                </div>
            </div>

            {/* Scrollable Main */}
            <div className="scrollable-content">
                <section className="featured-article">
                    <h2>Featured Articles</h2>
                    <div className="article-card" >
                        <img src="/assets/image1.jpg" alt="Featured Farm" />
                        <div className="article-content">
                            <h3>Revolutionizing Farming with Precision Agriculture</h3>
                            <p>Explore how precision agriculture is transforming farming practices, enhancing efficiency, and boosting yields.</p>
                            <button className="read-more">Read More</button>
                        </div>
                    </div>
                </section>

                <section className="latest-articles">
                    <h2>Latest Articles</h2>

                    <div className="article-card">
                        <div className="article-content">
                            <h3>Understanding Soil Health for Optimal Crop Growth</h3>
                            <p>Learn about the importance of soil health and how to maintain it for better crop yields.</p>
                            <button className="read-more">Read More</button>
                        </div>
                        <img src="/assets/image2.jpg" alt="Soil Health" />
                    </div>
                    <div className="article-card">
                        <div className="article-content">
                            <h3>The Impact Of Climate Change On Agriculture</h3>
                            <p>Discover the effect of climate change on farming and strategies to adapt to these challengs </p>
                            <button className="read-more">Read More</button>
                        </div>
                        <img src="/assets/image3.jpg" alt="Market Trends" />
                    </div>
                    <div className="article-card">
                        <div className="article-content">
                            <h3>Innovative Irrigation Techniques for Water Conservation</h3>
                            <p>Explore new irrigation methods that help conserve water and improve crop productivity.</p>
                            <button className="read-more">Read More</button>
                        </div>
                        <img src="/assets/image4.jpg" alt="Irrigation" />
                    </div>

                    <div className="article-card">
                        <div className="article-content">
                            <h3>Market Trends: What Farmers Need to Know in 2024</h3>
                            <p>Stay ahead with the latest market trends and insights to make informed decisions for your farm.</p>
                            <button className="read-more">Read More</button>
                        </div>
                        <img src="/assets/image5.jpg" alt="Market Trends" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogPage;
