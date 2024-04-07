const Title = ({ title, description }: any) => {
  return (
    <div className='ielts-container pt-20'>
      <div className='ielts-title'>
        <div> <strong>{title}</strong> </div>
        <div> {description} </div>
      </div>
    </div>
  );
};

export default Title;
