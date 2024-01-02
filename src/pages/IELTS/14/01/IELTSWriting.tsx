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

const IELTSWriting = () => {

  const [part, setPart] = useState(2)

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const parts = [
    { title: "Part 1", description: "You should spend 20 minutes on this task. Write at last 150 Words." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
  ]

  return (
    <>
      <Title title={parts[part - 1].title} description={parts[part - 1].description} />

      <div className={`ielts-contaner ${fontSize}`}>
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
              {part === 1 && <QTextArea id="q1" />}
              {part === 2 && <QTextArea id="q2" />}
            </div>
          }
        />
      </div>

      {/* <div className="ielts-navigation">
        <div className="navigation-part active">
          <div className="navigation-part-title">
            <span>Part 1</span>
          </div>      <div className="ielts-navigation">
        <div className="navigation-part active">
          <div className="navigation-part-title">
            <span>Part 1</span>
          </div>
          <div className="navigation-part-items">
            <div className="active">
              <HashLink smooth to={'#q-1'}>
                <span>1</span>
              </HashLink>
            </div>
            <div>
              <HashLink smooth to={'#q-2'}>
                <span>2</span>
              </HashLink>
            </div>
            <div>
              <span>3 </span>
            </div>
            <div> <span>4 </span> </div>
            <div> <span>5 </span> </div>
            <div> <span>6 </span> </div>
            <div> <span>7 </span> </div>
            <div> <span>8 </span> </div>
            <div> <span>9 </span> </div>
            <div> <span>10</span>  </div>
            <div> <span>11</span>  </div>
            <div> <span>12</span>  </div>
            <div> <span>13</span>  </div>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 2</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 3</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>
      </div>
          <div className="navigation-part-items">
            <div className="active">
              <HashLink smooth to={'#q-1'}>
                <span>1</span>
              </HashLink>
            </div>
            <div>
              <HashLink smooth to={'#q-2'}>
                <span>2</span>
              </HashLink>
            </div>
            <div>
              <span>3 </span>
            </div>
            <div> <span>4 </span> </div>
            <div> <span>5 </span> </div>
            <div> <span>6 </span> </div>
            <div> <span>7 </span> </div>
            <div> <span>8 </span> </div>
            <div> <span>9 </span> </div>
            <div> <span>10</span>  </div>
            <div> <span>11</span>  </div>
            <div> <span>12</span>  </div>
            <div> <span>13</span>  </div>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 2</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>

        <div className="navigation-part">
          <div className="navigation-part-title">
            <span>Part 3</span>
          </div>
          <div className="navigation-part-counter">
            <span> 0 </span> of <span> 13 </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default IELTSWriting;
