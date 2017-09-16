import Ember from 'ember';

export default Ember.Route.extend({
  time: [],
  actions: {
    stamp(){
      this.time.pushObject(new Date());
    }
  },
  model(){
    return new Date();
  },
  setupController(controller, model){
    this._super(controller, model);
    controller.set("timeSet", this.time);
  }
});
