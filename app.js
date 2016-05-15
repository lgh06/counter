(function(window) {
  var Reminder = window.Reminder || {};

  Reminder.all = function(start,end){
    if(!start){
      start = new Date(2013,6,12);
    }
    if(!end){
      end = Date.now();
    }
    var days = moment(end).diff(start,'days');
    var months = moment(end).diff(start,'months');
    var years = moment(end).diff(start,'years');

    console.log(days)
    console.log(months)
    console.log(years)

    //月数 或者 除去整年的月数
    var oM = years?(months-12*years):years;
    //天数 或者 除去 年月 的天数
    var oD = moment(end).diff(moment(end).startOf('month'),'days');

    console.log(years+'年'+oM+'月'+oD+'天')

  }



  window.Reminder = Reminder;
})(window);