var indexController = {
	index: function(req, res) {
		//res.render('index');
		res.redirect("./skiAreas/index.html")
	}

};

module.exports = indexController;