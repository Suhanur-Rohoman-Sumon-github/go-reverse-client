import Title from "../../../componnets/ui/Title";

const Company = () => {
  return (
    <div>
      <Title
        title="Our happy clients"
        subTitle="client that we have provided our best service"
      />
      <img
        src="https://vizmo.in/_nuxt/img/listofclients.d1de4db.jpg"
        className="h-full w-full"
        alt=""
      />
    </div>
  );
};

export default Company;
