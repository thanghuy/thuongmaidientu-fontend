
class getQuery {

    static getSearchParams(params, accepted) {
      const _filters = {...params};
      const searchParams = Object.keys(_filters).map(filterKey => {
        if (!_filters[filterKey])
          return '';
        if ((typeof accepted)!=='undefined') {
          if (!accepted.includes(filterKey))
            return '';
        }
        return `${filterKey}=${_filters[filterKey]}`;
      }).join('&');
      return searchParams;
    }
  }
  export default getQuery;