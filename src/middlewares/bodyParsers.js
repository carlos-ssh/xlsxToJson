import bodyParser from 'body-parser';

const jsonParser = bodyParser.json({ limit: '50mb' });
const urlencodedParser = bodyParser.urlencoded({ extended: true, limit: '50mb' });

export { jsonParser, urlencodedParser };
