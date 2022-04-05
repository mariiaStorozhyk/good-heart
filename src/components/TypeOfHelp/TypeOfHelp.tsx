import classNames from 'classnames';
import React, { useState } from 'react';
import TypeOfPayment from '../TypeOfPayment/TypeOfPayment';
import './TypeOfHelp.scss'

const TypeOfHelp: React.FC = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="help">
      <h1 className="help__title">
        Види допомоги
      </h1>
      <h4 className="help__subtitle">
        Ви можете змінити вид допомоги
      </h4>

      <div className="help__types">
        <div className="type">
          <button
            type="button"
            className={classNames(
              'type__button',
              'type__button--hand',
              {'type__button--active': selectedType === 'hand'}
            )}
            onClick={() => setSelectedType('hand')}
          ></button>
          
          <p className={classNames(
              {'type__active': selectedType === 'hand'}
            )}>Зробити</p>
        </div>

        <div className="type">
          <button
            type="button" 
            className={classNames(
              'type__button',
              'type__button--portmone',
              {'type__button--active': selectedType === 'portmone'}
            )}
            onClick={() => setSelectedType('portmone')}
          ></button>

          <p className={classNames(
              {'type__active': selectedType === 'portmone'}
            )}>Фінансова<br /> допомога</p>
        </div>

        <div className="type">
          <button
            type="button"
            className={classNames(
              'type__button',
              'type__button--clothes',
              {'type__button--active': selectedType === 'clothes'}
            )}
            onClick={() => setSelectedType('clothes')}
          ></button>

          <p className={classNames(
              {'type__active': selectedType === 'clothes'}
            )}>Матеріальна<br /> допомога</p>
        </div>

        <div className="type">
          <button
            type="button"
            className={classNames(
              'type__button',
              'type__button--heart',
              {'type__button--active': selectedType === 'heart'}
            )}
            onClick={() => setSelectedType('heart')}
          ></button>

          <p className={classNames(
              {'type__active': selectedType === 'heart'}
            )}>Волонтерство</p>
        </div>
      </div>

      {selectedType !== '' && <TypeOfPayment />}
    </div>
  );
};

export default TypeOfHelp;