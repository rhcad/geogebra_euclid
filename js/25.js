import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 10, minPrimitives: 10, levelName: 'Level25'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointL', 0, 0);
  base.checkObject('pointLB', 0, 0);
  base.checkObject('pointR', 0, 0);
  base.checkObject('pointRB', 0, 0);
  base.checkObject('pointT', 0, 0);
  base.checkDirection('segmentB');
  base.checkDirection('segmentLB');
  base.checkDirection('segmentRB');
  base.checkDirection('segmentRT');
  base.checkDirection('segmentLT');

  var count = base.drawn('segmentB') + base.drawn('segmentLB') +
    base.drawn('segmentRB') + base.drawn('segmentRT') + base.drawn('segmentLT');

  if (count > 0 && count < 5) {
    Command('progress = ' + (20 * count));
  }
  base.levelCompleted(count === 5, 11);
}