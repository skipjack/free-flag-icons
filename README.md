Free Flag Icons
===============

This package is simply a scraper for [freeflagicons.com][1]. As of right now,
it only contains the [Flag Background][2] style but it would be trivial to add
others (just submit an issue).

> These images are free for personal usage, but you must pay for a commercial
> license. See [the site][1] and [their license][3] for more details.


## Usage

Start by installing the package...

``` bash
npm install free-flag-icons
```

Then include them through the path to the given style (e.g.
`free-flag-icons/[style]/us.jpg`). For example, if you're using a bundler like
[parcel][4] or [webpack][5] that supports `import`-ing images:

``` js
import USFlag from 'free-flag-icons/flag_background/us.jpg'
```

The ISO two-letter country codes are used for each country which makes the
images really easy to consume programmatically. For example in [parcel][4], you
can...

``` js
import flagImages from 'free-flag-icons/flag_background/*.jpg'

// Use some `countryCode` variable to automatically pluck the right image
flagImages[countryCode]
```


## Contributing

Contributions are welcome, just create an issue or pull request. My goal is to
keep this package extremely simple. The most common change is likely just to
add a new flag style.


[1]: http://www.freeflagicons.com
[2]: http://www.freeflagicons.com/buy/flag_background/
[3]: http://www.freeflagicons.com/agreement/
[4]: https://parceljs.org/
[5]: https://webpack.js.org/