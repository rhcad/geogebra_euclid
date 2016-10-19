import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 2, minPrimitives: 3, levelName: 'Level14'
  });
  if (!base) {
    return;
  }
  base.checkDirection('targetsegment');
  base.levelCompleted(base.drawn('targetsegment'), 2);
}