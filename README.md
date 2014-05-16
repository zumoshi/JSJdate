JSJdate
=======

Jalali (Shamsi) Date in Javascript

Really small (only 2KB) and accurate converter

Usage
=======

without parameters : (returns Now)
```Javascript
JDate().toString()	//--> "1393/2/27"
JDate().getRooz()	//--> "جمعه"
JDate().getMah()	//--> "اردیبهشت"
JDate().getDate()	//--> 27
JDate().getMonth()	//--> 2
JDate().getYear()	//--> 1393
```

With a String Miladi Date:
```Javascript
JDate("2010/5/5").toString()	//--> "1389/2/15"
```
With a TimeStamp:
```Javascript
JDate(1273001400000).toString()	//--> "1389/2/15"
```
With a JSDate Object:
```Javascript
JDate(new Date("2010/5/5")).toString()	//--> "1389/2/15"
```


Include
========
to use with NodeJS just copy the object (19 lines) into your code
to use in browser include the tarikh.js file in your page
```
 <script src="./tarikh.js"></script>
```