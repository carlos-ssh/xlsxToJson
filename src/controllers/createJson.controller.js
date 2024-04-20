import { convertBase64ToJson } from '../utils/conversionUtils.js';

const convertFileToJson = async (req, res) => {
    const base64String = req.body.file;

    console.log('This is the file: ', base64String);

    if (!base64String) {
        return res.status(400).json({ error: "The file is required" });
    }

    try {
        const jsonData = convertBase64ToJson(base64String);
        return res.status(200).json(jsonData);
    } catch (error) {
        console.error("Failed to convert the file", error);
        return res.status(500).json({ error: "Failed to convert the file" });
    }
};

export default convertFileToJson;
