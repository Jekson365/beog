import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export const About = () => {
    const defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 11
    };
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center">
                <div className="form-container">

                    <h1>Contact</h1>
                    <p className="p">
                        But the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. If you are going to use a passage.
                    </p>
                    <h4 className='h4 mt-5'>Let’s get in touch</h4>
                    <p className="p ">You can reach me
                        <a href="#">info@gmail.com</a>

                        <form action="" className='mt-5'>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Subject">Subject</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Comment">Comment</label>
                                <textarea type="text" />
                            </div>
                            <button className='submit'>submit</button>
                        </form>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
