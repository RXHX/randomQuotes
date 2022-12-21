/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
/*

- Add the following properties to each quote object:
quote - string - the actual quote
source - string - the person or character who said it
2- Add a citation property to at least one quote object. The value should be
a string holding a reference to the source of the quote, like the book, movie
or song where the quote originates.
3- Add a year property to at least one quote object. The value should be
a string or number representing the year the quote originated



*/
const quotes = [
    {
    "quote" : "Be yourself; everyone else is already taken.",
    "source": "Oscar Wilde",
    "citation":"GoodReads",
    "year":"1965"
    },
    {
       "quote" : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
       "source": "Albert Einstein",
       "citation":"Twitter",
       "year":"1935"
     },
     {
       "quote" : "So many books, so little time",
       "source": "Frank Zappa",
       "citation":"Facebook",
       "year":"2010"
     },
     {
       "quote" : "A room without books is like a body without a soul",
       "source": "Marcus Tullius Cicero ",
       "citation":"Quora",
       "year":"2012"
       },
       {
           "quote" : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
           "source": "Bernard M. Baruch",
           "citation":"GoodReads",
           "year":"1932"
       },
       {
           "quote" : `You've gotta dance like there's nobody watching,
           Love like you'll never be hurt,
           Sing like there's nobody listening,
           And live like it's heaven on earth.`,
           "source": "William W. Purkey",
           "citation":"Reddit",
           "year":"2001"
       },
       {
           "quote" : "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
           "source": "Dr. Seuss",
           "citation":"Quora",
           "year":"1943"
       },
       {
           "quote" : "You only live once, but if you do it right, once is enough",
           "source": "Mae West",
           "citation":"Facebook",
           "year":"2014"
       },
       {
           "quote" : "Be the change that you wish to see in the world.",
           "source": "Mahatma Gandhi",
           "citation":"GoodReads",
           "year":"1923"
       },
       {
           "quote" : "In three words I can sum up everything I've learned about life: it goes on.",
           "source": " Robert Frost",
           "citation":"Twitter",
           "year":"1970"
           }
];


var repeatingQuoteIndex = -1;


/***
 * `getRandomQuote` function
***/
function getRandomQuote()
{
// random number generation 
var randomNumber = Math.random() * quotes.length;   
//select a random Array index of the Array Quote
var randomQuoteIndex = Math.floor(randomNumber);
  
// check if the index is repeating or not
    if(randomQuoteIndex == repeatingQuoteIndex)     
    {
        // very important step
        // there should be return , if
        // there is no return then we will 
        // have repeating quotes
       return getRandomQuote();  
    }
    else{
        // assign the value
        repeatingQuoteIndex = randomQuoteIndex;
      
    }

  // return the quote  
  return quotes[randomQuoteIndex];

}


/***
 * `printQuote` function
***/
   // function
function printQuote() {
    
    
    // 1. Create a variable that calls the getRandomQuote()
    const randomQuote = getRandomQuote();

 // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    var resultHtml = `<p class="quote">`;
       resultHtml += randomQuote.quote;
       resultHtml += `</p>`;

 // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
       resultHtml += ` <p class="source">`;
       resultHtml += randomQuote.source; 
        

        // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
       if(randomQuote.citation != "")
       {
           resultHtml += `<span class="citation">`;
           resultHtml += randomQuote.citation;
           resultHtml += `</span>`;
        }


    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string

     if(randomQuote.year != "")
     {
         resultHtml += `<span class="year">`;
         resultHtml += randomQuote.year;
         resultHtml += `</span>`;
     }


     // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
     resultHtml += `</p>`;

      // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string
     document.getElementById('quote-box').innerHTML = resultHtml;
     resultHtml = "";
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click',printQuote);