import React from 'react';


export default class CategoryFilter extends React.Component {

    state = {
        books:[],
        filters: {
            type: 'all'
        }
    }


 render() {
     return(
         <div>
             <lable htmlFor="category-filter">Choose Category</lable>
             <select>
               <option value="fiction">Fiction</option>
               <option vaue="education">Education</option>
               <option value="history">History</option>
               <option value="politics">Politics</option>
               <option value="food">Food</option>
            </select>
        </div>
     )
 
  }
}



