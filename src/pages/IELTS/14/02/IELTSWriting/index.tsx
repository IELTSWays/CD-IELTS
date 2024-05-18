import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

// store
import { useAppSelector } from '@/store/hooks'
// store

import IdeClone from "@/components/IELTS/IdeClone"
import IELTSParts from '@/components/IELTS/IELTSParts';
import TextArea from '@/components/IELTS/TextArea';

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';
import img from '@/assets/images/ielts/14/14-Test1-Task1.png'
import IELTSPartNavigation from '@/components/IELTS/IELTSPartNavigation';

const index = () => {

  const [part, setPart] = useState(1)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "You should spend 20 minutes on this task. Write at last 150 Words." },
    { title: "Part 2", description: "You should spend 40 minutes on this task. Write at last 250 Words." },
  ]

  return (
    <>
      <IELTSParts part={part}/>

      <div className='arrow-currentQuestion'>
        <div className={part === 1 && 'disable'}>
          <Link onClick={() => setPart(1)}>
            <img src={iLeft} />
          </Link>
        </div>
        <div className={part === 2 && 'disable'}>
          <Link onClick={() => setPart(2)}>
            <img src={iRight} />
          </Link>
        </div>
      </div>

      <div className={`ielts-container ${fontSize}`}>
        <IdeClone
          left=
          {
            <div className="left ielts-scrollbar">
              {part === 1 &&
                <>
                  <Typography sx={{ mb: 2 }} >
                    <strong>
                      The charts below show the changes in average percentages in typical meals of three types of nutrients, all of which may be unhealthy if eaten too much.
                    </strong>
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    <strong>
                      Summarise the information by selecting and reporting the main features, and make comparison where relevant.
                    </strong>
                  </Typography>
                  <div className="ielts-writing">
                    <img src={img} />
                  </div>
                </>
              }
              {part === 2 &&
                <>
                  <Typography sx={{ mb: 2 }} >
                    Write about the following topic:
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    <strong>
                      Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations.
                    </strong>
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    <strong>
                      Discuss both these views and give your own opinion.
                    </strong>
                  </Typography>
                  <Typography >
                    Give respect for your answer and include any relevant examples from your own knowledge or experience.
                  </Typography>
                </>
              }
            </div>
          }
          right={
            <div className="right ielts-scrollbar">
              {part === 1 && <TextArea id="1" />}
              {part === 2 && <TextArea id="2" />}
            </div>
          }
        />
      </div>
      <IELTSPartNavigation part={part} />
    </>
  );
};

export default index;