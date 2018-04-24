import axios from "axios";

export default {
    getCategories: function () {
        return axios.get("/api/categories");
    },
    getCategoriesByParent: function (parentCatId) {
        return axios.get("/api/categories/" + parentCatId);
    },
    getGamesInCategory: function (categoryId) {
        return axios.get("/api/games/" + categoryId);
    },
    getPiecesByGameId: function (gameId) {
        return axios.get("/api/gameAssets/" + gameId);
    },
    saveContact: function(contactPage) {
        return axios.post("/api/contactus", contactPage);
      }
};
