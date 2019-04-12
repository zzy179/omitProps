import omitProps from "../index"
omitProps({ a: 11, b: 22 }, ["a", "c"])
/*
 out: {
   b: 22
 }
*/
