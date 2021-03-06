import React from 'react';
import InputSearch from 'components/InputSearch';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function DogsRecipesSearcher({ onSearchChange }: PropsFromRedux): JSX.Element {
  const onInputSearchChange = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    const { value } = evt.currentTarget;

    if ((evt.keyCode === 13 || evt.charCode === 13) && value.length > 2) {
      onSearchChange(encodeURIComponent(value).replace(/%2C/g, ','));
    }
  };

  return (
    <div className="c-dogs-recipes-searcher t-bg--white u-padding--top-md u-padding--bottom u-padding--left u-padding--right">
      <div className="o-container">
        <InputSearch onKeyPress={onInputSearchChange} />
      </div>
    </div>
  );
}
