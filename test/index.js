import omitProps from '../src/index';

omitProps({ a: 11, b: 22 }, ['a', 'c']);
/*
 out: {
   b: 22
 }
*/
