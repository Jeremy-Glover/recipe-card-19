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
  server.createList('ingredients', {recipe: 1});
  visit('/');

  andThen(function() {

    assert.equal(findWithAssert('.recipe-card-list').length, 6, 'There should be six ingredients listed');
    assert.equal(find('.recipe-servings').val(), 8);
  });
});

test('should be able to change servings value', function(assert) {
  server.createList('recipe', 1);
  visit('/');

  fillIn('.recipe-servings', 4);
  click('.adjust-recipe');

  andThen(function() {
    assert.equal(find('.recipe-servings').val(), 4);

  });
});
