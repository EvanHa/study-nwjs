const rulesBtn = document.getElementById('rules-btn');
const rules = document.getElementById('rules');

function rulesBtnClickHandler() {
    console.log('rules button clicked!');
}

rulesBtn.addEventListener('click', rulesBtnClickHandler);


// Create an empty context menu
var nw = require('nw.gui');
var menu = new nw.Menu();
 
// Add some items with label
menu.append(new nw.MenuItem({
  label: 'Item A',
  click: function() {
    alert('You have clicked at "Item A"');
  }
}));
 
menu.append(new nw.MenuItem({ type: 'separator' }));
 
menu.append(new nw.MenuItem({
  label: 'Item B',
  click: function() {
    alert('You have clicked at "Item B"');
  }
}));
 
menu.append(new nw.MenuItem({ type: 'separator' }));
menu.append(new nw.MenuItem({
  label: 'Item C',
  click: function() {
    alert('You have clicked at "Item C"');
  }
}));

nw.Shell.openExternal("http://www.google.com");
 
// Hooks the "contextmenu" event
document.body.addEventListener('contextmenu', function(ev) {
  // Prevent showing default context menu
  ev.preventDefault();
  // Popup the native context menu at place you click
  menu.popup(ev.x, ev.y);
 
  return false;
}, false);