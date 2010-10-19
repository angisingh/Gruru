/**
 * @author angadsingh
 */
function saveYesVote()
{
	$.couch.db("daetom").saveDoc(  
  			{type: "vote", voterId: "angisingh@gmail.com", questionId: "sjehs.stillman@gmail.com", yesVoteValue: 1, noVoteValue: 0},  
  			{
				success: function() { alert("Voted Yes.");
				calcuateYesVoteCount();
			
			}}  
		);  
	
}


function saveNoVote()
{
	$.couch.db("daetom").saveDoc(  
  			{type: "vote", voterId: "angisingh@gmail.com", questionId: "sjehs.stillman@gmail.com", yesVoteValue: 0, noVoteValue: 1},  
  			{
				success: function() 
				{ 
					alert("Voted No.");
					calcuateNoVoteCount(); 
				}
			}  
		);  	
}


function calcuateYesVoteCount()
{
	var yesVoteCount = 0;
	$db = $.couch.db("daetom"); 
	alert("i came here;");
	$db.view("daetom/yesVoteAggregateForQuestion", {  
    success: function(data) {  
    for (i in data.rows) {
		yesVoteCount = yesVoteCount + data.rows[i].value;
	}
	alert('your yes vote count ='+ yesVoteCount.toString());
   }});
}


function calcuateNoVoteCount()
{
	var noVoteCount = 0;
	$db = $.couch.db("daetom"); 
	alert("i came here;");
	$db.view("daetom/noVoteAggregateForQuestion", {  
    success: function(data) {  
    for (i in data.rows) {
		noVoteCount = noVoteCount + data.rows[i].value;
	}
	alert('your no vote count ='+ noVoteCount.toString());
   }});
}