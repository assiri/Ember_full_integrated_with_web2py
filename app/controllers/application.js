import Ember from 'ember';

export default Ember.Controller.extend({
  isLogin(){return Ember.$.cookie('login') || null } 
});
