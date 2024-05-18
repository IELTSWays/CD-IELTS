import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useAppSelector } from '@/store/hooks';

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';

const IELTSArrows = ({ handlePrevious, handleNext }) => {
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion);

  return (
    <div className="arrow-currentQuestion">
      <div className={currentQuestion === 1 ? 'disable' : ''}>
        <HashLink onClick={handlePrevious} smooth to={`#q-${currentQuestion - 1}`}>
          <img src={iLeft} alt="Previous" />
        </HashLink>
      </div>
      <div className={currentQuestion === 40 ? 'disable' : ''}>
        <HashLink onClick={handleNext} smooth to={`#q-${currentQuestion + 1}`}>
          <img src={iRight} alt="Next" />
        </HashLink>
      </div>
    </div>
  );
};

export default IELTSArrows;