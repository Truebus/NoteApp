import express from 'express'; // ES Modules import
import { Create, DeleteAll, DeleteId, GetAll, GetId, Update} from '../Controller/NoteController.js'; // Import with .js extension

const route = express.Router();

route.post('/create', Create);
route.get('/getall',GetAll);
route.get('/getId/:id',GetId);
route.delete('/deleteall',DeleteAll);
route.delete('/delId/:id',DeleteId);
route.put('/update/:id',Update);

export default route;
