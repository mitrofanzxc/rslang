import { FC } from 'react';
import { ICircle } from './Cicle.interface';

const Circle: FC<ICircle> = ({ title, value }) => {
  return (
    <div className="sprint-ui__circle user-select_none">
      {title}
      <br />
      {value}
    </div>
  );
};

export { Circle };
