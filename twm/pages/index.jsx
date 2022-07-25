import Head from 'next/head'
import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'

import Style from '../styles/landingPage.module.css'
import { PageContext } from '../Context/pageContext'

import Header from '../components/LandingPage/Header'
import AboutUs from '../components/LandingPage/AboutUs'
import Vision from '../components/LandingPage/Vision'
import MeetTheInstructors from '../components/LandingPage/MeetTheInstructors'
import LetsMove from '../components/LandingPage/LetsMove'
import Navbar from '../components/Navbar'

export default function Home() {
    const { pageValue, setPageValue } = useContext(PageContext)
    const [style, setStyle] = useState()
    const [showHead, setShowHead] = useState(true)

    useEffect(() => {
        console.log(pageValue);
        setPageValue(0)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPageValue(window.scrollY)
        })
    })

    useEffect(() => {
        if (pageValue <= 10) {
            setStyle("h-full duration-500")
            setShowHead(true)
        } else {
            setStyle("h-2/6 mt-48 mx-10 rounded-lg shadow shadow-black bg-green-500 duration-500")
            setShowHead(false)
        }
    }, [pageValue])

    return (
        <div className={cx('h-screen')}>
            {
                pageValue != undefined ?
                    <>
                        {!showHead ? <Navbar /> : ''}
                        <div className={style}>
                            <Header showHead={showHead} />
                        </div>
                        <div className={cx('h-52 mx-10 mt-3 flex flex-col gap-3')}>
                            <div className='section'>
                                <Vision />
                            </div>
                            <div className='section'>
                                <MeetTheInstructors />
                            </div>
                            <div className="section">
                                <LetsMove />
                            </div>
                        </div>
                        <div className="h-screen"></div>
                    </>
                    :
                    ''
            }
        </div>
    )
}
