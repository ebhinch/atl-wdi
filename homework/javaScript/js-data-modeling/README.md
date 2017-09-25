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
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
PART 1:
Accounts: username, password, provider, account name, inbox (received emails)

PART 2:

const InboxSchema = new Schema({
  sender: String,
  subjectLine: String
});

const AccountSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: true
    },
    inbox: [InboxSchema]
});

PART 3:

const exampleAccount = {
  username: "ebhinch",
  password: "password",
  provider: "gmail",
  inbox: [{
    sender: "joeshmo",
    subjectLine: "dinner friday night"
  },
  {sender: "yourmom",
  subjectLine: "your birthday"
  }]
}


```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
PART 1:
Station: name, genre, popularity score, playlist

PART 2:
const PlaylistSchema = new Schema({
  songName: String,
  artist: String,
  length: Number
})

const StationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  popularityScore: Number,
  playlist: [PlaylistSchema]
});

PART 3:
const exampleStation = {
  name: "Pop of the Nineties",
  genre: "pop",
  popularityScore: 9,
  playlist: [{
    songName: "Black Baloon",
    artist: "Goo Goo Dolls",
    length: 180
  },
  {
    songName: "All Star",
    artist: "Smash Mouth",
    length: 200
  }]
}

```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
PART 1:
App: artists, dates, locations, ticket price, recommended shows

PART 2:

const RecommendedSchema = ({
  artist: String,
  date: Number,
  location: String
})

const ShowSchema = new Schema({
  artist: String,
  date: Number,
  location: String,
  ticketPrice: Number,
  recommendedShows: [RecommendedSchema]
})

PART 3:
const exampleApp = {
  artist: "Nickel Creek",
  date: 10052017,
  location: "Asheville",
  ticketPrice: 75,
  recommendedShows: [{
    artist: "Punch Brothers",
    date: 11032017,
    location: "Atlanta"
  }, {
    artist: "Iron and Wine",
    date: 01112018,
    location: "Birmingham"
  }]
}

```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

PART 1: 
Coffee Shops: name, address, menu, past orders

PART 2:

const PastOrderSchema = new Schema({
  menuItem: String,
  date: Number
})

const MenuSchema = new Schema({
  menuItem: String,
  price: Number
})

const CoffeeShopSchemaApp = new Schema({
  shopName: String,
  address: String,
  menu: [MenuSchema],
  pastOrders: [PastOrderSchema]
})

PART 3:
const exampleCoffeeShopApp = {
  shopName: "Octane",
  address: "123 Coffee Shop Lane",
  menu: [{
    menuItem: "cafe au lait",
    price: 3,
  },
    menuItem: "latte",
    price: 3.5
  },
    menuItem: "cold brew",
    price: 2.5
  ]
},
  pastOrders: [{
    menuItem: "cafe au lait",
    date: 09012017
  },
  {
    menuItem: "cold brew",
    date: 07112017
  }
    ]

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
PART 1:
App: team name, player name, player stats, username, team stats...

PART 2:
const TeamStats = new Schema({
  wins: Number,
  losses: Number,
  record: Number
})

const PlayerStats = new Schema({
  playerName: String,
  pointsScored: Number,
  mistakesMade: Number
})

const Players = new Schema({
  playerName: String,
  teamName: String
})

const TeamTrackerApp = new Schema({
  username: String,
  teamName: String,
  sport: String,
  teamStats: [TeamStats],
  playerStats: [PlayerStats],
  playerName: [Players]
})

PART 3:
const exampleTeamApp = {
  username: "ebhinch",
  teamName: "Giants",
  sport: "Football",
  teamStats: [{
    wins: 5,
    losses: 2,
    record: .7
  }],
  playerStats: [{
    playerName: "Sam Jones",
    pointsScored: 40,
    mistakesMade: 3
  },
  {
    playerName: "Matt Thomas",
    pointsScored: 7,
    mistakesMade: 5
  }]
  player: [{
    playerName: "Bob Marley",
    teamName: "Giants"
  },
  {
    playerName: "Santa Clause",
    teamName: "Giants"
  }]

}

```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?
I thought about what of the criteria I was listing would have more than one element and made those into arrays. 

```
I thought about what of the criteria I was listing would have more than one element and made those into arrays. 
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
