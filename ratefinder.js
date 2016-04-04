import service from './rate-service-mock';

let url = "rates.json";

service.findAll()
  .then(rates => {
   let html = '';
   rates.forEach(rate => html += `<td><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
   document.getElementById("rates").innerHTML = html;
  }).catch(e => console.log(e));

