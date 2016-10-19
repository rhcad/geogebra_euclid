import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {
    minSteps: 3, minPrimitives: 3, levelName: 'Level2'
  });
  if (!base) {
    return;
  }
  base.checkObject('pointtop', -0.4, 0.3);
  base.checkObject('pointbottom', -0.4, -0.3);
  base.checkObject('midpoint', -0.4, -0.3);

  if (base.drawn('pointtop') + base.drawn('pointbottom') === 1) {
    Command('progress = 33');
  }
  if (base.drawn('pointtop') + base.drawn('pointbottom') === 2) {
    Command('progress = 66');
  }
  base.levelCompleted(base.drawn('midpoint'), 3);
}