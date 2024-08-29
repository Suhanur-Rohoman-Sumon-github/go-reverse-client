import { Skeleton } from "antd";
const Skeletons = () => {
  return (
    <div className=" w-9/12 mx-auto mt-24">
      <Skeleton
        active
        title={false}
        paragraph={{
          rows: 20,
          width: [
            "90%",
            "80%",
            "70%",
            "50%",
            "40%",
            "90%",
            "80%",
            "70%",
            "50%",
            "40%",
            "90%",
            "80%",
            "70%",
            "50%",
            "40%",
            "90%",
            "80%",
            "70%",
            "50%",
            "40%",
          ],
        }}
      />
    </div>
  );
};

export default Skeletons;
