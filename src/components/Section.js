const Section = (props) => {
  const { time, title, type, duration, image, isUnseen, direct } = props;

  return (
    <div className="container">
      <p className="time">{time}</p>
      <div className="picture">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <p className="title">{title} </p>
        <p className="type">{type}</p>
        <div className="side">
          <p className="duration">{duration}</p>
          {direct && <p className="red">• Direct</p>}
          {isUnseen && <p className="red">• Inédit</p>}
        </div>
      </div>
    </div>
  );
};

export default Section;
