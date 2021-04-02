// On met dans une fonction pour appeler une fois que les données ont été traité
const showStats = () => {
  // Pour le nombre de programmes
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChartMovies);
  function drawChartMovies() {
    var data = google.visualization.arrayToDataTable([
      ["Platforme de streaming", "Nombre de programmes", { role: "style" } ],
      ["Netflix", netflixMovies.length, "#5465FF"],
      ["Hulu", huluMovies.length, "#788BFF"],
      ["Prime Video", prime_videoMovies.length, "#9BB1FF"],
      ["Disney+", disneyMovies.length, "#BFD7FF"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Nombre de programmes par platforme de streaming 🎬",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("number_of_movies"));
    chart.draw(view, options);
  }

  // Pour la carte des langues
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMapNetflix);

  function drawRegionsMapNetflix() {
    var data = google.visualization.arrayToDataTable(netflixCountryCount);

    var options = {
      colorAxis: {colors: ['#BFD7FF', '#9BB1FF', '#788BFF', '#5465FF']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('country_movies_netflix'));

    chart.draw(data, options);
  }
  
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMapHulu);

  function drawRegionsMapHulu() {
    var data = google.visualization.arrayToDataTable(huluCountryCount);

    var options = {
      colorAxis: {colors: ['#BFD7FF', '#9BB1FF', '#788BFF', '#5465FF']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('country_movies_hulu'));

    chart.draw(data, options);
  }

  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMapPrimeVideo);

  function drawRegionsMapPrimeVideo() {
    var data = google.visualization.arrayToDataTable(prime_videoCountryCount);

    var options = {
      colorAxis: {colors: ['#BFD7FF', '#9BB1FF', '#788BFF', '#5465FF']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('country_movies_prime_video'));

    chart.draw(data, options);
  }


  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMapDisney);

  function drawRegionsMapDisney() {
    var data = google.visualization.arrayToDataTable(disneyCountryCount);

    var options = {
      colorAxis: {colors: ['#BFD7FF', '#9BB1FF', '#788BFF', '#5465FF']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('country_movies_disney'));

    chart.draw(data, options);
  }

  // Pour les genres des programmes
  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChartGenreNetflix);
  function drawChartGenreNetflix() {
    var data = google.visualization.arrayToDataTable(netflixGenreCount);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Nombre de genres de films par platforme de streaming 🍿",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("genre_movies_netflix"));
    chart.draw(view, options);
  }

  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChartGenreHulu);
  function drawChartGenreHulu() {
    var data = google.visualization.arrayToDataTable(huluGenreCount);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Nombre de genres de films par platforme de streaming 🍿",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("genre_movies_hulu"));
    chart.draw(view, options);
  }

  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChartGenrePrimeVideo);
  function drawChartGenrePrimeVideo() {
    var data = google.visualization.arrayToDataTable(prime_videoGenreCount);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Nombre de genres de films par platforme de streaming 🍿",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("genre_movies_prime_video"));
    chart.draw(view, options);
  }

  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(drawChartGenreDisney);
  function drawChartGenreDisney() {
    var data = google.visualization.arrayToDataTable(disneyGenreCount);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var options = {
      title: "Nombre de genres de films par platforme de streaming 🍿",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("genre_movies_disney"));
    chart.draw(view, options);
  }
}