import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import instagramLogo from '../../images/icons8/icons8-instagram-48.png';
import telegramLogo from '../../images/icons8/icons8-telegram-app-48.png';
import youtubeLogo from '../../images/icons8/icons8-youtube-play-button-48.png';
import twitterLogo from '../../images/icons8/icons8-twitter-48.png';
import digishopLogo from '../../images/icons8/icons8-laptop-computer-64.png';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h4>درباره ی دیجی شاپ</h4>
                        <Link to='/'>اتاق خبر</Link>
                        <Link to='/sign-up'>فروش در دیجی شاپ</Link>
                        <Link to='/'>فرصت های شغلی</Link>
                        <Link to='/'>تماس با ما</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h4>خدمات مشتریان</h4>
                        <Link to='/'>پاسخ به پرسش های متداول</Link>
                        <Link to='/'>رویه های بازگرداندن کالا</Link>
                        <Link to='/'>شرایط استفاده </Link>
                        <Link to='/'>حریم خصوسی</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h4>محصولات</h4>
                        <Link to='/'>لپ تاپ</Link>
                        <Link to='/'>تلفن همراه</Link>
                        <Link to='/'>ساعت هوشمند</Link>
                        <Link to='/'>پاوربانک</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h4>راهنمای خرید از دیجی شاپ</h4>
                        <Link to='/'>نحوه ثبت سفارش</Link>
                        <Link to='/'>رویه ارسال سفارش</Link>
                        <Link to='/'>شیوه های پرداخت</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h4>با ما همراه باشید</h4>
                        <Link to='/'><img src={instagramLogo}/></Link>
                        <Link to='/'><img src={telegramLogo}/></Link>
                        <Link to='/'><img src={youtubeLogo}/></Link>
                        <Link to='/'><img src={twitterLogo}/></Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src={digishopLogo} className='footer-logo'/>
                            <i class='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small class='website-rights'>DIGISHOP © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f'/>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram'/>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
/* <div className='footer-container'>
<section className='footer-subscription'>
    <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
    </p>
    <p className='footer-subscription-text'>
        You can unsubscribe at any time.
    </p>
    <div className='input-areas'>
        <form>
            <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
    </div>
</section>
<div class='footer-links'>
    <div className='footer-link-wrapper'>

        <div class='footer-link-items'>

        </div>
    </div>
    <div className='footer-link-wrapper'>
        <div class='footer-link-items'>

        </div>
        <div className='footer-link-items'>

        </div>
        <div class='footer-link-items'>

        </div>
    </div>
</div>
<section class='social-media'>
    <div class='social-media-wrap'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                DIGISHOP
                <i class='fab fa-typo3'/>
            </Link>
        </div>
        <small class='website-rights'>DIGISHOP © 2021</small>
        <div class='social-icons'>
            <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
            >
                <i class='fab fa-facebook-f'/>
            </Link>
            <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
            >
                <i class='fab fa-instagram'/>
            </Link>
            <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
            >
                <i class='fab fa-youtube'/>
            </Link>
            <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
            >
                <i class='fab fa-twitter'/>
            </Link>
            <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
            >
                <i class='fab fa-linkedin'/>
            </Link>
        </div>
    </div>
</section>
</div>
);
}

export default Footer;*/