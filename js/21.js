import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 4, minPrimitives: 6, levelName: 'Level21'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointT', -0.3, 0.5);
  base.checkObject('pointB', -0.3, 0.5);
  base.checkDirection('tangentB', 0, 0);
  base.checkDirection('tangentT', 0, 0);
  base.levelCompleted(base.drawn('tangentT') && base.drawn('tangentB'), 4);
}