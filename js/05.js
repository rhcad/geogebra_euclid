import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 2, minPrimitives: 3, levelName: 'Level5'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointRight', -0.4, 0.3);
  base.checkObject('pointPerp', -0.4, 0.3);
  base.checkDirection('segmentPerp', 0, 0);

  if (base.drawn('pointRight')) {
    Command('progress = 10');
  }
  if (base.drawn('pointPerp')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('segmentPerp'), 2);
}