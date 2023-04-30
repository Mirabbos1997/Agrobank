import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-5b774-default-rtdb.firebaseio.com/orders.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      // const FirstName = responseData.dataRow
      // console.log(FirstName);


      const loadedMeals = [];


      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          firstName: responseData[key].userData.dataRow.map(item => item.firstName),
          lastName: responseData[key].userData.dataRow.map(item => item.lastName),
          middleName: responseData[key].userData.dataRow.map(item => item.middleName),
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((user) => (
    <MealItem
      key={user.id}
      id={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      middleName={user.middleName}
    // price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;