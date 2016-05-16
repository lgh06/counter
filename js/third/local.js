  var local = window.local || {};
  window.local = local;

  /**
   * 小斑马 localStorage 辅助方法
   * @author github.com/lgh06
   * @date   2016-03-09T10:54:13+0800
   * @param  {String}                 key  [键名]
   * @param  {String}                 item [值]
   */
  local.set = function (key,item){
    window.localStorage ? window.localStorage.setItem(key,JSON.stringify(item)) : 0;
  }

  local.get = function (key){
    return window.localStorage ? JSON.parse( window.localStorage.getItem(key) ) : '';
  }

  local.del = function (key){
    window.localStorage ? window.localStorage.removeItem(key) : 0;
  }

  local.clear = function(not){
    if(typeof not === 'string' || typeof not === 'undefined'){
      window.localStorage 
      ?
      Object.keys(window.localStorage).forEach(function(v,i,a){
        if( v !== not){
          local.del(v);
        }
      })
      :
      0 ;
    }
    if( typeof not == 'object' && not.length > 0 ){
      var localArr = Object.keys(window.localStorage);

      localArr.forEach(function(v,i,a){
        not.forEach(function(vv,ii,aa){
          if(vv == v){
            delete localArr[i]
          }
        });
      })

      localArr.forEach(function(v,i,a){
        local.del(v);
      });
    }
  }