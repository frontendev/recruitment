# WordPress Developer Test

This test should provide you with the opportunity to demonstrate your WordPress development skills as well as your capabilities with PHP.

## We are keen to see how the following is handled

* Code location (e.g. will it be a theme, plugin etc.)
* Documentation of your code
* How your solution could be extended
* Separation of concerns
* Server performance
* Usage of WordPress hooks

## The brief

We want to use the following shortcode to display information about the weather on a series of WordPress websites:

`[finder_weather city="Sydney"]`

The shortcode will need to display a table with the following information for 5 days:

* Day
* Forecast and temperature
* Change from previous day

As a stretch goal also include any of the following:

* UV index
* Air pollution
* Humidity

### What we want to render

Please use the following as a suggestion for how the data should be represented.

#### Weather for Sydney

| Day       | Forecast           | Change  |
| --------- | ------------------ | ------- |
| Monday    | Sunny 32.8&deg;    | 0       |
| Tuesday   | Overcast 31.5&deg; | -1.3    |
| Wednesday | Sunny 31.5&deg;    | 0       |
| Thursday  | Sunny 30.5&deg;    | -1      |
| Friday    | Sunny 32.7&deg;    | +2.2    |

## Resources

Open Weather Map for weather data: https://openweathermap.org/api
