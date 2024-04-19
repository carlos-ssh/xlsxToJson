const createJson = async (req, res) => {
  console.log(req);
  console.log(res);

  return { res, req };
};

export default createJson;
