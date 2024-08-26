import Title from "../../../componnets/ui/Title";
import Aos from "../../../hooks/Aos";

const Company = () => {
  return (
    <div>
      <div className="">
        <Aos />
        <div data-aos="fade-up">
          <Title
            title="Our happy clients"
            subTitle="client that we have provided our best service"
          />
        </div>
        <img
          data-aos="flip-down"
          src="https://vizmo.in/_nuxt/img/listofclients.d1de4db.jpg"
          className="h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Company;
