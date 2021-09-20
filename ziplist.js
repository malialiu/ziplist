function zipList(list1,list2){
  let list = [];
  if(list1.length === list2.length){
    for(let i = 0; i < list1.length; i++){
      list.push(list1[i]);
      list.push(list2[i]);
    }
  }
  return list;
}

function zipListTheSimpleWay(list1,list2){
  return _.reduce(_.zip(list1,list2),function(a,b){return a.concat(b)});
}
const list1 = [1,2,3];
const list2 = ['a','b','c'];

console.log(zipList(list1,list2));
console.log(zipListTheSimpleWay(list1,list2));
