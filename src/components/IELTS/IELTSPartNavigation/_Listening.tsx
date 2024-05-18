import React from 'react';
import { HashLink } from 'react-router-hash-link';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion } from '@/store/slices/user/userSlice';

const Listening = ({ part, test_name }) => {
  const dispatch = useAppDispatch();
  const { flag: flags, answersAll, currentQuestion } = useAppSelector((state: { user: any; }) => state.user);

  const questions = Array.from({ length: 40 }, (_, index) => ({
    number: index + 1,
  }));

  const renderQuestions = (start: number | undefined, end: number | undefined) =>
    questions.slice(start, end).map((i) => (
      <div
        key={i.number}
        className={`${currentQuestion === i.number.toString() ? 'active' : ''}`}
        id={`item-${i.number}`}
        data-answer={answersAll[i.number]?.length > 0 ? 'answered' : ''}
      >
        <HashLink
          onClick={() => dispatch(setCurrentQuestion(i.number.toString()))}
          smooth
          to={`#q-${i.number}`}
        >
          <span>
            {flags[i.number] && <BookmarkIcon color='error' />}
            {i.number}
          </span>
        </HashLink>
      </div>
    ));

  const renderPartCounter = (partNumber) => (
    <div className='navigation-part-counter'>
      {part > partNumber ? (
        <>
          <DoneIcon color='success' sx={{ mr: 1 }} />
          <div>Part {partNumber}</div>
        </>
      ) : (
        <>
          <div>Part {partNumber}</div>
          <div>{currentQuestion - 1} of 10</div>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className='ielts-navigation' id={test_name}>
        {[1, 2, 3, 4].map((p) => (
          <div
            key={p}
            className={`navigation-part ${part === p ? 'active' : ''} ${part > p ? 'done' : ''}`}
          >
            <div className='navigation-part-title'>
              <span>Part {p}</span>
            </div>
            <div className='navigation-part-items'>{renderQuestions((p - 1) * 10, p * 10)}</div>
            {renderPartCounter(p)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Listening;