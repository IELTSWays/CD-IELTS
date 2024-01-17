import { useState } from 'react'

// mtu
import Typography from '@mui/material/Typography';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
// store

import { SplitView } from "@/components/IELTS/SplitView";
import Title from '@/components/IELTS/Title';
import QTextArea from '@/components/IELTS/QTextArea';

import img from '@/assets/images/ielts/14/Test1 _Task1.jpeg'

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

      <div className={`ielts-container ${fontSize}`}>
        <SplitView
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
              {part === 1 && <QTextArea id="0001" />}
              {part === 2 && <QTextArea id="0002" />}
            </div>
          }
        />
      </div>

      <div>
        <button onClick={() => setPart(1)}> 1 </button>
        <button onClick={() => setPart(2)}> 2 </button>
      </div>
    </>
  );
};

export default index;
