import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 6, minPrimitives: 8, levelName: 'Level24'
  });
  if (!base) {
    return;
  }
  base.checkDirection('tangentT', 0, 0);
  base.checkDirection('tangentB', 0, 0);
  base.levelCompleted(base.drawn('tangentT') || base.drawn('tangentB'), 6);
}