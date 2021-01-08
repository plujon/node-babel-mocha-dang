// tape ./tape-me.js

import {plane} from '../src/plane.js'; // ???

var test = require('tape');

test(('a'), (t) => {
  t.plan(1);
  t.equal(1, 1);
});
