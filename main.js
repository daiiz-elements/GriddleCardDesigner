var refresh_time = 0;

function design(id) {
  return document.getElementById(id).value;
}

function render(f, r) {
  var g, y;
  g = document.querySelector('griddles-ui-card');
  var api = g.apis;
  refresh_time++;
  g.cardWidth = design("cardWidth");
  g.cardMarginBottom = design("cardMarginBottom");
  g.streamMarginLeft = design("streamMarginLeft");
  g.streamMarginRight = design("streamMarginRight");
  g.streamPaddingTop = design("streamPaddingTop");
  g.numberReadAtOnce = design("numberReadAtOnce");
  g.displayFromTopLeftToBottomRight = design("displayFromTopLeftToBottomRight");
  console.log(design("type"));
  for(var i = 0; i < 200; i++) {
    var card = api.makeCard(null, 'T', design("type"));
        card = api.makeCard(card, 'R', design("borderRadius"));
        card = api.makeCard(card, 'P', design("paperColor"));
        card = api.makeCard(card, 'H', design("height"));
        card = api.makeCard(card, 'I', design("insert"));
        card = api.makeCard(card, 'S', design("shadowDepth"));
        card = api.makeCard(card, 'C', design("content"));
        if(f == 'refresh') {
          var str = 'Refreshed ' + refresh_time;
          card = api.makeCard(card, 'C', str);
        }
    $('griddles-ui-card').append(card);
  }
  g.cards = {};
  g.query = 'render-' + r;
}


function griddlesAppInit() {
  render('init', Math.random() * 1000);
}


function toggleDialog(id) {
    var dialog = document.querySelector('#' + id);
    dialog.toggle();
}


document.getElementById('btn_refresh').addEventListener('click', function() {
  render('refresh', Math.random() * 1000);
}, false);

document.getElementById('btn_settings').addEventListener('click', function() {
  toggleDialog('dialog_settings');
}, false);

document.getElementById('dialog_btn_done').addEventListener('click', function() {
  render('init', Math.random() * 1000);
}, false);