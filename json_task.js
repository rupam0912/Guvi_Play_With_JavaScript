var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]

// convert the input to thefollowing format -> 
// var output = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": []
//     },
//     {
//          "id": 2,
//          "title": "Title 2",
//          "childrens": []
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": []
//     },
//     {
//          "id": 4,
//          "title": "Title 4",
//          "childrens": []
//     },
//     {
//          "id": 5,
//          "title": "Title 5",
//          "childrens": []
//     }
// ]


let res = [];

let transform = (obj) => {
    let temp = {};
    temp["id"] = obj["id"];
    temp["title"] = obj["title"];
    temp["childrens"] = [];
    res.push(temp);

    if(obj.childrens.length!=0){
       obj.childrens.forEach((val)=> {
           transform(val);
       })
   };
};

input.forEach((val) => {
    transform(val)
});

console.log(res);