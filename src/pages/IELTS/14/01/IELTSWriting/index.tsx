import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

// mtu
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
// store

import IdeClone from "@/components/IELTS/IdeClone"
import Title from '@/components/IELTS/Title';
import QTextArea1 from '@/components/IELTS/QTextArea/Q1';
import QTextArea2 from '@/components/IELTS/QTextArea/Q2';

import iLeft from '@/assets/images/CharmArrowLeft.svg';
import iRight from '@/assets/images/CharmArrowRight.svg';
import img from '@/assets/images/ielts/14/14-Test1-Task1.png'

const index = () => {

  const [part, setPart] = useState(1)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "You should spend 20 minutes on this task. Write at last 150 Words." },
    { title: "Part 2", description: "You should spend 40 minutes on this task. Write at last 250 Words." },
  ]

  return (
    <>
      <Title title={parts[part - 1].title} description={parts[part - 1].description} />

      <div className='arrow-currentQuestion'>
        <div className={part === 1 && 'disable'}>
          <Link onClick={() => setPart(1)} to={''}>
            <img src={iLeft} />
          </Link>
        </div>
        <div className={part === 2 && 'disable'}>
          <Link onClick={() => setPart(2)} to={''}>
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
              {part === 1 && <QTextArea1 id="0001" />}
              {part === 2 && <QTextArea2 id="0002" />}
            </div>
          }
        />
      </div>
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
    </>
  );
};

export default index;