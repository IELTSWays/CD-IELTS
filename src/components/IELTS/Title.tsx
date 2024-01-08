const Title = ({ title, description }: any) => {
  return (
    <div className='ielts-container'>
      <div className='ielts-title'>
        <div> <strong>{title}</strong> </div>
        <div> {description} </div>
      </div>
    </div>
  );
};

export default Title;
