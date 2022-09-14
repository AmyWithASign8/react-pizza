import React from 'react'
import {Header, Button} from '../components/index'
import BackgroundImg from '../assets/img/Pizza-1.png'
import {Link} from 'react-router-dom' 
import pizzaImg from '../assets/img/pizza2.jpg'
import fastDelivery from '../assets/img/411780.png'
import lowPrice from '../assets/img/lowPrice.png'

function LandingPage() {
  return (
    <div>
        <Header noCart />
        <div className='firstSlide'>
            <div className='headerP'>
                <p>Онлайн-пиццерия</p>
                <p>Tasty Pizza</p>
                <p>Для тех кто ценит вкус</p>
                <Link to='/Home'>
                    <Button onClick={() => alert('Для того чтобы оформить заказ вам нужно пройти регистрацию')}>Оформить заказ</Button>
                </Link>
            </div>
            <img src={BackgroundImg} height="500px"/>
            <h1 id="aboutUsH1">О НАС</h1>
            <div className='aboutUs'>
                <div>
                    <img src={pizzaImg} width="100px"/>
                    <p>Быстро и качественно</p>
                </div>
                <div>
                    <img src={lowPrice} width="100px"/>
                    <p>Низкие цены</p>
                </div>
                <div>
                    <img src={fastDelivery} width="100px"/>
                    <p>Быстрая доставка</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage