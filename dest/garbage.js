// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger1"
// })
//     .setClassToggle('#animate1', 'scale') //add class to animate1
//     // .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
//     .addIndicators({name: "1 (add a class)"}) // add indicators (requires plugin)
//     .addTo(controller);
//

const airport = require('air-port-codes-node')
import { autocomplete } from 'air-port-codes-node';

const apca = autocomplete({
    key : 'a616012737',
    secret : 'ba96c7ae2b9e927', // Your API Secret Key: use this if you are not connecting from a web server
    limit : 15
});

let term = 'new yo';
apca.request(term);
console.log(apca);