import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 2, minPrimitives: 4, levelName: 'Level6'
  });
  if (!base) {
    return;
  }
  base.checkDirection('linePerp', 0, 0);
  base.checkDirection('linePar', 0, 0);

  if (base.drawn('segmentPerp')) {
    Command('progress = 50');
  }
  base.levelCompleted(base.drawn('linePar'), 2);
}