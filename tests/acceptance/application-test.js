import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupFactoryGuy, mockCreate, makeNew, make } from 'ember-data-factory-guy';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  test('using mockCreate with string works', async function(assert) {
    mockCreate('foo');
    await visit('/');

    assert.equal(currentURL(), '/foo/1');
  });

  test('using mockCreate with makeNew does not works', async function(assert) {
    let foo = makeNew('foo');
    mockCreate(foo);
    await visit('/');

    assert.equal(currentURL(), '/foo/1', 'We are only making one foo, so the id should be 1');
  });

  test('using mockCreate with makeNew does not work even using foo\'s id', async function(assert) {
    let foo = makeNew('foo');
    mockCreate(foo);
    await visit('/');

    assert.equal(currentURL(), `/foo/${foo.id}`, 'We are only making one foo, so the id should be 1');
  });


  test('using mockCreate with make also does not works', async function(assert) {
    let foo = make('foo');
    mockCreate(foo);
    await visit('/');

    assert.equal(currentURL(), '/foo/1', 'We are only making one foo, so the id should be 1');
  });

  test('using mockCreate with make also does not work even using foo\'s id', async function(assert) {
    let foo = make('foo');
    mockCreate(foo);
    await visit('/');

    assert.equal(currentURL(), `/foo/${foo.id}`, 'We are only making one foo, so the id should be 1');
  });
});
