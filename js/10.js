import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 1, minPrimitives: 5, levelName: 'Level10'
  });
  if (!base) {
    return;
  }
  base.checkObject('targetpoint', 0, 0.5);
  base.levelCompleted(base.drawn('targetpoint'), 1);
}