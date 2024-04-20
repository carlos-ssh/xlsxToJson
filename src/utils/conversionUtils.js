export const convertBase64ToJson = (base64) => {
    const text = Buffer.from(base64, 'base64').toString('utf8');

    try {
        const jsonData = JSON.parse(text);
        return jsonData;
    } catch (error) {
        console.error("Failed to parse JSON from base64 text", error);
        return null;
    }
}
