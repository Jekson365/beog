import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

export const Blog = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center m-5'>Our Blog</h1>

            <div className="container-fluid bg-danger d-flex justify-content-center">
                <div className='d-flex align-items-center justify-content-center bg-success p-5' 
                style={{ "maxWidth": "1440px","height":"400px","overflow":"hidden","borderRadius":"20px"}}>
                    <div className="row" style={{"overflow":"hidden"}}>
                        <div className="col-md-5" style={{"overflow":"hidden"}}>
                            <div className="image-p2" style={{"borderRadius":"20px"}}>
                                <img src="https://assets.website-files.com/63d6118fac19915fe3a7b107/63d615d65236772a992900be_blog-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <p className="p">Travel February 9, 2023</p>
                            <h3 className='h3'>Where to find guest blogging opportunities on blog</h3>
                            <p className="p">By Justus lucas</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
