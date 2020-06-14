class getQuery {

    static getFilter(filter,Query2,replace,page) {
      var _filter = "";
      var list = filter === "" ? [] : filter.split("?")[1].split("&");
      if(filter === ""){
        _filter = "current=1" + filter + "&" + Query2;
      }
      else if(list.includes(Query2)){
        _filter = this.setPage(filter,page);
      }
      else if(!list.includes(Query2) && !list.includes(replace)){ 
        _filter = this.setPage(filter,page) + "&" + Query2;
      }
      else{
        var filter1 = this.setPage(filter,page);
        _filter = filter1.replace(replace,Query2);
      }
      return _filter;
    }
    static sortPriceFromTo(filter,priceFrom,priceTo,priceOld1,priceOld2,page){
      var _filter = "";
      var list = filter === "" ? [] : filter.split("?")[1].split("&");
      var priceMin = "priceFrom=" +priceFrom;
      var priceMax = "priceTo="+priceTo;
      var priceOldMin = "priceFrom=" + priceOld1;
      var priceOldMax = "priceTo=" + priceOld2;
      if(filter === ""){
        _filter = "current=1&" + priceMin + "&" + priceMax;
      }
      else if(list.includes(priceMin) && list.includes(priceMax)){
        _filter = this.setPage(filter,page);
      }
      else if(!list.includes(priceMin) && !list.includes(priceMax) && !list.includes(priceOldMin) && !list.includes(priceOldMax)){
        _filter = this.setPage(filter,page) + "&" + priceMin + "&" + priceMax;
      }
      else{
        var filter1 = this.setPage(filter,page);
        var old = "&"+priceOldMin + "&" + priceOldMax;
        var NewFilter = "&" + priceMin + "&" + priceMax;
        _filter = filter1.replace(old,NewFilter);
      }
      return _filter;

    }
    static JoinQuery(data){
      var list = data;
      
      list.splice(0,1,"current=1");
      var query = list.join("&");
      return query;
    }
    static setPage(filter,Page){
      var current = "current="+Page;
      var query = filter.replace(current,"current=1");
      return query;
    }
  }
  export default getQuery;