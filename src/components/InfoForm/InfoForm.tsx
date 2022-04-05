import classNames from 'classnames';
import React, { useState } from 'react';
import TypeOfHelp from '../TypeOfHelp/TypeOfHelp';
import './InfoForm.scss'

export const onlyNumbers = (
  event: React.ChangeEvent<HTMLInputElement>, 
  method: (string: string) => void,
  ) => {
  if(event.target.value.split('').every(symb => +symb)) {
    method(event.target.value);
  }
}

const InfoForm: React.FC = () => {
  const [individualButton, setIndividualButton] = useState(false);
  const [legalEntityButton, setLegalEntityButton] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [postIndex, setPostIndex] = useState('');

  const onIndividualButtonClick = () => {
    setLegalEntityButton(false)
    setIndividualButton(!individualButton)
  };

  const onLegalEntityButtonClick = () => {
    setIndividualButton(false)
    setLegalEntityButton(!legalEntityButton)
  };

  const onSubmittHandle = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setName('');
    setSurname('');
    setCompany('');
    setEmail('');
    setNumber('');
    setCountry('');
    setCity('');
    setState('');
    setAddress('');
    setPostIndex('');
  }

  return (
    <form 
      onSubmit={onSubmittHandle}
      className="infoForm"
    >
      <h1 className="infoForm__title">Заповніть форму</h1>
      <section className="infoForm__buttons">
          <button 
            type="button"
            className={classNames(
              'buttons',
              {'buttons--active' : individualButton}
            )}
            onClick= {onIndividualButtonClick}
          >
            Фіз. особа
          </button>

          <button 
            type="button"
            className={classNames(
              'buttons',
              'buttons--right',
              {'buttons--active' : legalEntityButton}
            )}
            onClick= {onLegalEntityButtonClick}
          >
            Юр. особа
          </button>
      </section>

      {individualButton &&
      <section className="infoForm__info info">
        <div className="info__part part">
          <div className="part part__container">
            <div className="part__input">
              <p>Ім'я</p>
              <input
                required
                type="text"
                value={name}
                className="input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="part__input">
              <p>Прізвище</p>
              <input
                required
                type="text"
                value={surname}
                className="input"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
          </div>
            
          <div className="part__input">
            <p>Назва компанії, організації</p>
            <input
              required
              type="text"
              value={company} 
              className="input"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="part__input">
            <p>Email-адрес</p>
            <input
              required
              type="email"
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="part__input">
            <p>Номер телефону</p>
            <input
              type="tel"
              value={number}
              className="input"
              onChange={(e) => onlyNumbers(e, setNumber)}
            />
          </div>
        </div>

        <div className="info__part part">
          <div className="part__input">
            <p>Країна</p>
            <input
              required
              type="text"
              value={country}
              className="input"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="part part__container">
            <div className="part__input">
              <p>Місто</p>
              <input
                type="text"
                value={city}
                className="input"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="part__input">
              <p>Штат</p>
              <input
                type="text"
                value={state}
                className="input"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          <div className="part__input">
            <p>Адреса</p>
            <input
              type="text"
              value={address}
              className="input"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="part__input">
            <p>Поштовий індекс</p>
            <input
              type="text"
              value={postIndex} 
              className="input"
              onChange={(e) => onlyNumbers(e, setPostIndex)}
            />
          </div>
        </div>
      </section>
      }

      {individualButton && <>
        <TypeOfHelp />
        <section className="infoForm__submit">
          <button
            type="submit"
            className="infoForm__submit--button"
          >
            Допомогти
          </button>
      </section>
      </>
      }

    </form>
  )
};

export default InfoForm;