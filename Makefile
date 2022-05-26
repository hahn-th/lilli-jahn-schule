ASSETS_DIR := assets/js/vendor/

build-js:
	if not exist $(ASSETS_DIR) mkdir $(ASSETS_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(ASSETS_DIR)
	cp node_modules/popper.js/dist/umd/popper.min.js $(ASSETS_DIR)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(ASSETS_DIR)
