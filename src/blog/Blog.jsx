import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Popular } from './Popular';

export const Blog = () => {

    const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13];

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
                        {arr.map((each) => {
                            return (
                                <>
                                    <Popular />
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
