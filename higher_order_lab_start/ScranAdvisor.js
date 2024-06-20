const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function (){
    return this.restaurants.length;
}

ScranAdvisor.prototype.restaurantByFullName = function (restaurantName){
    return this.restaurants.filter((restaurant) => restaurant.name === restaurantName)[0]; 
}

ScranAdvisor.prototype.allRestaurants = function (){
    return this.restaurants.map((allRestaurants) => allRestaurants.name);
}

ScranAdvisor.prototype.allRestaurantsInTown = function(townName){
    return this.restaurants.filter((restaurant) => restaurant.location.town === townName);
}

ScranAdvisor.prototype.mostCommonCuisine = function(){
    const cuisineCount = this.restaurants.reduce((agg, restaurant) => {
        restaurant.cuisines.forEach(cuisine => {
            agg[cuisine] = (agg[cuisine] || 0) +1 //falsy value, counts unique cusines
        });
        return agg; 
    }, {});

    return Object.entries(cuisineCount).reduce((mostCommon, [cuisine, count]) => {
        if (count > mostCommon.count) {
            return { cuisine, count };
        }
        return mostCommon;
    }, { cuisine: null, count: 0 }).cuisine;
}
//found this using mdn and claude for extra help

ScranAdvisor.prototype.searchBySubstring = function(subString) {
    //convert substring to lowercase for case-insensitive search
    const lowerCaseSubString = subString.toLowerCase();

    //filter restaurants that contain the substring in name
    return this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(lowerCaseSubString)
    );
};

module.exports = ScranAdvisor;
