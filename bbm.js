modals=[],$(document).ready(function(){$(".modal").on("show.bs.modal",function(o){var d=$(this).attr("id");0==modals.length&&$(this).wrap('<div class="modal-container"></div>'),$(".modal-container").append($(this)),modals.push(d),$(this).show()}),$(".modal").on("hide.bs.modal",function(o){var d=$(this).attr("id");modals.splice(modals.indexOf(d),1),$(this).hide(),$("body").prepend($(this)),0==modals.length&&$(".modal-container").remove()})});