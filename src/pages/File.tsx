import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import PieChart from "@/components/Chars/PieChart";

import Logo from "@/assets/images/logo.png";

const options: Options = {
  filename: "advanced-example.pdf",
  method: "save",
  resolution: Resolution.EXTREME,
  page: {
    margin: Margin.SMALL,
    format: "A4",
    orientation: "landscape"
  },
  canvas: {
    mimeType: "image/jpeg",
    qualityRatio: 1
  },
  overrides: {
    pdf: {
      compress: true
    },
    canvas: {
      useCORS: true
    }
  }
};

const File = () => {

  const getTargetElement = () => document.getElementById("pdf-container");
  const downloadPdf = () => generatePDF(getTargetElement, options);

  return (
    <>
      <br />
      <button onClick={downloadPdf} className="pdf-button">
        Download PDF
      </button>
      <div id="pdf-container">
        <div className="pdf-container">
          <div className="justify-content-space-between">
            <div>
              <h2 className="m-0">
                IELTSWays
              </h2>
              <h4 className="m-0 text-align-left">
                Test Report
              </h4>
            </div>
            <img
              src={Logo}
              alt="IELTSWays"
              width="200px"
            />
          </div>
          <div className="justify-content-space-between">
            <ul id="list-red-bullet">
              <li>
                <strong>Candidate Name: </strong> Meisam Sadeghi
              </li>
              <li>
                <strong>Exam ID: </strong> 8AZ1G13OYCR6
              </li>
              <li>
                <strong>Exam Date: </strong> 2023-10-16 (1402-10-11)
              </li>
            </ul>
            <ul id="list-red-bullet">
              <li>
                <strong>Score: </strong> 7.3
              </li>
              <li>
                <strong>Skill: </strong> Reading
              </li>
              <li>
                <strong>Exam: </strong> Book 1, Test 1, Academic
              </li>
            </ul>
          </div>
          <div className="justify-content-space-between wrap">
            <table>
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Correct</th>
                  <th>Wrong</th>
                  <th>NA</th>
                  <th>% of Correct</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-column="Part">1</td>
                  <td data-column="Correct">10</td>
                  <td data-column="Wrong">12</td>
                  <td data-column="NA">10</td>
                  <td data-column="%ofCorrect">10 %</td>
                </tr>
                <tr>
                  <td data-column="Part">2</td>
                  <td data-column="Correct">4</td>
                  <td data-column="Wrong">23</td>
                  <td data-column="NA">9</td>
                  <td data-column="%ofCorrect">12 %</td>
                </tr>
                <tr>
                  <td data-column="Part">3</td>
                  <td data-column="Correct">21</td>
                  <td data-column="Wrong">12</td>
                  <td data-column="NA">2</td>
                  <td data-column="%ofCorrect">4 %</td>
                </tr>
                <tr>
                  <td data-column="Part">4</td>
                  <td data-column="Correct">3</td>
                  <td data-column="Wrong">2</td>
                  <td data-column="NA">4</td>
                  <td data-column="%ofCorrect">40 %</td>
                </tr>
                <tr>
                  <td data-column="Part">Total</td>
                  <td data-column="Correct">4</td>
                  <td data-column="Wrong">34</td>
                  <td data-column="NA">6</td>
                  <td data-column="%ofCorrect">10 %</td>
                </tr>
              </tbody>
            </table>
            <div className="pieChart">
              <PieChart />
            </div>
          </div>
          <div className="d-flex mt-20">
            <ul id="list-red-bullet">
              <li>
                <strong>Analysis: </strong>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem minima ex eos ab doloremque mollitia qui quo quae architecto, sit quaerat voluptas neque unde atque, perferendis tempore cumque aperiam voluptatibus in saepe modi eius quisquam? Cumque, neque commodi voluptatum ut, temporibus tenetur iste, accusamus quae placeat illo reprehenderit impedit.
              </li>
            </ul>
          </div>
          <div className="d-flex mt-20">
            <ul id="list-red-bullet">
              <li>
                <strong>View Full Report: </strong> <a href="https://ieltsways.com/panel/report/8AZ1G13OYCR6">https://ieltsways.com/panel/report/8AZ1G13OYCR6</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="justify-content-space-between pdf-footer">
            <div>
              <a href="https://ieltsways.com">
                https://ieltsways.com
              </a>
            </div>
            <div>whatsapp:
              <a href="https://api.whatsapp.com/send?phone=98913456789">
                +98-912-345-6789
              </a>
            </div>
            <div>telegram:
              <a href="https://t.me/123">
                @ieltsways
              </a>
            </div>
            <div>instagram:
              <a href="https://www.instagram.com/123">
                @ieltsways
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default File;