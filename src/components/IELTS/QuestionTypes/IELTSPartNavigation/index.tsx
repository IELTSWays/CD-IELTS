// import React from 'react';
// import { HashLink } from 'react-router-hash-link';

// import DoneIcon from '@mui/icons-material/Done';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// import { useAppSelector, useAppDispatch } from '@/store/hooks';
// import { setCurrentQuestion } from '@/store/slices/user/userSlice';

// const index = ({ part }) => {
//   const dispatch = useAppDispatch();

//   const flags = useAppSelector((state: { user: { flag: any; }; }) => state.user.flag);
//   const answersAll = useAppSelector((state: { user: { answersAll: any; }; }) => state.user.answersAll);
//   const currentQuestion = useAppSelector((state: { user: { currentQuestion: any; }; }) => state.user.currentQuestion);

//   const questions = Array.from({ length: 40 }, (_, index) => ({
//     number: index + 1,
//     label: (index + 1).toString(),
//   }));

//   return (
//     <>
//       <div className="ielts-navigation" id="ielts-listening-1401">

//         <div className={`navigation-part ${part === 1 && 'active'} ${part > 1 && 'done'}`}>
//           <div className="navigation-part-title">
//             <span>Part 1</span>
//           </div>
//           <div className="navigation-part-items">
//             {questions.slice(0, 10).map((i) => {
//               return (
//                 <div
//                   className={currentQuestion == `${i.number}` && 'active'}
//                   id={`item-${i.number}`}
//                   data-answer={`${answersAll[i.number]?.length > 0 && 'answered'}`}
//                 >
//                   <HashLink
//                     onClick={() => dispatch(setCurrentQuestion(i.number.toString()))}
//                     smooth
//                     to={`#q-${i.number}`}
//                   >
//                     <span>
//                       <>
//                         {flags[i.number] && <BookmarkIcon color={'error'} />}
//                       </>
//                       {i.number}
//                     </span>
//                   </HashLink>
//                 </div>
//               )
//             })}
//           </div>
//           <div className='navigation-part-counter'>
//             {part > 1 ?
//               <>
//                 <DoneIcon color="success" sx={{ mr: 1 }} />
//                 <div>Part 1</div>
//               </>
//               :
//               <>
//                 <div>Part 1</div>
//                 <div> 0 of 10 </div>
//               </>
//             }
//           </div>
//         </div>

//         <div className={`navigation-part ${part === 2 && 'active'} ${part > 2 && 'done'}`}>
//           <div className="navigation-part-title">
//             <span>Part 2</span>
//           </div>
//           <div className="navigation-part-items">
//             {questions.slice(10, 20).map((i) => {
//               return (
//                 <div
//                   className={currentQuestion == `${i.label}` && 'active'}
//                   id={`item-${i.number}`}
//                   data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
//                 >
//                   <HashLink
//                     onClick={() => dispatch(setCurrentQuestion(i.label))}
//                     smooth
//                     to={`#q-${i.label}`}
//                   >
//                     <span>
//                       <>
//                         {flags[i.number] && <BookmarkIcon color={'error'} />}
//                       </>
//                       {i.label}
//                     </span>
//                   </HashLink>
//                 </div>
//               )
//             })}
//           </div>
//           <div className='navigation-part-counter'>
//             {part > 2 ?
//               <>
//                 <DoneIcon color="success" sx={{ mr: 1 }} />
//                 <div>Part 2</div>
//               </>
//               :
//               <>
//                 <div>Part 2</div>
//                 <div> 0 of 10 </div>
//               </>
//             }
//           </div>
//         </div>

//         <div className={`navigation-part ${part === 3 && 'active'} ${part > 3 && 'done'}`}>
//           <div className="navigation-part-title">
//             <span>Part 3</span>
//           </div>
//           <div className="navigation-part-items">
//             {questions.slice(20, 30).map((i) => {
//               return (
//                 <div
//                   className={currentQuestion == `${i.label}` && 'active'}
//                   id={`item-${i.number}`}
//                   data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
//                 >
//                   <HashLink
//                     onClick={() => dispatch(setCurrentQuestion(i.label))}
//                     smooth
//                     to={`#q-${i.label}`}
//                   >
//                     <span>
//                       <>
//                         {flags[i.number] && <BookmarkIcon color={'error'} />}
//                       </>
//                       {i.label}
//                     </span>
//                   </HashLink>
//                 </div>
//               )
//             })}
//           </div>
//           <div className='navigation-part-counter'>
//             {part > 3 ?
//               <>
//                 <DoneIcon color="success" sx={{ mr: 1 }} />
//                 <div>Part 3</div>
//               </>
//               :
//               <>
//                 <div>Part 3</div>
//                 <div> 0 of 10 </div>
//               </>
//             }
//           </div>
//         </div>

//         <div className={`navigation-part ${part === 4 && 'active'}`}>
//           <div className="navigation-part-title">
//             <span>Part 4</span>
//           </div>
//           <div className="navigation-part-items">
//             {questions.slice(30, 40).map((i) => {
//               return (
//                 <div
//                   className={currentQuestion == `${i.label}` && 'active'}
//                   id={`item-${i.number}`}
//                   data-answer={`${answersAll[i.label]?.length > 0 && 'answered'}`}
//                 >
//                   <HashLink
//                     onClick={() => dispatch(setCurrentQuestion(i.number))}
//                     smooth
//                     to={`#q-${i.label}`}
//                   >
//                     <span>
//                       <>
//                         {flags[i.number] && <BookmarkIcon color={'error'} />}
//                       </>
//                       {i.label}
//                     </span>
//                   </HashLink>
//                 </div>
//               )
//             })}
//           </div>
//           <div className='navigation-part-counter'>
//             <div>Part 4</div>
//             <div> 0 of 10 </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion } from '@/store/slices/user/userSlice';

const index = ({ part }) => {
  const dispatch = useAppDispatch();
  const { flag: flags, answersAll, currentQuestion } = useAppSelector((state: { user: any; }) => state.user);

  const questions = Array.from({ length: 40 }, (_, index) => ({
    number: index + 1,
    label: (index + 1).toString(),
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
      <div className='ielts-navigation' id='ielts-listening-1401'>
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

export default index;