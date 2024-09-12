
import { Card } from 'antd';
import './App.css';



interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}


function Food({meal}: {meal:Meal}) {
  
 const { Meta } = Card;
  
  return ( 
        <Card
          key={meal.idMeal}
          hoverable
          className="food-card" 
          cover={<img alt={meal.strMeal} src={meal.strMealThumb} className="food-image" />} 
        >
          <Meta title={meal.strMeal} description="Seafood dish" className="food-meta" /> 
        </Card>
  );
}

export default Food;
