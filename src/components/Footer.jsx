import React from 'react';
import '../scss/app.scss';

function Footer() {
  return (
    <div className='footerStyles'>
        <div>
          <h1>Tasty Pizza</h1>
        </div>
        <div>
          Контактная информация: <br/><br/>
          Телефон: +7 (999) 999-99-99 <br />
          Эл. почта: tastypizza@gmail.com
        </div>
        <div className='linksDiv'>
          Соц. сети:
          <ul>
            <br/>
            <li><a href="https://vk.com">ВКонтакте</a></li>
            <li><a href="https://web.telegram.org">Telegram</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer