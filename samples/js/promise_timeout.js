function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms); //CHIAMA RESOLVE DOPO ms => then
  });
}

function timeout(ms, workPromise) {
  return Promise.race([ //ESEGUE IN PARALLELO E IL 1° RITORNA
      workPromise,      //ESEGUE LAVORO PER UN MASSIMO DI ms
      delay(ms).then( function(){  //OPPURE VA ERRORE=>catch
          throw new Error("TIMEOUT, WORK TOO LONG!") 
      })
  ]);
}

//SIMULAZIONE DI LAVORO CHE DURA TEMPO RANDOM 0-1000
function fakeWork(){
    return delay(Math.random()*1000)
            .then(function(){return "WORK DONE!"});
}

//DOVREI AVERE STATISTICAMENTE IL 50% DI SUCCESSI ;)
timeout(500, fakeWork() )
    .then( function(done){console.log("OK", done)} )
    .catch( function(err){console.error(err)} );