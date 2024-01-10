/* Name- Ramandeep SINGH
Student number: 041097006
class section: 322
 */



const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
	{
        "joke": "Why did the math book look so sad? Because it had too many problems.",
        "author": "Bookworm"
    },
    {
        "joke": "Why don't skeletons fight each other? They don't have the guts!",
        "author": "Anatomy Enthusiast"
    },
    {
        "joke": "Did you hear about the claustrophobic astronaut? He just needed a little space.",
        "author": "Astronomy Lover"
    },
    {
        "joke": "Why did the computer keep freezing? Because it left its Windows open!",
        "author": "Tech Geek"
    },
    {
        "joke": "What do you call a group of musical whales? An orca-stra!",
        "author": "Marine Biologist"
    }
];

 function jokesArray1() {
		   const totalJokes = jokesArray.length;
		  function JokeIndex() {
    const randomIndex = Math.floor(Math.random() * totalJokes);
    return randomIndex;
                                        }
											
    const randomIndex = JokeIndex();
    const Joke = jokesArray[randomIndex];

    const jokeTextDiv = document.getElementById("jokeText");
    const authorNameDiv = document.getElementById("authorName");
	jokeTextDiv.innerText = Joke.joke;
    authorNameDiv.innerText = `— ${Joke.author}`;
                       }
					   
     document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("getJokeButton").addEventListener("click", jokesArray1);
});