//REVEALING MODULE PATTERN - Utils è la varibile che ci fà da "Namespace" = Contenitore del modulo
(function(root, moduleName){
  //variabile private grazie allo scope
  var _days = ['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato']; //E' PRIVATE INTERNO AL MODULO
  
  //funzione privata (poi riesposta con alias)
  function _weekday(n) {
		if ((typeof n === 'number') && (n in _days)) {
			return _days[n];
		} else {
			return "NON ESISTE " + n;
		}	
	}
    
  //funzione pubblica (in verità è privata e la riespongo senza fare alias - IO PREFERISCO COSI')
  function workday(n) {
    if (n<5) return _weekday(n).substring(0,3);
    else return "NON SI LAVORA";
  }
    
  //REVEALING MODULE --> QUESTO E' QUELLO CHE ESPONGO (rivelo) ALL'ESTERNO
  //crea closure sulle funzioni e variabili private interne per "nasconderle"
  root[moduleName] = {
    weekday: _weekday, //alias
    workday: workday, //IO PREFERISCO COSI'
    /*oppure potrei definire qui la parte pubblica...
    workday: function(n) { return _weekday(n).substr(0,3) } 
    */
  };  
})( global||window, 'Utils' );

//DATO CHE CI SONO... ESEGUO IL TEST CON UNA IIFE :-)
(function IIFE_TEST() {
  console.warn("TEST REVEALING MODULE");
  for (var i=0; i<7; i++) {
    console.log( Utils.weekday(i) );
    console.error( Utils.workday(i) );
  }
}());