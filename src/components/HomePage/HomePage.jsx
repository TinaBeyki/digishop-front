import React from 'react';
import './HomePage.css';
import {Button} from "../Button/Button";
import homePageBackground from '../../images/background/iphones.jpg';

function HomePage() {
    return (

        <div className='hero-container'>
            <video src='/videos/ipad-air.mp4' autoPlay loop muted/>
            <h1>DIGISHOP</h1>
            <b><p style={{fontStyle: "bold", fontSize: 20, color:"white"}}>هیچکس به اندازه ی شما به رویاهایتان توجه ندارد</p></b>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    ثبت نام
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}>
                    ورود
                    <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HomePage;