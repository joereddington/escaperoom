# Synopsis


This is a demonstration of a simple template to be used in a 'escape game' research project. 

Each page using this template will ask the user a question. If they get the right answer they will be taken to a success page. If they get it wrong - NO penalty, but if the timer runs out, they go to a fail page. 


## Webapp 
There is an ugly web version to play with the tags and concept at the github pages site [here](https://joereddington.github.io/escaperoom/). It needs to be made pretty with some css, this is to demonstration the functionality. 



## Editing
To change the settings, open up a html file with your editor of choice...  you'll see this: 


'''

<script>
/////////
//	PAY ATTENTION HERE...

var minutes=0.5//THE NUMBER OF MINUTES ON THE TIMER
var fail_destination="http://google.co.uk/" //The page to go to when the timer runs out...
var success_destination="http://bing.co.uk/" //The page to go to when the answer is right
var question="What is the Opposite of Up?"
var answer="down"
</script>

'''

Those are the settings to change. You can, of course, have one page to another page of the same template. 

# Licence 
As per file 

# Contributors 
* Joe Reddington

