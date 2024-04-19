const createJson = async (req, res) => {
  const file = await req.body;

  console.log('This is the file: ', file);

  if (!file) {
    return { error: "The file is required" };
  }

  return file;
};

export default createJson;
