import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Popular } from './Popular';

export const Blog = () => {

    const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13];

    const content = [
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51d86c99be32598f71408_blog-12.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51f34228f090cefafd606_blog-11.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51d7c722f478d5f24ae7d_blog-10.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51d3d5f5d672728453cea_blog-09.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51c57dc11674e378a8746_blog-08.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51c0485640e06e621e98e_blog-07-p-500.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51b56decf1b2517eaa7e9_blog-06-p-500.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51aeac99be3a7b8f6e812_blog-05-p-500.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d6a035d504155c78c948db_blog-04-p-500.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d69b3f737d36d1749d590c_blog-03-p-500.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d615d65236772a992900be_blog-01.jpg",
        "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d6187baac0be9d99392f71_blog-02.jpg"
    ]

    return (
        <>
            <Navbar />
            <h1 className='text-center m-5' style={{ "fontSize": "3.5rem", 'margin': "150px" }}>Our Blog</h1>
            <div className="container">
                <div className="mw-1200 d-flex flex-wrap align-items-center flex-row">
                    <div className="row">
                        <div className="col-md-5">

                            <div className="image-place-2">
                                <img src="https://assets.website-files.com/63d6118fac19915fe3a7b107/63d615d65236772a992900be_blog-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="content h-100">
                                <div className="cl1">
                                    <p className="p">
                                        Travel February 9,2023
                                    </p>
                                    <h3>Where to find blogging opportunities on blog</h3>
                                </div>
                                <div className="cl1">
                                    <p className="p">
                                        Read More -
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mww-1200" style={{"marginTop":"150px"}}>
                <div className="">
                    <h1 className='text-left' style={{"marginLeft":"5vw"}}>Most Popular</h1>
                    <div className="pop-grid">
                        {content.map((each) => {
                            return (
                                <>
                                    <Popular items={each} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
