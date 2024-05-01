import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion } from '@/store/slices/user/userSlice';

const Reading = ({ part }) => {
  const dispatch = useAppDispatch();
  const { flag: flags, currentQuestion, answersAll } = useAppSelector((state) => state.user);

  const questions = Array.from({ length: 40 }, (_, index) => ({ number: index + 1 }));

  const getNavigationPartClassName = (partNumber) =>
    `navigation-part ${part === partNumber && 'active'} ${part > partNumber && 'done'}`;

  useEffect(() => {
    if (currentQuestion === 14 || currentQuestion === 27) {
      window.scrollTo(0, 0);
    }
  }, [currentQuestion]);

  return (
    <>
      <div className="ielts-navigation" id="ielts-reading-1401">
        {[1, 2, 3].map(partNumber => (
          <div key={partNumber} className={getNavigationPartClassName(partNumber)}>
            <div className="navigation-part-title">
              <span>Part {partNumber}</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(
                (partNumber - 1) * 13,
                partNumber * 13 + (partNumber === 3 ? 1 : 0) // Add 1 extra question to the last part
              ).map(question => (
                <div
                  key={question.number}
                  className={currentQuestion === question.number && 'active'}
                  id={`item-${question.number}`}
                  data-answer={answersAll[question.number]?.length > 0 && 'answered'}
                >
                  <HashLink
                    onClick={() => dispatch(setCurrentQuestion(question.number))}
                    smooth
                    to={`#q-${question.number}`}
                  >
                    <span>
                      {flags[question.number] && <BookmarkIcon color={'error'} />}
                      {question.number}
                    </span>
                  </HashLink>
                </div>
              ))}
            </div>
            <div className='navigation-part-counter'>
              {part > partNumber ? (
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part {partNumber}</div>
                </>
              ) : (
                <>
                  <div>Part {partNumber}</div>
                  <div>0 of {partNumber === 3 ? 14 : 13}</div> {/* Update the counter for the last part */}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reading;