import classNames from 'classnames';
import React, { useState } from 'react';
import './TypeOfHelp.scss'

const TypeOfHelp: React.FC = () => {
  return (
    <div className="help">
      <h1 className="help__title">
        Види допомоги
      </h1>
      <h4 className="help__subtitle">
        Ви можете змінити вид допомоги
      </h4>
    </div>
  );
};

export default TypeOfHelp;