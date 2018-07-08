import Route from '@ember/routing/route';

export default Route.extend({
  async setupController() {
    let foo = await this.store.createRecord('foo').save();
    this.transitionTo('foo.show', foo);
  }
});
