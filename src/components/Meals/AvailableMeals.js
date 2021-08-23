import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealIteam from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "lorem isopem",
    description: "lorem ideomore",
    price: 250,
  },
  {
    id: 2,
    name: "lorem isopem",
    description: "lorem ideomore",
    price: 230,
  },
  {
    id: 3,
    name: "lorem isopem",
    description: "lorem ideomore",
    price: 250,
  },
  {
    id: 4,
    name: "lorem isopem",
    description: "lorem ideomore",
    price: 200,
  },
  {
    id: 5,
    name: "lorem isopem",
    description: "lorem ideomore",
    price: 170,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealIteam
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
