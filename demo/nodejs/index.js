const { Liquid } = require('../../dist/liquid.cjs.js');
const fs = require('fs');
const path = require('path');
const v8 = require('v8');
const heapdump = require('heapdump');

const engine = new Liquid({
  root: __dirname,
  extname: '.liquid'
})

const templateString = fs.readFileSync(path.join(__dirname, 'todolist.liquid'), 'utf8');

const inital_used_heap_size = v8.getHeapStatistics().used_heap_size;

const templates = [];

for (let i = 0; i < 100; i++) {
  templates.push(engine.parse(templateString));
}

Promise.all(templates)
  .then(() => {
    const final_used_heap_size = v8.getHeapStatistics().used_heap_size;
    console.log(final_used_heap_size - inital_used_heap_size);
    heapdump.writeSnapshot('test.heapsnapshot');

  })
  .catch(err => console.error(err.stack));
