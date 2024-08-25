type TTitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TTitleProps) => {
  return (
    <div data-aos="fade-up" className="text-center  px-4 my-16">
      <h1 className="text-primary">{title}</h1>
      <p className="text-secondary">{subTitle}</p>
    </div>
  );
};

export default Title;
