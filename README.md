JSJdate
=======

Jalali (Shamsi) Date in Javascript

Really small (only 2KB) and accurate converter

Usage
=======

```Javascript
JDate.now()
```
returns a Javascript Object like:
```Javascript
{"rooz":22,"mah":11,"sal":1392,"day":22,"month":11,"year":1392}
```
which can be converted to string 
```Javascript
JDate.toString({"rooz":22,"mah":11,"sal":1392,"day":22,"month":11,"year":1392}) //returns "1392/11/22"
```
you may also use toString function on JDate
```Javascript
JDate.now().toString() //returns "1392/11/22"
```
you can also convert any date to Shamsi date
```Javascript
JDate.tabdil("2010/5/5").toString() //returns "1389/2/15"
```
or TimeStamps
```Javascript
JDate.tabdil(1392099382*1000).toString() //returns "1392/11/22"
```

Include
========
to use with NodeJS just copy the object (19 lines) into your code
to use in browser include the tarikh.js file in your page
```
 <script src="./tarikh.js"></script>
```