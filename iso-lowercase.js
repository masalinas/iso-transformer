fs = require('fs');

if (process.argv.length === 2) {
  console.log('Bad arguments. Pass any file to be transformed');
  return;
}

let fileName = process.argv[2];
console.log(fileName);

fs.readFile('./countries/' + fileName, 'utf8', function (err, data) {
  if (err) return console.log(err);

  let countries = JSON.parse(data);
	
  // set uppercase 
  countries.forEach(country => {
     country.alpha2 = country.alpha2.toLowerCase();
  });

  fs.writeFile(fileName + '.LOWER_CASE', JSON.stringify(countries), function (err) {
    if (err) return console.log(err);

    console.log('file ' + fileName + 'NEW created correctly');
  });
});
