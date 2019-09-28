#Study Buddy

Project # 2 (Georgia Tech Bootcamp)

Collaborator’s: Seth Randell, Jesselyn Jackson  and Ryan Sims

---
We came up with this idea to bring people together that are going through the same thing.  We noticed when working together in Bootcamp we were able to retain more and helped each other grasp the marital better.  This project was quite challenging at first due to the different issues we ran into joining the data from different tables.  This caused us to run into issues with the search for buddy page and that's why it's just static.  Please see the hidden features at the bottom of the page to see what else was done in this project.

Challenges:

Some of the challenges we faced were issues with getting the Sequelize joins to work.  Getting the data from multiple table was the first issue but them we ran into an issue with having a table with more than 2 id columns.  We ended up solving this on the last data by adding "BuddyInterest.removeAttribute("id");" to the buddyinterest.js model.  The last issues was caused by the lack of time and I should be able to get that knocked out soon.  I was having issues with passing the data from the front end from my form too the backend to then include on the page and filter out users in the mySQL database.  

Technologies:
* JavaScript
* jQuery
* mySQL
* Node.js
* Handlebars
* Sequelize ORM
* Matirelize
---
![Project2](https://github.com/doingway2much/Bootstrap-Portfolio/blob/master/assets/img/SB.jpg?raw=true)

---

#About Us
StudyBuddy was created because we saw how hard it was to find a study buddy especially for those already out of school.
We sought out to create a platform where users can find other buddies to help further their understanding and learning.
In the future, we want StudyBuddy to help connect students of all subjects and include in-house learning content.
StudyBuddy was created using HTML, CSS, Javascript, jQuery, Handlebars, MySQl, Materialize and Node.
---

Installing and setting up the App:

1) First create an account and choose a few interests to get started!

``` 
git clone https://github.com/rainbojack1/Project-2.git
```

2) Create a .env file in your main directory

```
touch .env
```

3) Add your mySQL password to the .env file

```
MYSQL_KEY="Your password" (no quotes)
```

4) Install NPM packages no need to install them manually since we have a package.json file

```
npm install
```

5) Created the database and add your seed data you may have to add the creatAT and updated at files if you getting an error importing the seed files.

```
mysq -u root -p
source schema.sql
souce seed.sql
```
7) Once that is done just run the app
```
node server.js
```
---

*****HIDDEN PAGES*****
---
/admin
![AdminView](https://github.com/doingway2much/Study-Buddy/blob/master/public/img/admin.jpg?raw=true)

This page lets you see all of the users but has a delete button so you can delete entries from the database with out writing queries.
---
/find
![FindView](https://github.com/doingway2much/Study-Buddy/blob/master/public/img/find.jpg?raw=true)

This page lets you select what interests you want to search for and will return the id's to the console in an object.  This needs to be tied to the next view but we ran out of time.
---
/found
![FoundView](https://github.com/doingway2much/Study-Buddy/blob/master/public/img/found.jpg?raw=true)

This page statically finds the users that have selected the interests id's of "1 and 5".   I still need to grab that data from the find page and pass it to this page but as mentioned before we ran out of time.
---
