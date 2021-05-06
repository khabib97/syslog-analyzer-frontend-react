# Syslog Analyzer Frontend Using React.js

### Problem Statement

The frontend service, using [syslog backend service](https://github.com/khabib97/syslog-analyzer-scala-akka-framework), must represent the selected data. Frontend page must have 3 input fields: “From”, “To” and “Phrase”. After click on submit, service using AJAX technology, post input fields data to backend service. Result data from backend must be placed in table using REACT. The table must have to columns: “Datetime” and “Message”. The text (phrase) must be highlighted in the entry.
Next, frontend, using REACT, plot histogram based on data from (/api/histogram) endpoint.

### Solution Summary

It consumes value from the following api, and generate a table and histogram based on the query.  

API Documentation:
|Description|HTTP Method|URI|Request|Response|
|-----------|-----------|---|-------|--------|
|Get data|POST| /api/data|```{"datetimeFrom": 1619287644857,"datetimeUntil": 1619291220000,"phrase": "systemd-networkd"}```|```{"data":[{"datetime":1619289169000,"message":"ucchwas systemd[1]: Starting Dispatcher daemon for systemd-networkd...","highlightText":[{"fromPosition":52,"toPosition":67}]},{"datetime":1619289170000,"message":"ucchwas networkd-dispatcher[1395]: WARNING: systemd-networkd is not running, output will be incomplete.","highlightText":[{"fromPosition":45,"toPosition":60}]},{"datetime":1619289170000,"message":"ucchwas systemd[1]: Started Dispatcher daemon for systemd-networkd.","highlightText":[{"fromPosition":51,"toPosition":66}]}],"datetimeFrom":1619287644857,"datetimeUntil":1619291220000,"phrase":"systemd-networkd"}```|
|Get histogram|POST|/api/histogram|```{"datetimeFrom": 1619287644857,"datetimeUntil": 1619291220000,"phrase": "systemd-networkd"}```|```{"histogram":[{"datetime":1619289169000,"counts":1},{"datetime":1619289170000,"counts":2}],"datetimeFrom":1619287644857,"datetimeUntil":1619291220000,"phrase":"systemd-networkd"}```|

![Landing Page Table](https://github.com/khabib97/syslog-analyzer-frontend-react/blob/master/ui-overview/home_page.png)

![Histogram Page](https://github.com/khabib97/syslog-analyzer-frontend-react/blob/master/ui-overview/histogram_page.png)


### Technology Used

- Language: JS, JSX
- Library Framework: React
- Library: Highlight-Text, DateTime Picker, Chart.js

Note: Visual Studio Code(IDE) is used for this project.

### Project setup 

Download the repository, go to folder and run `npm install` command. It will install dependencies. 

### Run

`npm start`

`default url: http://127.0.0.1:3000`

### Learning 

- fetch API data using react `fetch`
- build react table based on API respone
- manipulate api data during table build up
- datetime pick up ui
- highlighting word
