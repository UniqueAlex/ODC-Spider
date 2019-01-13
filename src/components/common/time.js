import moment from 'moment'

export default{
  year: moment().format('Y'),
  month: moment().format('M'),
  date: moment().format('D'),
  week: getWeekNumber(year, month, date),
  weekStartDate: getTime(0),
  weekEndDate: getTime(-6)
}

let year = moment().format('Y');
let month = moment().format('M');
let date = moment().format('D');
let week = getWeekNumber(year, month, date)

function getWeekNumber(y, m, d) {
  var targetDay = new Date(y, m - 1, d);
  var year = targetDay.getFullYear();
  var month = targetDay.getMonth();
  var days = targetDay.getDate();
  //那一天是那一年中的第多少天
  for (var i = 1; i < m; i++) {
      days += getMonthDays(year, i);
  }
  //那一年第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay();
  //计算是第几周
  days += yearFirstDay;
  var week = Math.ceil(days / 7);
  return week;
}

function getTime(n){
  var now=new Date();
  var year=now.getFullYear();
  //因为月份是从0开始的,所以获取这个月的月份数要加1才行
  var month=now.getMonth()+1;	
  var date=now.getDate();
  var day=now.getDay();
  //判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
  if(day!==0){
    n=n+(day-1);
  }
  else{
    n=n+day;
  }
  if(day){
    //这个判断是为了解决跨年的问题
    if(month>1){
      month=month;
    }
    //这个判断是为了解决跨年的问题,月份是从0开始的
    else{
      year=year-1;
      month=12;
    }
  }
  now.setDate(now.getDate()-n);	
  year=now.getFullYear();
  month=now.getMonth()+1;
  date=now.getDate();
  let s=year+"-"+(month<10?('0'+month):month)+"-"+(date<10?('0'+date):date);
  return s;
}



