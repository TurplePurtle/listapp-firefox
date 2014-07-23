var pageURL = "http://cryptic-shelf-2538.herokuapp.com/";

// Sidebar (not yet working -> FF29/30)
/*
var ui = require("sdk/ui");

var sidebar = ui.Sidebar({
  id: "listapp-sidebar",
  title: "Listapp",
  url: pageURL
});
*/

// Popup panel
var listappPanel = require("sdk/panel").Panel({
  width: 450,
  height: 600,
  contentURL: pageURL
});

// with widget (deprecated)
var widget = require("sdk/widget").Widget({
  id: "listapp-panel",
  label: "Listapp panel",
  contentURL: pageURL + "favicon.ico",
  panel: listappPanel
});

// with ui (doesn't work in FF < 29)
// See: https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_toggle#Attaching_panels_to_buttons

// Context menu
var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
  label: "Log selection",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function() {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function(text) {
    console.log(text);
  }
});
