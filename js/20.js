import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 6, levelName: 'Level20'
  });
  if (!base) {
    return;
  }
  base.checkObject('target1', -0.3, 0.5);
  base.checkObject('target2', -0.3, 0.5);
  base.levelCompleted(base.drawn('target1') && base.drawn('target2'), 4);
}