import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 3, minPrimitives: 5, levelName: 'Level12'
  });
  if (!base) {
    return;
  }
  base.checkPointOnTarget('target2', 0, 0.5)
  base.checkPointOnTarget('target2b', 0, 0.5)
  base.checkDirection('target2', 0, 0);
  base.checkDirection('target2b', 0, 0);

  if (base.drawn('ptarget2a') || base.drawn('ptarget2b')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('target2') || base.drawn('target2b'), 4);
}