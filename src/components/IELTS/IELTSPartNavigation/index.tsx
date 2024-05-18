import React from 'react';
import { HashLink } from 'react-router-hash-link';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion } from '@/store/slices/user/userSlice';

const Index = ({ part }) => {

  const dispatch = useAppDispatch();
  const { flag: flags, answersAll, currentQuestion } = useAppSelector((state) => state.user);

  const questions = Array.from({ length: 40 }, (_, index) => ({
    number: index + 1,
  }));

  return (
    <>
      {localStorage.getItem('test_skill') == 'listening' &&
        <div className="ielts-navigation" id={localStorage.getItem('test_name')}>
          <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 1</span>
            </div>
            <div className="navigation-part-items">

              {questions.slice(0, 10).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 1 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 1</div>
                </>
                :
                <>
                  <div>Part 1</div>
                  <div> 0 of 10 </div>
                </>
              }
            </div>
          </div>

          <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 2</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(10, 20).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 2 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 2</div>
                </>
                :
                <>
                  <div>Part 2</div>
                  <div> 0 of 10 </div>
                </>
              }
            </div>
          </div>

          <div className={`navigation-part ${part === 3 && 'active'} ${part > 3 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 3</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(20, 30).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 3 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 3</div>
                </>
                :
                <>
                  <div>Part 3</div>
                  <div> 0 of 10 </div>
                </>
              }
            </div>
          </div>

          <div className={`navigation-part ${part === 4 && 'active'}`}>
            <div className="navigation-part-title">
              <span>Part 4</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(30, 40).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              <div>Part 4</div>
              <div> 0 of 10 </div>
            </div>
          </div>
        </div>
      }

      {localStorage.getItem('test_skill') == 'reading' &&
        <div className="ielts-navigation" id={localStorage.getItem('test_name')}>
          <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 1</span>
            </div>
            <div className="navigation-part-items">

              {questions.slice(0, 13).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 1 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 1</div>
                </>
                :
                <>
                  <div>Part 1</div>
                  <div> 0 of 13 </div>
                </>
              }
            </div>
          </div>

          <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 2</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(13, 26).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 2 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 2</div>
                </>
                :
                <>
                  <div>Part 2</div>
                  <div> 0 of 13 </div>
                </>
              }
            </div>
          </div>

          <div className={`navigation-part ${part === 3 && 'active'} ${part > 3 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 3</span>
            </div>
            <div className="navigation-part-items">
              {questions.slice(26, 40).map((i) => {
                return (
                  <div
                    className={currentQuestion == `${i.number}` && 'active'}
                    id={`item-${i.number}`}
                    data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
                  >
                    <HashLink
                      onClick={() => dispatch(setCurrentQuestion(i.number))}
                      smooth
                      to={`#q-${i.number}`}
                    >
                      <span>
                        <>
                          {flags[i.number] && <BookmarkIcon color={'error'} />}
                        </>
                        {i.number}
                      </span>
                    </HashLink>
                  </div>
                )
              })}
            </div>
            <div className='navigation-part-counter'>
              {part > 3 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 3</div>
                </>
                :
                <>
                  <div>Part 3</div>
                  <div> 0 of 8 </div>
                </>
              }
            </div>
          </div>
        </div>
      }
      {localStorage.getItem('test_skill') == 'writing' &&
        <div className="ielts-navigation" id="ielts-writing">
          <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 1</span>
            </div>
            <div className='navigation-part-counter'>
              {part > 1 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 1</div>
                </>
                :
                <>
                  <div>Part 1</div>
                  <div> 0 of 1 </div>
                </>
              }
            </div>
          </div>
          <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
            <div className="navigation-part-title">
              <span>Part 2</span>
            </div>
            <div className='navigation-part-counter'>
              {part > 2 ?
                <>
                  <DoneIcon color="success" sx={{ mr: 1 }} />
                  <div>Part 2</div>
                </>
                :
                <>
                  <div>Part 2</div>
                  <div> 0 of 1 </div>
                </>
              }
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Index;