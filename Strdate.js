const a="2003-10-07";
const date=new Date(a);
const start=new Date(date.getFullYear(),0,1);
const day=Math.ceil((date-start+1)/(1000*60*60*24));
console.log(day);
