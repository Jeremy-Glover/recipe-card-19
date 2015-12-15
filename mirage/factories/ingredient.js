import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() {
    return faker.hacker.phrase();
  },

  unit(id) {
    return [
      'cups',
      'teaspoons',
      'tablespoons',
    ][id % 3];
  },

  quantity() {
    return faker.number(0, 4);
  },
});
