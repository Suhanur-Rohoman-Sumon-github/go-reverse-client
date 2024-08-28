import { Skeleton } from "antd";
const Skeletons = () => {
  return (
    <div className="mt-8">
      <Skeleton
        active
        title={false}
        paragraph={{
          rows: 10,
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
          ],
        }}
      />
    </div>
  );
};

export default Skeletons;
