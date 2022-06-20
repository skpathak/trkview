window.onload = function() {

	// create and initialize a 3D renderer
	var r = new X.renderer3D();
	r.init();

	
	// create a new X.fibers
	var af_left = new X.fibers();
	af_left.file = "file/AF_left.trk";
	var cst_left = new X.fibers();
	cst_left.file = "file/CST_left.trk";
	var uf_left = new X.fibers();
	uf_left.file = "file/UF_left.trk";

	// .. add the fibers
	r.add(af_left);
	r.add(cst_left);
	r.add(uf_left);
	
	// create a new X.volume
	var volume = new X.volume();
	volume.file = "file/smtdt_b0.nii.gz";

	// .. add the volume
	r.add(volume);
	

	// create a new X.volume
	// var mesh = new X.mesh();
	// mesh.file = "file/lh.white.pial";

	// // .. add the mesh
	// r.add(mesh);
	
	
	// showtime!
	r.render();

};
