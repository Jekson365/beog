import React from 'react'

export const Footer = () => {
    return (

        <>
            <div className="mww-1200" style={{"maxWidth":"1260px"}}>
                <div className="row">

                    <div className="container-fluid" style={{ "marginTop": "100px" }}>
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
                    <div className="container-fluid" style={{ "marginTop": "100px" }}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://assets.website-files.com/63d5ec0c84ce7a139b04638e/63e6fae264e26f6039829955_beog.svg" alt="" />
                                <p className="p">There are many variations of passages of Lorem
                                    Ipsum available, but the majority.</p>
                            </div>
                            <div className="col-md-2">
                                <ul className='d-flex flex-column'>
                                    <li>
                                        <h3>Pages</h3>
                                    </li>
                                    <li>Home</li>
                                    <li>Blog</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <ul className='d-flex flex-column'>
                                    <li>
                                        <h3>Admin</h3>
                                    </li>
                                    <li>Syle Guide</li>
                                    <li>License</li>
                                    <li>Changelog</li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <ul className='d-flex flex-column'>
                                    <li>
                                        <h3>Social</h3>
                                    </li>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Linkedin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
