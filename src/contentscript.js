/**
 * Copyright (c) 2011 Dennis Hall <https://github.com/dennishall>.
 * All rights reserved.  Use of this source code is governed by the MIT license.
**/


function $(s){
  return document.querySelectorAll(s);
}

function prepend(child){
  this.insertBefore(child, this.firstChild);
}

function copyToClipboard( text ){

  // chrome.extension.getBackgroundPage().copy(text);
  // var te = document.createElement('textarea');
  // prepend.call(listing_details, te);
  listing_details.innerHTML = '<textarea id="te"></textarea>';
  var te = $('#te')[0]
  te.value = text;
  te.rows = 4;
  te.style.fontStyle = "normal";
  te.columns = 30;
  te.select();

  // doesn't work!!!
  // document.body.contentEditable = true;
  // doesn't work!!!
  document.execCommand('copy');

  // copyDiv.unselectable = "off";
  // copyDiv.focus();
  // document.execCommand('SelectAll');
  // document.execCommand("Copy", false, null);
  // document.body.removeChild(copyDiv);
}

var listing_details = $('.listing_detail_details')[0];

if(listing_details){
  //remove unwanted elements
  var tbl = $('table')[0].cloneNode(true);
  [].forEach.call($('.secondary-button, table'), function(el){
    el.parentNode.removeChild(el);
  });
  //massage the text
  prepend.call(listing_details, $('h1')[0]);
  var zip = $('.postal-code')[0];
  zip.innerText = zip.innerText.replace(/(\d{5})-?.*/, "$1");
  var text = listing_details.innerText;
  copyToClipboard( text );
  listing_details.appendChild(tbl);
  // alert('copied to clipboard');

  // console.log("copying .. ", text);
  // chrome.extension.sendMessage(text);

}
