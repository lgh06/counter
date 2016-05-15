(function(window) {
  var Reminder = function(start,end){
    if(!start){
      start = new Date(2013,5,12);//月份从0到11 所以第二个参数为5
    }
    if(!end){
      end = Date.now();
    }
    var days = moment(end).diff(start,'days');
    var months = moment(end).diff(start,'months');
    var years = moment(end).diff(start,'years');

    //月数 或者 除去整年的月数
    var oM = years?(months-12*years):months;
    //天数 或者 除去 年月 的天数
    var oD = moment(end).diff(moment(start).add(months,'months'),'days');

    var all = (years?(years+'年'):'') + (oM?(oM+'月'):'') + (oD?(oD+'天'):'');

    return {
      days:days,
      months:months,
      years:years,
      all:all
    }

  }

  window.Reminder = Reminder;

  window.onload = function(){
    document.querySelector('body').innerHTML = '我们已相恋'
    + Reminder().all+'('+Reminder().days+'天)';
  }

})(window);