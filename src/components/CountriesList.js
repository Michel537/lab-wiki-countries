function CountriesList({ countries }) {
    console.log(countries);

  const divStyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  return (
    <div className="col-5" style={divStyle}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <a
              className="list-group-item list-group-item-action"
              href={country.alpha3Code}
            >
              {country.alpha2Code} {country.name.official}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
