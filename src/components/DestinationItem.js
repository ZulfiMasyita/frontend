import React from 'react';
import { Link } from 'react-router-dom';

function DestinationItem(props) {
  return (
    <>
      <li className='visit__item'>
        <Link className='visit__item__link' to={props.path}>
          <figure className='visit__item__pic-wrap' data-category={props.label}>
            <img
              className='visit__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='visit__item__info'>
            <h5 className='visit__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default DestinationItem;
