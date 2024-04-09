import React from "react";

const Title = ({ title, description }: any) => {
  return (
    <div className='ielts-container pt-10'>
      <div className='ielts-title'>
        <div>
          <strong className="pr-10">
            {title}
          </strong>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Title;