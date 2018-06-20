#!/bin/bash

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "name":"Docker Meetup", "city":"Colombo", "address":"1st Street" }' 'http://localhost:3001/api/Meetups'

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "name":"Kubernetes Meetup", "city":"London", "address":"2nd Street" }' 'http://localhost:3001/api/Meetups'

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "name":"GoLang Meetup", "city":"New York",  "address":"3rd Street" }' 'http://localhost:3001/api/Meetups'

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "name":"Node.js Meetup", "city":"Boston", "address":"4th Street" }' 'http://localhost:3001/api/Meetups'
