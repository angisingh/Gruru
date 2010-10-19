
Deki.$(".counter-number").each( function(i) {
	Deki.$(this).attr('id','num'+i);
});

function loadinput() {
	var newval = Deki.$("#numgo").val();
	loadticker(newval);
}

function loadticker(ticnum) {
	var fticnum = add_commas(ticnum);
	var numheight=18;
	addticker(fticnum);
	if (ticnum && ticnum != 0) {
		
		var s = String(fticnum);
		
		for (i=s.length;i>=0; i--)
		{
			var onum=s.charAt(i);			
			Deki.$("#num"+i).attr('value',onum);
		}
		
		Deki.$(".counter-number").each( function() {
			var nval=Deki.$(this).attr("value");
			if (!isNaN(nval)) {
				var nheight = Number(nval)*numheight*-1;
				Deki.$(this).animate({ top: nheight+'px'}, 1500 );
			} 
			if (nval==','){
				Deki.$(this).animate({ top: '-180px'}, 1500 );
			}
  		});
	}
}

function addticker(newnum) {
	var digitcnt = Deki.$(".counter-number").size();
	var nnum = String(newnum).length;
	var digitdiff = Number(nnum - Number(digitcnt));
	if (digitdiff <0) {
		var ltdig = (Number(nnum)-1);
		Deki.$(".counter-number:gt(" + ltdig + ")").remove();
	}
	
	for(i=1;i<=digitdiff;i++) {
		Deki.$(".counter-wrap").append('<div class="counter-number" id="num' + (Number(digitcnt+i-1)) + '">&nbsp;</div>');
	}
}

function add_commas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}


</script>