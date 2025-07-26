let value : unknown = 30;
value = "String value";
value = new Array();
if(value instanceof Array){
value.push(33);
}
console.log(value);