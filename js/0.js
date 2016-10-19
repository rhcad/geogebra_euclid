import "euclid.js";

function ggbOnInit() {
  euclidInit('newObjectListener');
  $('#tasks li span').hide();
  if (ggbUtil.getNickname()) {
    $('.visible-notuser').hide();
  }
}

function newObjectListener(obj) {
  var base = euclidNewObjectListener(obj, {levelName: 'tutorial'});
  if (!base) {
    return;
  }
  base.checkObject('ray1', 0.5, 0);
  base.checkObject('circle1', -1, 0);
  base.checkObject('circle2', 0.5, 0);
  base.checkObject('intersect1', 0.5, 0);
  base.checkSegment('segment1', 0.5, 0);

  var step = base.drawn('segment1') + base.drawn('ray1') +
    base.drawn('circle1') + base.drawn('circle2') + base.drawn('intersect1');

  if (step > 0 && step < 5) {
    Command('progress = ' + (20 * step));
  }
  base.levelCompleted(step === 5, 4);
  if (step === 5) {
    Command('Complete2 = Text["点击绿色框进入第一关。",  ' + AbsPos('0.15', '-0.35') + ']');
  }

  if (base.drawn('ray1')) {
    $('#ray').show();
  }
  if (base.drawn('circle1')) {
    $('#circle1').show();
  }
  if (base.drawn('circle2')) {
    $('#circle2').show();
  }
  if (base.drawn('intersect1')) {
    $('#point').show();
  }
  if (base.drawn('segment1')) {
    $('#segment').show();
  }
}