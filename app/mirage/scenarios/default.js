export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
}
