

function myEach(collection, cb){

    // "make it work" with an obj or array 
    // suggestion: if statement to determine whether the collection is an object or an array regardless of what data structure is passed in to your function

    if(Array.isArray(collection)) {
        for(let i=0; i<collection.length; i++){
        cb(collection[i])
        }
    } 

    //if(collection.contains(Object.keys(collection))){
    else {    
        for(let j=0; j< Object.keys(collection).length; j++){
            //cb(Object.keys(collection)[j], Object.values(collection)[j])
            cb(collection[Object.keys(collection)[j]], Object.keys(collection)[j]) 
        }
        // let key = Object.keys
        // let value = Object.values
       // let obj = Object.keys(collection) + " " + Object.values(collection)
       // cb(obj)
    }

    return collection
}


//(collection[Object.keys(collection)[j]], Object.keys(collection)[j])





// function myEach(collection, callback) {
//     if (Array.isArray(collection)) {
//       for (let i = 0; i < collection.length; i++) {
//         callback(collection[i]);
//       }
//     } else {
//       const keys = Object.keys(collection);
//       for (let i = 0; i < keys.length; i++) {
//         const key = keys[i];
//         const value = collection[key];
//         callback(value, key);
//       }
//     }
//     return collection;
//   }



    //collection.map(element => { return cb(element*3)})
    //    return newArr


    function myMap(collection, callback) {
        if (Array.isArray(collection)) {
          return collection.map(callback);
        } else if (typeof collection === 'object' && collection !== null) {
          const result = [];
          for (let key in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, key)) {
              result.push(callback(collection[key], key));
            }
          }
          return result;
        }
        return null;
      }


    // function myReduce(collection, callback, acc) {
    //     let startIdx = 0;
    //     let result = acc;
    //     if (acc === undefined) {
    //       result = collection[0];
    //       startIdx = 1;
    //     }
    //     for (let i = startIdx; i < collection.length; i++) {
    //       result = callback(result, collection[i], collection);
    //     }
    //     return result;
    //   }


      function myReduce(collection, callback, acc) {
        let start = acc !== undefined ? acc : Object.values(collection)[0];
        let i = acc !== undefined ? 0 : 1;
        for (; i < Object.values(collection).length; i++) {
          start = callback(start, Object.values(collection)[i], collection);
        }
        return start;
      }


      function myFind(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i])) {
            return arr[i];
          }
        }
        return undefined;
      }



      function myFilter(arr, callback) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i], i, arr)) {
            result.push(arr[i])
          }
        }
        return result
      }



      function mySize(collection) {
        if (Array.isArray(collection)) {
          return collection.length;
        } else if (typeof collection === "object") {
          return Object.keys(collection).length;
        }
      }
      
      function myFirst(collection, n = 1) {
        if (Array.isArray(collection)) {
          return n === 1 ? collection[0] : collection.slice(0, n);
        }
      }
      
      function myLast(collection, n = 1) {
        if (Array.isArray(collection)) {
          return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
        }
      }



      function myKeys(obj) {
        return Object.keys(obj);
      }
      
      function myValues(obj) {
        const values = [];
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
          }
        }
        return values;
      }


















