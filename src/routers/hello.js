import express, { query } from 'express';
import Web3 from 'web3';

//라우터는 분기를 뜻한다.
const router = express.Router();

const web3 = new Web3('https://public-node-api.klaytnapi.com/v1/baobab');

const addressCheck = (req, res, next) => {
  console.log('??');
  next();
}

router.get('/', (req, res) => {
  console.log('Hi');
  //status code가 200이라면 통신이 잘 되었다는 뜻
  return res.status(200).send('HelloWorld');
});

//params
router.get('/:address', addressCheck, async (req, res) => {
  console.log(req.params.address);
  const address = req.params.address;
  const balance = await web3.eth.getBalance(address);

  return res.status(200).send(balance);
});

export default router;
//http method인 get, post, put, delete 알아두기