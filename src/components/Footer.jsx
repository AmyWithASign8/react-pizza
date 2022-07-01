import React from 'react';
import '../scss/app.scss';

function Footer() {
  return (
    <div className='footerStyles'>
        <div>
          Tasty Pizza
        </div>
        <div>
          Контактная информация: <br/><br/>
          Телефон: +7 (999) 999-99-99 <br />
          Эл. почта: tastypizza@gmail.com
        </div>
        <div>
          Соц. сети:
          <ul>
            <li>ВКонтанкте</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer