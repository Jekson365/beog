import React from 'react'
import { Footer } from '../components/Footer'

export const Sec_3 = () => {
    const items = [
        {
            image: "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51c0485640e06e621e98e_blog-07-p-500.jpg",
            name: "20 Reasons you need to stop stressing about travel",
        },
        {
            image: "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51b56decf1b2517eaa7e9_blog-06-p-500.jpg ",
            name: "10 Sites to Help You Become an Expert in Travel",
        },
        {
            image: "https://assets.website-files.com/63d6118fac19915fe3a7b107/63e51aeac99be3a7b8f6e812_blog-05-p-500.jpg",
            name: "Travel: It's Not as Difficult as You Think",
        },
        {
            image: "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d6a035d504155c78c948db_blog-04-p-500.jpg",
            name: "10 Things Everyone Hates About Blog",
        },
    ]
    return (

        <>
            <div className="vh-100 d-flex flex-column" style={{ "maxWidth": "1350px", "margin": "0 auto" }}>
                <h1 className='h1 mt-5' style={{ "marginLeft": "20px" }}>Trending Blog</h1>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="grid-row mt-5">
                        {items.map((each) => {
                            return (
                                <>
                                    <div className="each col-md-3">
                                        <div className="image-pp d-flex flex-column ">
                                            <img src={each.image} alt="" />

                                        </div>
                                        <div className="cont p-3">
                                            <h5 className='h5'>{each.name}</h5>
                                            <span className='pt-4'>Social February 9,2023</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="container-fluid" style={{"marginTop":"100px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Ready to grow your Busniess?</h3>
                            <p className="p">It is a long established fact that a reader will be distracted.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="mail">
                                <input type="text"
                                    placeholder='Search...'
                                    name="" id="" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}
