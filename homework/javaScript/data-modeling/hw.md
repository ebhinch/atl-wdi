[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

// 1. To-Do List - This app will be an app for tracking and managing tasks. Not only will it keep track of whether tasks have been completed, it will also keep track of how long each task took to complete. Tasks can be grouped into 'projects' to keep them organized.


var taskManager = {
    name: "Task Manager",
    calendar: "Today is Tuesday, September 5, 2017",
    deadline: "Wednesday, September 7, 2017, at 9 a.m."
}
// This app will need a name, a calendar showcasing the current date and showing when tasks are due, and the capacity for the user to create deadlines. ALSO please note, I'm only including one example value in each key in an effort to avoid styling errors.


var taskTracker = {
    finalDeadline: "Friday, September 9, 2017, at 5 p.m.",
    subDeadlines: "Wednesday, September 7, 2017, at 9 a.m.",
    statusUpdate: "Sections 1 through 5 completed!"
}

// This app will need a way for users to track their final deadlines as well as mini deadlines / checkpoints, intended to keep user on track. Lastly, they'll need an ability to enter status updates as subdeadlines are met.

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

// 2. Photo Sharing App - In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

var photoShare = {
    username: "ebhinch", 
    caption: "The beach is so fun!",
    albumName: "Beach Trip 2017"
}

// This app will need users to create a username in order to own their account. Additionally, users will want to create captions for their images and photo albums (with names) in which to store like images.

var picShare = {
    url: "www.picShare.com",
    date: "Monday, July 3, 2017",
    albumCollection: "a set of all albums uploaded to PicShare"
}

// This app will require the date on which photos were uploaded, a URL where photos may be viewed, and an album collection where other users can view past photo albums. 

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

// 3. Home Automation Manager - This app will be a tool for managing a home automation system; it will keep track of the time and temperature of the house that it monitors, and use that information to turn on and off different lights and adjust the thermostat up and down.

var automationSystem = {
    onButton: "on",
    emergencyAlarm: "This alarm will sound and contact police department in event of emergency",
    alarmVolume: "loud",
    password: "1234"
}

var homeAutomation = {
    temperature: "71*",
    homeBrightness: "dim",
    temperatureButtons: "these buttons will turn temperature up and down"
}

// A home automation system will need buttons to allow the user to increase or decrease home temperature, change light brightness, enter passcode, and many other things. It will also need a passcode, so the homeowner can turn the system on and off, an emergency alarm, emergency alarm value, etc., so it can best protect and automate the home. 

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

// 4. Sneaker Store - This app will allow customers to browse a list of products (sneakers, in this case), add those products to a cart, and save that cart as a past order once the purchase is complete.

var sneakerStore = {
    style: "fitness",
    price: 55,
    size: 8
}

var sneakerShop = {
    sneakerSole: "rubber",
    sneakerColor: "blue",
    orderQuantity: 2 
}

// This shop, among other things, will want to allow users to sort by style, price, size, material and color. Additionally, users will need to specify the quantity they wish to buy before they can place an order.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

// 5. Subway System 
// DISADVANTAGE - This app's main purpose is dictated as being able to tell travelers "how many stops they need to travel to get from one station to another, " but nowhere in this code is that made clear. It would be nice to add a stopCountdown to make abundantly clear how many stops riders will be on the train before they need to get off. 
// ADVANTAGE - The rail lines show what stations they hit, orienting riders and letting them know which stations they'll be traveling through first. 

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

// 6. Doctor Appointment App
// OPTION 1 - Option 1 reads more like the physician's schedule, showing appointments nested within each physician's profile. This would likely appeal to a physician but feels confusing to me, since I'm reading it from the perspective of someone who relates to being a patient more than a doctor. 
// OPTION 2 - Option 2 feels easier to read and less clunky with code. This makes it appeal to me more than Option 1 even more than the fact that it's more patient-oriented. 
//CONCLUSION - It seems to me that depending on how you're reading these files and how you're needing to filter infomration down, Option 1 would appeal to the practice or physician and Option 2 would appeal more to the patient. 


## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.
    
    // 7a. What are some possible entities that your application might use to model its data? Please pick at least two, with at least two properties apiece. 
    // X / O player graphics 
    // Usernames - so players can see who they are playing 

b.  How might those entities be represented in JavaScript code?

// 7b. How might those entities be represented in JavaScript code?
    document.getElementById("oGraphic").src = "http://www.imgur.com/oGraphic.jpg";
    document.getElementById('xGraphic').src = "httP://www.imgur.com/xGraphic.jpg";
    var playerA = "Sam";
    var playerB = "Sarah";

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

//7c. I chose the X and O graphics and usernames because they seem like the fundamentals of the game. In order to play, you'd need to have your playing graphic as well as know who you are playing against. I represented the usernames as players A and B and the images as though they'd been taken from Imgur because there are techniques I've used in the past. 



