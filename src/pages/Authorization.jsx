import React from 'react';
import {Header} from '../components/index';
import {Link} from 'react-router-dom'

function Authorization() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const blurHandler = (e) => {
    switch (e.target.name){
      case 'email':
          setEmailDirty(true);
          break
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный email')
    }else{
      setEmailError('')
    }
  }



  return (
    <div>
    <Header noCart noReg/>
    <div className='mainReg'>
        <div className='circle'></div>
        <div className='register-form-container'>
          <h1 className='form-title'>Регистрация</h1>
          <div className='form-fields'>
            <div className='form-field'>
              <input placeholder='Имя'/>
            </div>
            <div className='form-field'>
              <input placeholder='Фамилия'/>
            </div>
            <div className='form-field'>
              {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
              <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)}  name='email' type='text' placeholder='Email'/>
            </div>
            <div className='form-field'>
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
              <input onBlur={e => blurHandler(e)}  name='password' placeholder='Пароль' type="password"/>
            </div>
          </div>
          <div className='form-buttons'>
            <button className='buttonReg'>Регистрация</button>
            <div className='divider'>или</div>
            <Link to='/login'>
              <a className='buttonReg'>Вход в свой аккаунт</a>
            </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Authorization