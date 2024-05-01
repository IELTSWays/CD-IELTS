const partsData = {
  reading: [
    { title: "Part 1", description: "Read the text and answer questions 1-13." },
    { title: "Part 2", description: "Read the text and answer questions 13-20." },
    { title: "Part 3", description: "Read the text and answer questions 21-40." },
  ],
  listening: [
    { title: "Part 1", description: "Listen and answer question 1-10." },
    { title: "Part 2", description: "Listen and answer question 11-20." },
    { title: "Part 3", description: "Listen and answer question 21-30." },
    { title: "Part 4", description: "Listen and answer question 31-40." },
  ],
  writing: [
    { title: "Part 1", description: "You should spend 20 minutes on this task. Write at last 150 Words." },
    { title: "Part 2", description: "You should spend 40 minutes on this task. Write at last 250 Words." },
  ],
};

const Parts = ({ skill, part }) => {
  const partInfo = partsData[skill]?.[part - 1];

  return (
    <div className='ielts-container pt-10'>
      {partInfo && (
        <div className='ielts-title'>
          <div>
            <strong className="pr-10">
              {partInfo.title}
            </strong>
            {partInfo.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Parts;