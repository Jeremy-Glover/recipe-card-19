import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipe/index');

test('visiting the homepage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

  });
});

test('should be able to see list of 6 items', function(assert) {
  server.createList('recipe', 1);
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
  visit('/');

  andThen(function() {

    assert.equal(findWithAssert('.recipe-card__item').length, 6, 'There should be six ingredients listed');
    assert.equal(findWithAssert('.recipe-servings').val(), 8);
    assert.equal(findWithAssert('.recipe-quantity').first().text(), '2', 'The first ingredient should have a quantity of 2');
  });
});

test('should be able to change servings value', function(assert) {
  server.createList('recipe', 1);
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
  visit('/');

  fillIn('.recipe-servings', 4);
  click('.adjust-recipe');

  andThen(function() {
    assert.equal(find('.recipe-servings').val(), 4);
    assert.equal(find('.recipe-quantity').first().text(), '2', 'The first ingredient should have a quantity of 1');
  });
});
