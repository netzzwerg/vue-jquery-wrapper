import wrapper from './Wrapper.js';
import Vue from 'vue';

Vue.component('wrapper', wrapper);

new Vue({
    el: '#app'
})

console.log('init');
console.log(wrapper);