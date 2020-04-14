const Imgbb = require('../lib');

const imgbb = new Imgbb({
  key: process.env.KEY,
});

test('Imgbb upload success', (done) => {
  imgbb.upload(process.env.IMAGE_URL)
      .then(({status}) => {
        expect(status === 200).toBe(true);
        done();
      });
});

test('Imgbb upload error', (done) => {
  imgbb.upload()
      .then(({status}) => {
        expect(status === 400).toBe(true);
        done();
      });
});

