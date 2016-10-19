import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 6, levelName: 'Level18'
  });
  if (!base) {
    return;
  }
  base.checkObject('target1');
  base.levelCompleted(base.drawn('target1'), 4);
}