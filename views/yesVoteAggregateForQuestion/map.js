function(doc) {
	if (doc.type == "vote")
	{
		emit(doc.voterId, doc.yesVoteValue);
	}
}