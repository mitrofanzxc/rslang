import { FC } from 'react';
import { IWordsResponse } from '../../../../../features/words/wordsSlice.interface';
import cat from '../../../../../images/cat-speak.svg';
import './ButtonSpeak.scss';

export interface IButtonSpeak {
  audio: IWordsResponse | undefined | string;
}

const ButtonSpeak: FC<IButtonSpeak> = ({ audio }) => {
  const handleAudio = () => {
    const sound = new Audio(`https://rs-lang-team-84.herokuapp.com/${audio}`);
    sound.play();
  };

  return (
    <button
      className="sprint-ui__circle sprint-ui__circle_small button-cat-speak"
      onClick={handleAudio}>
      <img src={cat} alt="cat" className="button-cat-speak__img" />
    </button>
  );
};

export { ButtonSpeak };
