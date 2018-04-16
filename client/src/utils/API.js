import axios from "axios";

export default {
  getCategories:function(){
      return axios.get("/api/categories");
  },
  getCategoriesLevel:function(parentCatName){
      return axios.get("/api/categories/"+parentCatName);
  }
};
