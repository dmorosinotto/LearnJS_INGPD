asyncFunction1(function(err, r1) {
	asyncFunction2(function(err, r2) {
		asyncFunction1(function(err, r3) {
			asyncFunction1(function(err, r4) {
				asyncFunction1(function(err, r5) {
					//Do somthing useful with r1,r2,r3,.. (ndr HAPPYPATH)
					/*
	!!! ATTENZIONE:	err VA GESTITO A TUTTI I LIVELLI INTERMEDI E BISOGNA DECIDERE COME FARE?!?!?
					*/
				});
			});
		});
	});
});