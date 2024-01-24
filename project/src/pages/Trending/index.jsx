import React from 'react';
import './index.less'

export default class Trending extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChange: false
        }
    }
    handleChange = (flag) => {
        console.log(1)
        this.setState({
            isChange: flag
        })
    }
    render() {
        return (
            <div className='Trending'>
                <h1>&lt; /Trending Now &gt;</h1>
                <div className={`Trending-box ${this.state.isChange ? 'lf-change' : ''}`}>


                    <div className='box box1'>
                        <img src={require('../../assets/img/Vector138.png')} alt="" className='ft_img' />
                        <div className='content-box'>
                            <img src={require('../../assets/img/Rectangle1800.png')} alt="" />
                            <h1>Introduction to programming</h1>
                            <div className='tag'>
                                <span>Beginner</span>
                            </div>
                            <p className='content_p'>This course covers the most basic concepts in programming using Solidity as an example.</p>
                            <footer className='footer'>
                                <p className='p1 hour'><img src={require('../../assets/img/Group.png')} alt="" /><span>36 Hour</span></p>
                                <p className='p1 course'><img src={require('../../assets/img/Frame 3465719.png')} alt="" /><span>5 Course</span></p>
                                <p className='completed'><img src={require('../../assets/img/Flight - Side way.png')} alt="" /><span>45% COMPLETED</span></p>
                            </footer>
                        </div>
                    </div>

                    <div className='box box2'>
                        <img src={require('../../assets/img/Vector50.png')} alt="" className='ft_img' />
                        <div className='content-box'>
                            {/* <img src={require('../../assets/img/Rectangle1800.png')} alt="" /> */}
                            <h1 className='h1_margin'>Moonshot 2023 Summer Hackathon</h1>
                            <div className='tag'>
                                <span>All Tracks</span>
                                <span>Solidity</span>
                                <span>ZK</span>
                            </div>
                            <p className='content_p'>This course covers the most basic concepts in programming using Solidity as an example.</p>
                            <footer className='footer_enu'>
                                <p><span className='span1'>Signup</span><span className='span2'>4/15 - 6/15</span></p>
                                <p><span className='span1'>Event</span><span className='span2'>6/15 - 7/15</span></p>
                                <p><span className='span1'>Grant size</span ><span className='span2'>200K</span></p>
                            </footer>
                        </div>
                    </div>

                    <div className='box box3'>
                        <img src={require('../../assets/img/Vector139.png')} alt="" className='ft_img' />
                        <div className='content-box'>
                            <img src={require('../../assets/img/Rectangle 1800.png')} alt="" />
                            <h1>Web 3.0 Programming Basics</h1>
                            <div className='tag'>
                                <span>Beginner</span>
                            </div>
                            <p className='content_p'>Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</p>
                            <footer className='footer footer-justify-content'>
                                <p className='p1 hour'><img src={require('../../assets/img/Group.png')} alt="" /><span>36 Hour</span></p>
                                <p className='p1 course'><img src={require('../../assets/img/Frame 3465719.png')} alt="" /><span>5 Course</span></p>
                            </footer>
                        </div>
                    </div>
                    <div className='box box4'>
                        <img src={require('../../assets/img/page_1.png')} alt="" className='ft_img' />
                        <div className='content-box'>
                            <img src={require('../../assets/img/Rectangle 1805.png')} alt="" />
                            <p className='content_p Bitcoin_p'>What is Bitcoin</p>
                            <footer className='footer '>
                                <p className='p1 hour hour_right'><img src={require('../../assets/img/Group.png')} alt="" /><span>36 Hour</span></p>
                            </footer>
                        </div>
                    </div>

                    <div className={`lf-btn-box ${this.state.isChange ? '': 'btn-hidden'}`}>
                        <p onClick={() => this.handleChange(false)}>&lt;</p>
                    </div>

                    <div className={`rg-btn-box ${this.state.isChange ? 'btn-hidden': ''}`}>
                        <p onClick={() => this.handleChange(true)}>&gt;</p>
                    </div>
                </div>

            </div>
        )
    }
}