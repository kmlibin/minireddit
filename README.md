# Reddit Minimal
## React/Redux Project

This React App is modeled on Reddit. On load, the app displays data from Reddit's popular thread, though you can choose to display different subreddits from the sidebar on the right side of the screen. Currently, only 25 posts are fetched from Reddit, and I would like to add functionality that allows for multiple fetches. Each post also displays comments, again, I limited the comments and would like to display more in future renders. There is a search bar at the top where you can search through the currently selected Reddit. 

### Languages / Tools

React, Redux Toolkit, JavaScript, CSS, HTML

React Icons, Google Fonts, fdn library

Worked with the Reddit JSON API

### Project Highlights

This project was designed so that students could continue practicing React, React Router, fetching to APIS, and Redux. Some highlights include:

    1. Usual react stuff like useState, useEffect, useNavigate, useParams, react router-dom, dynamic routes, forms
    2. A custom hook to fetch post data from Reddit JSON API
    3. Searchable data
    4. Redux Toolkit to manage state - used for setting post and subreddit data
    5. CSS transitions and animations
    6. Responsive design
    

### What I learned / Challenges

This project helped build my confidence quite a bit, and there were parts that were both rewarding and challenging. I enjoyed the moments where I was figuring out how to work with the API...getting, storing, and using the data (and having it work!) was exciting. Although it's obviously annoying to get stuck on a problem for awhile, I found it satisyfing when I found answers, and I got more comfortable using Stack Overflow. I also enjoyed coming back to CSS and styling the page. 

The first challenge was just trying to figure out the object that Reddit sent - trying to figure out how many layers to go through to find the data I wanted, then trying to decide which keys I needed to access were the two big things I had to understand to move forward. 

The next significant issue I faced was how I wanted to render the comments - I had initially wanted to only load and display comments for one post at a time because it seems more feasible when you're working with (potentially) hundreds or thousands of comments (as opposed to fetching all of the comments on page load and simply hiding them with a toggle). Beacuse this required a lot of asynchronous action, I believe this is where I ran into problems with Redux. I eventually just resorted to storing 25 comments in local state, fetching them on load, and hiding them with a toggle, but I have since discovered that I think I need to look more at Thunks.

There are a few things I would continue to work on - first, just adding more functionality like loading more posts or comments. It would also be nice to have a working count for up/down votes, and in the search bar I would like it to show "search in {current subreddit}". 
