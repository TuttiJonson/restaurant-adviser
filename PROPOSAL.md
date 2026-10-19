# Proposal MD (the project through my eyes)

What I am building: I am building a tool that answers this question: Of the restaurants I have already saved, which one should I go to right now, depending on whether I've never been to it or have been to it, my cravings, how far it is, and how much I want to spend? It saves me time because I find myself spending endless amounts of time searching for places to eat in a list that contains 50 restaurants. 

Who it is for: this is for me, and the problem it solves is making a restaurant list proactive

What it remembers: 
Remembers the restaurant list itself. For each place:
- the location
- the name
- the type of cuisine
- the price tier
- different tags, a visitor record which places IDs to where I've been and when , escape record of how many times I've passed on each place. , Saved location. 

Where the data lives: in a local storage, everything persists in the browser on my own device, with no server, account or API.
Features: 
1. A weighted scoring engine craving, distance, price, staleness and vibe that returns one pick rather than a list.
2. Live distance from wherever I am, so the same list works in Boston or abroad.
3. A rejection list showing what got cut and why.
4. A staleness factor that pushes long-ignored places up the ranking, so the list actually drains.
5. An editable list where I add places and mark off the ones I've been to.

What I do not know yet: 
- The location  
- Getting the current position  
- The ranking / the formula for the ranking  
- How to write the JSON for the local storage