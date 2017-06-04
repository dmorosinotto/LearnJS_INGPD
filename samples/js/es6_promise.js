const rnd = (max) => //CHIAMATA API PER AVERE NUMERO RANDOM 
    httpGET('http://numbersapi.com/random?max='+max)
        .then(ret => { 
            var r = parseInt(ret);
            console.info("<"+max, "->", ret);
            if (r) return r;
            else throw new Error("NOT A VALID NUMBER!");
        })//.catch(_ => 42);

const factOfJanuary = () => //TEST CHIAMATE IN PARALLELO
    Promise.all([ rnd(1), rnd(31) ]) 
            .then( nums => {
              var month = nums[0]; 
              var day = nums[1];
              console.log("@", day+"/"+month);
              return httpGET('http://numbersapi.com/'+month+'/'+day+'/date')
            });

httpGET('http://numbersapi.com/42') //TEST SERIE CHIAMATE
  .then( _ => console.info("1.", _) )
  .then( _ => httpGET('http://numbersapi.com/3/20/date') )
  .then( _ => console.info("2.", _) )
  .then( _ => factOfJanuary() )
  .then( _ => console.info("3.", _) )
  .catch( err => console.error('ERROR: ', err) );



function httpGET(url) { //FUNZIONE HELPER CHE FA CHIAMATA HTTP
  return new Promise(   //E RITORNA UNA PROMISE
    function (resolve, reject) {
      if (module && module.exports && require) { //NODE.JS
          var request = require("http");
          request.get(encodeURI(url), res => {
              var body = "";
              res.setEncoding("utf8");
              res.on("data", chunk => { body += chunk; });
              res.on("end" , function(){ 
                try { resolve(JSON.parse(body)) } 
                catch (e){ resolve(body) } 
              });
          }).on("error", function(err){ reject(err); });
      } else { //INSIDE ANY BROWSER
          var request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            if (this.status === 200) { // Success
              resolve(this.response);
            } else { // Something went wrong (404 etc.)
              reject(new Error(this.statusText));
            }
          }
          request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: '+this.statusText));
          };
          request.open('GET', url);
          request.send();
      }    
    }
  );
}