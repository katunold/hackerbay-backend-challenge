import chai from 'chai';
import server from '../src';
import loginUserHelper from './helpers/loginHelper';

const { expect } = chai;

describe('JSON patch route', () => {
  it('should update the user object with a new field', async () => {
    const loginResponse = await loginUserHelper({
      userName: 'Arnold',
      password: '1qaz2wsx',
    });

    const { token } = loginResponse.body.accessToken;
    const patchResponse = await chai
      .request(server)
      .patch('/update')
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send({
        email: 'katunold94@gmail.com',
        userName: 'Arnold Katumba',
      });

    expect(patchResponse).to.status(200);
  });
});
