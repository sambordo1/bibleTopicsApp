import { module, test } from 'qunit';
import { setupTest } from 'bible-topics-app/tests/helpers';

module('Unit | Route | grace', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:grace');
    assert.ok(route);
  });
});
