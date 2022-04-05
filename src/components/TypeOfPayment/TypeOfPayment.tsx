import classNames from 'classnames';
import React, { useState } from 'react';
import { onlyNumbers } from '../InfoForm/InfoForm';
import './TypeOfPayment.scss'

const TypeOfPayment = () => {
  const [typeOfPayment, setTypeOfPayment] = useState('');

  const [firsCardNumber, setFirsCardNumber] = useState('');
  const [secondCardNumber, setSecondCardNumber] = useState('');
  const [thirdCardNumber, setThirdCardNumber] = useState('');
  const [fourthCardNumber, setFourthCardNumber] = useState('');

  const [validity, setValidity] = useState('');

  const validityChange = (text: string) => {
    setValidity(text.length === 3 && !text.includes("/")
      ? `${text.substring(0, 2)}/${text.substring(2)}`
      : text)
  };

  return(
    <div className="payment">
      <div className="payment__types">
        <p className='payment__title'>Спосіб оплати</p>
        <div className="payment__container">
          <div 
            className={classNames(
              'payment__type',
              {'payment__type--active': typeOfPayment === 'visa'}
            )}
            onClick={() => setTypeOfPayment('visa')}
          >
            <h1 className="payment__type--title">
              VISA
            </h1>

            <p className="payment__type--description">
              Карта Visa/MasterCard
            </p>
          </div>

          <div className={classNames(
              'payment__type',
              {'payment__type--active': typeOfPayment === 'privat'}
            )}
            onClick={() => setTypeOfPayment('privat')}
          >
            <h1 className="payment__type--title">
              Приват24
            </h1>
            
            <p className="payment__type--description">
              Приват24
            </p>
          </div>

          <div className={classNames(
              'payment__type',
              {'payment__type--active': typeOfPayment === 'terminal'}
            )}
            onClick={() => setTypeOfPayment('terminal')}
          >
            <p className="payment__type--description">
              Термінали України
            </p>
          </div>

          <div className={classNames(
              'payment__type',
              {'payment__type--active': typeOfPayment === 'webmoney'}
            )}
            onClick={() => setTypeOfPayment('webmoney')}
          >
            <h1 className="payment__type--title">
              WebMomey
            </h1>
            
            <p className="payment__type--description">
              WebMoney
            </p>
          </div>

          <div className={classNames(
              'payment__type',
              {'payment__type--active': typeOfPayment === 'paypal'}
            )}
            onClick={() => setTypeOfPayment('paypal')}
          >
            <h1 className="payment__type--title">
              P
            </h1>
            
            <p className="payment__type--description">
              PayPal
            </p>
          </div>
        </div>
      </div>

      <div className="payment__card">
        <p className="payment__title">
          Введіть наступні данні
        </p>
        <div className={classNames(
              'card',
              {'card--active': typeOfPayment === 'visa' || typeOfPayment === 'privat'}
            )}>
          <div>
            <p className="card__title">Номер карти</p>
            <div className="card__number">
              <input 
                type="text"
                value={firsCardNumber}
                className="card__input"
                onChange={(e) => onlyNumbers(e, setFirsCardNumber)}
                maxLength={4}
                minLength={4}
              />

              <input 
                type="text"
                value={secondCardNumber}
                className="card__input"
                onChange={(e) => onlyNumbers(e, setSecondCardNumber)}
                maxLength={4}
                minLength={4}
              />

              <input 
                type="text"
                value={thirdCardNumber}
                className="card__input"
                onChange={(e) => onlyNumbers(e, setThirdCardNumber)}
                maxLength={4}
                minLength={4}
              />

              <input 
                type="text"
                value={fourthCardNumber}
                className="card__input"
                onChange={(e) => onlyNumbers(e, setFourthCardNumber)}
                maxLength={4}
                minLength={4}
              />
            </div>
          </div>

          <div className="card__info">
            <div className="card__info--date">
              <p className="card__title">Термін дії</p>
              <input
                placeholder='мм/рр'
                maxLength={5}
                value={validity}
                onChange={(e) => validityChange(e?.target.value)}
                className="card__info--input"
              />
            </div>

            <div className="card__info--code">
              <p className="card__title">CVC/CVV</p>
              <input 
                type="password"
                maxLength={3}
                className="card__info--input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeOfPayment;