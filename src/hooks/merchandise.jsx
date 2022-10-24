import useAxios from "axios-hooks";

const useMerchandise = () => {
  const [{ ...merchandiseData }, getMerchandise] = useAxios(
    {
      url: "/merchandise",
      method: "get",
    },
    {
      manual: true,
    }
  );
  const handleGetMerchandise = async (params = {}) => {
    await getMerchandise({
      params,
    });
  };

  return {
    merchandiseData,
    handleGetMerchandise,
  };
};
export default useMerchandise;
