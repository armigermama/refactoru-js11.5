$(function(){

var d = new Date();
var minutes = d.getMinutes();
minutes = minutes > 9 ? minutes : '0' + minutes;
var time = d.getHours() + ' : ' + minutes;

var arrIndicators = ['.indicator-top-left', 
					'.indicator-bottom-left', 
					'.indicator-bottom-right', 
					'.indicator-top-right'];

	var outerShellEl = $('<div class="outer-shell"></div>');
	var innerShellEl = $('<div class="inner-shell"></div>');
	var clockScreenEl = $('<div class="clock-screen clock-text">' + time + '</div>');
	var bottomLabelsEl = $('<div class="bottom-labels"></div>');
	var amLabelsEl = $('<div class="am-labels clock-labels">AM<pre class="freq-list">   53   70 80  100  130  170   x10 kHz</pre></div>');
	var fmLabelsEl = $('<div class="fm-labels clock-labels">FM<pre class="freq-list">   88 92  96   100  104  108       MHz</pre></div>');
	var freqBarEl = $('<div class="freq-bar"></div>');
	var indicatorTLEl = $('<div class="indicator-on-text indicator-top-left">AM</div>');
	var indicatorBLEl = $('<div class="indicator-off-text indicator-bottom-left">PM</div>');
	var indicatorBREl = $('<div class="indicator-off-text indicator-top-right">ON</div>');
	var indicatorTREl = $('<div class="indicator-on-text indicator-bottom-right">OFF</div>');

$('.container').append(outerShellEl);
$('.outer-shell').append(innerShellEl);
$('.inner-shell').append([clockScreenEl, bottomLabelsEl]);
$('.clock-screen').append([indicatorTLEl, indicatorBLEl, indicatorBREl, indicatorTREl]);

$('.bottom-labels').append([fmLabelsEl, freqBarEl, amLabelsEl]);















});