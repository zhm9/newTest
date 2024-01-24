import React from 'react';
import './index.less'
import Trending from '../Trending/index'

export default class Hack extends React.Component {
    render() {
        return (
            <div className='hack'>
                <header>
                    <div className='hack-left'>
                        <ul>
                            <li className='activeLi'>HACK QUEST</li>
                            <li>All Courses</li>
                            <li>Learning Dashboard</li>
                        </ul>
                    </div>
                    <div className='hack-right'>
                        <img src={require('../../assets/img/tx.png')} alt="" />
                    </div>
                </header>
                <Trending />
            </div>
        )
    }
}