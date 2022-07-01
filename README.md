# NHLGameBlog2
#### This blog is similar to one I created in March 2022. But this one stores data in fake database and not in file. The purpose was to practive MVC (Model View Controller) paradigm. I was able to get data from database, allow users to login, establish sessions. It is first time ever I used handlebars. Seems like I learned how to do it. Overall design is ugly because I borrowed someone else's style to do it. Did not change CSS at all. 
#### I did not bother to create complete game blog. That's why it was not full roster but just three players with random stats, which are not real numbers. Players are real. Maybe I will add a feature to add a player. But mor elikely I will create it in new incarnation of this blog. 
#### This is continuation of this repository: https://github.com/umnovjp/NHLGamesBlog. That one allowed anyone to add game reviews. There were way too many games in one file. We will use database to store it better. This repo does not offer a user to add reviews because I know already how to do it. And there is another great repo, which allows to pull game stats normally not available on www.nhl.com: https://github.com/umnovjp/NHLStats. In the future I plan to combine all of them to view stats other fans cannot find. I stopped development of that one because JS file exceeded 700 lines. I will continue spreading functions on server. 
#### To try this script, first start database: `mysql -u root -p`, then enter your password, then run `source db/schema.sql`, then tun `exit'. After exit, run `npm run seed` then `npm start`. You will be able to navigate from main menu to individual games of 2021-2022 stars series against Calgary Flames. You cannot navigate to roster yet. For some reason, #each built in helper does not run yet. But it will eventually. 
#### And by start of new season in October I should be ready to use actual deployed site. Follow me!
#### And last thing. I borrowed ccs file from another repo. Did not change it a bit. But still this repo shows I contriubuted 52% of css. That's not true... I contributed JS and handlebars. 