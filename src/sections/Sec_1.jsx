import React from 'react'

export const Sec_1 = () => {
    return (
        <>
            <div className="sec_1 vh-100 cntr" style={{ "maxWidth": "1350px" }}>
                <div className="wrapper">
                    <h1 className=''>
                        See our concept, stories & ideas.
                    </h1>
                    <p className="p">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                    <div className="mail">
                        <input type="text"
                            placeholder='Search...'
                            name="" id="" />
                        <button>Search</button>
                    </div>
                </div>

                <div className="container-fluid" style={{ "marginTop": "130px" }}>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <div className="poster d-flex flex-column align-items-start">
                                <div className="image-place">
                                    <img src="https://assets.website-files.com/63d6118fac19915fe3a7b107/63d615d65236772a992900be_blog-01.jpg" alt="" />
                                </div>
                                <h3 className='mt-2'>Where to find guest blogging opportunities on blog</h3>
                                <p className="p">Travel February 9,2023</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="poster d-flex flex-column align-items-start" >
                                <div className="image-place">
                                    <img src="https://assets.website-files.com/63d6118fac19915fe3a7b107/63d6187baac0be9d99392f71_blog-02.jpg" alt="" />
                                </div>
                                <h3 className='mt-2'>10 things that you learned in preschool that  help you with blog</h3>
                                <p className="p">Travel February 9,2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
