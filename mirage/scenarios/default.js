export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.createList('ingredient', {recipe: 1});
}
