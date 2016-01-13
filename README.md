# Nork

This module is a simple-text-based game called Nork, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!

##### 1. Explain how you organized the _data_ and _behaviors_ of your program. Did you break up your work into different _objects_, _functions_, or _files_? Reflect on why you chose to organize it the way that you did. #####
> I organized all the data of the program in the world.json file that is in /lib, this includes all 4 rooms items in rooms, descriptions of rooms and exits of each room. This is all wrapped in a rooms array in the world file.
The behaviors of the program are broken into different functions that I assigned to variables, which are called by other functions to provide the working game.


##### 2. Does your application demonstrate good *coupling*? Explain your answer either way. #####
> My application doesn't really demonstrade good coupling. It's not the worst, but I'm not really using objects. The program is seperated into functions though, and they mostly don't rely on eachother though some do call eachother and it would probably break if you deleted some functions.


##### 3. Would your application be easy to update in the future (e.g., to add more rooms, items, actions)? Why or why not? #####
> It would be pretty easy to update the rooms and items, since all the information of the world is in the .json file. It would also be easy to update the actions, just write a new function and add another else if statement in the input function. 


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> I think I spent approximately 6 hours on this assignment. Most of that time was bumbling around with object orientation in JavaScript though.


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> I started reading the textbook JavaScript the Good Parts to try and figure out prototypical inheritence, but it turned out that I didn't really have time to learn enough to take an object oriented approach to this assignment. I also used the example code that prof Ross put on github to write the node.js readline function. I also looked up how to close node.js on StackExchange.


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> At first I tried to use OOP, but I don't really get prototypical inheritence in JavaScript yet so I ended up just seperating the program into functions that interact together.
