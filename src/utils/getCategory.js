import CallApi from './ApiController';
class getCategory {
    static async getSlug() {
        let category = [];
        var result = "";
        await CallApi("/category","GET",null).then(resp =>{
            category = resp.data.data
            
        })
        result =  category.map((category,index) =>{
            return "<AppRouter key="+index+" path=/"+category.slug+".:"+category.categoryId+" exact component={ProductContainer} />"
            
        })
        return result;
      }
    static getCategory(){
        let category = [];
        var result = "";
        result =  category.map((category,index) =>{
            return "<AppRouter key="+index+"path=/"+category.slug+".:"+category.categoryId+" exact component={ProductContainer} />"
            
        })
        return result;
    }
}
export default getCategory;