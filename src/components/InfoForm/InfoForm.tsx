import classNames from 'classnames';
import React, { useState } from 'react';
import TypeOfHelp from '../TypeOfHelp/TypeOfHelp';
import './InfoForm.scss'

const InfoForm: React.FC = () => {
  const [individualButton, setIndividualButton] = useState(false);
  const [legalEntityButton, setLegalEntityButton] = useState(false);

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

      <section className="infoForm__info info">
        <div className="info__part part">
            <div className="part part__container">
              <div className="part__input">
                <p>Ім'я</p>
                <input 
                  type="text"
                  className="input"
                />
              </div>

              <div className="part__input">
                <p>Прізвище</p>
                <input 
                  type="text" 
                  className="input"
                />
              </div>
            </div>
            
            <div className="part__input">
              <p>Назва компанії, організації</p>
              <input 
                type="text" 
                className="input"
              />
            </div>

            <div className="part__input">
              <p>Email-адрес</p>
              <input 
                type="email" 
                className="input"
              />
            </div>

            <div className="part__input">
              <p>Номер телефону</p>
              <input 
                type="tel" 
                className="input"
              />
            </div>

        </div>
        <div className="info__part part">
            <div className="part__input">
              <p>Країна</p>
              <input 
                type="text" 
                className="input"
              />
            </div>

            <div className="part part__container">
              <div className="part__input">
                <p>Місто</p>
                <input 
                  type="text" 
                  className="input"
                />
              </div>
              <div className="part__input">
                <p>Штат</p>
                <input 
                  type="text" 
                  className="input"
                />
              </div>
            </div>

            <div className="part__input">
              <p>Адреса</p>
              <input 
                type="text" 
                className="input"
              />
            </div>

            <div className="part__input">
              <p>Поштовий індекс</p>
              <input 
                type="number" 
                className="input"
              />
            </div>
          </div>
      </section>

      <TypeOfHelp />

      <section className="infoForm__submit">
        <button
          type="submit"
          className="infoForm__submit--button"
        >
          Допомогти
        </button>
      </section>

    </form>
  )
};

export default InfoForm;