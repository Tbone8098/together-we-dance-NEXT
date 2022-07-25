import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import YouTube from 'react-youtube'

// svg
import Kendal1 from '../../../img/svg/kendal.svg'
import Kendal1Reflection from '../../../img/svg/kendal1Reflection.svg'
import Kendal2 from '../../../img/svg/kendal2.svg'
import Kendal2Reflection from '../../../img/svg/kendal2Reflection.svg'
import Eny1 from '../../../img/svg/eny.svg'
import Eny1Reflection from '../../../img/svg/eny1Reflection.svg'
import Eny2 from '../../../img/svg/eny2.svg'
import Eny2Reflection from '../../../img/svg/eny2Reflection.svg'

// Style
import Style from './style.module.css'


export default function Index(props) {
    const { showHead } = props
    const [personShowing, setPersonShowing] = useState({
        k1: false,
        k2: false,
        e1: false,
        e2: false,
    })

    const mouseOverHandler = (person, state) => {
        setPersonShowing({
            ...personShowing,
            [person]: state
        })
    }

    return (
        <>
            {
                showHead ?
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h1 className='text-7xl font-my-h mb-5'>Together We Move</h1>
                        <div className='flex gap-3'>
                            <div className='w-20'  >
                                <Kendal2 className={cx(!personShowing.k2 && Style.blueLight)}  onMouseEnter={() => mouseOverHandler('k2', true)} onMouseLeave={() => mouseOverHandler('k2', false)}/>
                                <Kendal2Reflection className={cx(Style.blueLight)} />
                            </div>
                            <div className='w-20'>
                                <Kendal1 className={cx(!personShowing.k1 && Style.green)} onMouseEnter={() => mouseOverHandler('k1', true)} onMouseLeave={() => mouseOverHandler('k1', false)}/>
                                <Kendal1Reflection className={cx(Style.green)} />
                            </div>
                            <div className='w-20'>
                                <Eny1 className={cx(!personShowing.e1 && Style.blue)} onMouseEnter={() => mouseOverHandler('e1', true)} onMouseLeave={() => mouseOverHandler('e1', false)}/>
                                <Eny1Reflection className={cx(Style.blue)} />
                            </div>
                            <div className='w-20'>
                                <Eny2 className={cx(!personShowing.e2 && Style.purple)} onMouseEnter={() => mouseOverHandler('e2', true)} onMouseLeave={() => mouseOverHandler('e2', false)}/>
                                <Eny2Reflection className={cx(Style.purple)} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='grid grid-cols-4 gap-3 p-5 h-full'>
                        <YouTube
                            videoId="m0VHFrhceik"
                            className='col-span-2'
                            iframeClassName='w-full h-full rounded-lg border-2 border-white shadow shadow-black'
                        />
                        <div className='flex flex-col col-span-2 justify-center items-center text-white'>
                            <p>Join Us and</p>
                            <p>LET'S MOVE</p>
                            <div className='flex gap-3'>
                                <a className='btn bg-my-accent text-black' href="">Sign Up</a>
                                <a className='btn bg-my-secondary text-black' href="">Login</a>
                            </div>
                            <p>TOGETHER</p>
                        </div>
                    </div>
            }
        </>
    )
}
