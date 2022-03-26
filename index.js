const data = [
        {
            "rec-title": "Gryo",
            "res-desc": "NYC Cart Style Halal Chicken and Rice.",
            "cuisine": "Halal",
            "total-time": "60mins",
            "serves": "four",
            "ingredients": [
                "2 tablespoons fresh lemon juice",
                "1 tablespoon chopped fresh oregano",
                "1/2 teaspoon ground coriander seed"
            ]
        },
        {
            "rec-title": "Pasta",
            "res-desc": "NYC Cart Style Halal Chicken and Rice.",
            "cuisine": "Italian",
            "total-time": "43mins",
            "serves": "two",
            "ingredients": [
                "2 tablespoons fresh lemon juice",
                "1 tablespoon chopped fresh oregano",
                "1/2 teaspoon ground coriander seed"
            ]
        }

]
console.log(data);



for(let rec of data) {

$('.recipes-container').append(
    '<div class="recipe">' +
        '<h3>' + rec["rec-title"] + '</h3>' +
    
    
    
    '</div>'
    
    );
}