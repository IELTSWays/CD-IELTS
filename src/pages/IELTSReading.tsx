import { HashLink } from 'react-router-hash-link';
// store
import { useAppSelector } from '@/store/hooks'
// store
import { SplitView } from "@/components/IELTS/SplitView";

import QRadio from '@/components/IELTS/QRadio';
import QMultiCheckBox from '@/components/IELTS/QMultiCheckBox';
import QTextInput from '@/components/IELTS/QTextInput';

import useExam3 from "@/services/Requests/useExam3"

const IELTSReading = () => {

  const { data, isLoading } = useExam3()


  const fontSize = useAppSelector((state) => state.user.fontSize)
  const Q = useAppSelector((state) => state.ielts.questions)

  const options = [
    { text: "Priority 1", value: "P1", selected: false },
    { text: "Priority 2", value: "P2", selected: false },
    { text: "Priority 3", value: "P3", selected: false }
  ];

  const radionOptions = [
    { label: 'TRUE', value: 'TRUE' },
    { label: 'FALSE', value: 'FALSE' },
    { label: 'NOT GIVEN', value: 'NOT GIVEN' },
  ]

  console.log(data?.questions[0]?.question);

  // Write ONE WORD AND/OR A NUMBER for each answer. \n Type of crime:        theft\n Personal information\n Example\n Name                   Louise …Taylor…\n Nationality           1 ………………. \n Date of birth        14 December 1977 \n Occupation           interior designer \n Reason for visit    business (to buy antique 2………………) \n Length of stay       two months \n Current address    3 ………………. Apartments (No 15) \n Details of theft \n Items stolen \n – a wallet containing approximately 4 £ ……………. – a 5 ……………… \n Date of theft         6 ……………… \n Possible time and place of theft \n Location                    outside the 7…………… at about 4 pm \n Details of suspect    – some boys asked for the 8……………. then ran off – one had a T-shirt with a picture of a tiger – he was about 12, slim build with 9…………… hair \n Crime reference number allocated. \n  10…………….

  console.log('[IELTSReading]', Q);

  return (
    <>
      <div className={`ielts-container ${fontSize}`}>
        <SplitView
          left=
          {
            <div className="left ielts-scrollbar">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id maiores corrupti necessitatibus. Vel corrupti minima laborum culpa, necessitatibus eligendi sapiente doloremque nisi, consequuntur sit aperiam! Atque laborum, magnam animi laudantium voluptatibus illo modi voluptatum dolore cumque architecto iusto ducimus placeat explicabo sed natus expedita ex nobis tenetur tempora soluta nam illum perferendis. Amet eaque velit impedit provident, perspiciatis fugiat. Ullam exercitationem maxime perspiciatis blanditiis ipsum asperiores possimus, tempora aspernatur dicta nemo consequuntur, repellat illum recusandae quo voluptates! Maiores optio nihil, velit ea cum illum facilis animi magni maxime officiis fuga nesciunt sed quis. Temporibus quis fuga possimus nulla sint. Iusto.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?

              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>
                      <p>3<em>3333</em>3</p>

                      <p><strong>444444</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <p>6</p>

                      <p>&nbsp;- ggg ${1}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?
            </div>}
          right={
            <div className="right ielts-scrollbar">
              RIGHT
              <hr />
              <div className="ielts-question-title">
                Questions 1-6
              </div>
              <div className='ielts-question-description'>
                we are her
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae,
              </div>
              <div id="q-1">
                <h2>section-one</h2>
                <QRadio
                  options={radionOptions}
                />
              </div>
              <div id="q-2">
                <h2>section-two</h2>
                <QMultiCheckBox options={options} />
              </div>
              <div id="q-3">
                <h2>section-three</h2>
                <QTextInput number="1" textBefore="BEFORE" textAfter="AFTER" init="aa" final={Q}
                />
                {/* <div className='text-field'>
                  <input name="answer1" value={formData.answer1} onChange={handleChange} />
                </div> */}
              </div>
              <section>
                <h2>section-three</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tempora commodi nihil atque nam magnam. Quos sapiente aspernatur officia ad pariatur minima, molestiae maiores odio explicabo earum nulla ullam voluptate eos, sint ratione, nihil cum! Exercitationem fuga sapiente quod quas reiciendis repellat, non temporibus velit nam enim mollitia animi debitis ullam quidem dignissimos sequi error fugiat facilis. Est ipsa sit cupiditate ea voluptas, pariatur vitae fugit magni voluptatem nobis voluptates illo ratione nam quidem, non optio? Soluta, fugiat. Deserunt suscipit explicabo ullam, nesciunt accusamus quasi laudantium officiis veritatis, alias corrupti cum recusandae aspernatur ipsam culpa voluptatibus deleniti quas? Rem, sequi.
              </section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tempora commodi nihil atque nam magnam. Quos sapiente aspernatur officia ad pariatur minima, molestiae maiores odio explicabo earum nulla ullam voluptate eos, sint ratione, nihil cum! Exercitationem fuga sapiente quod quas reiciendis repellat, non temporibus velit nam enim mollitia animi debitis ullam quidem dignissimos sequi error fugiat facilis. Est ipsa sit cupiditate ea voluptas, pariatur vitae fugit magni voluptatem nobis voluptates illo ratione nam quidem, non optio? Soluta, fugiat. Deserunt suscipit explicabo ullam, nesciunt accusamus quasi laudantium officiis veritatis, alias corrupti cum recusandae aspernatur ipsam culpa voluptatibus deleniti quas? Rem, sequi.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, et deserunt nostrum vel vitae in reprehenderit sunt quidem! Recusandae, laboriosam dolorum nam aspernatur libero dicta quaerat incidunt optio odio debitis perspiciatis laudantium aliquid rem eum praesentium suscipit consequuntur tenetur quisquam ullam quos quam temporibus nostrum repudiandae nisi. Provident, repudiandae! Quo tempora nam ducimus sed fugit at debitis incidunt minus molestias dicta alias vel voluptates repellat, quos maiores maxime nisi est beatae, aspernatur modi praesentium quaerat animi? Doloribus perferendis iure corrupti repellendus, reiciendis laudantium distinctio qui vitae adipisci at rem hic nemo quae. Repudiandae debitis ratione dolorem laboriosam neque temporibus placeat?
            </div>
          }
        />
      </div>
      <div className="ielts-navigation">
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
    </>
  );
};

export default IELTSReading;
