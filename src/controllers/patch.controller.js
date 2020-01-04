import * as jsonPatch from 'jsonpatch';
import user from '../models/user.model';

export default class PatchController {
  static thePatch = [];
  static patchUserData = (req, res) => {
    const { body } = req;
    const userKeys = Object.keys(user);
    const reqKeys = Object.keys(body);

    reqKeys.forEach((key) => {
      let dataObj;
      if (userKeys.includes(key)) {
        dataObj = {
          op: 'replace',
          path: `/${key}`,
          value: `${body[key]}`,
        };
        this.thePatch.push(dataObj);
      }
      dataObj = { op: 'add', path: `/${key}`, value: `${body[key]}` };
      this.thePatch.push(dataObj);
    });
    const patchedDoc = jsonPatch.apply_patch(user, this.thePatch);

    return res.status(200).send(patchedDoc);
  };
}
