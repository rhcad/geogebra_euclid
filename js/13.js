import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 3, minPrimitives: 5, levelName: 'Level13'
  });
  if (!base) {
    return;
  }
  base.checkObject('target1');
  base.levelCompleted(base.drawn('target1'), 3);
}