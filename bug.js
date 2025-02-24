```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
 $match: { /*some filter*/}
},{
 $lookup:{
 from: "collection2",
 localField: "_id",
 foreignField: "foreignKey",
 as: "results"
 }
},{
 $unwind:"$results" 
},{
 $group:{
 _id: "$_id",
 total:{$sum: "$results.value"}
 }
}])
```