import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 6, minPrimitives: 8, levelName: 'Level23'
  });
  if (!base) {
    return;
  }
  base.checkDirection('target3', 0, 0);
  base.checkDirection('target4', 0, 0);
  base.levelCompleted(base.drawn('target3') || base.drawn('target4'), 6);
}