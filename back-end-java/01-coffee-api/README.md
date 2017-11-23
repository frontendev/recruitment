# Coffee API
Using a Java web framework of choice develop a simple RESTful coffee ordering API.


## Description
finder.com is looking to build a coffee ordering system so their developers can stay well caffeinated. 
Backing the coffee ordering system will be the Coffee API, a RESTful API that will list the beverages currently waiting to be made.

We need the system to allow a developer to place an order. An order consists of one or more coffees. 

## Desired endpoints
1. Fetch all coffees
1. Fetch coffee by ID
1. Fetch all orders
1. Fetch order by ID

### Fetch a collection of all coffees
GET /coffee
```json
[
  {
    "id": 12,
    "type": "flatwhite",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 13,
    "type": "piccolo",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 14,
    "type": "cappuccino",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 15,
    "type": "flatwhite",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 16,
    "type": "latte",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 17,
    "type": "macchiato",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 18,
    "type": "flatwhite",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 19,
    "type": "longblack",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 20,
    "type": "cappuccino",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 21,
    "type": "macchiato",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  },
  {
    "id": 22,
    "type": "latte",
    "created": "2017-11-23T05:12:04Z",
    "updated": "2017-11-23T05:12:04Z"
  }
]
```

### Fetch a single coffee by it's ID
GET /coffee/:id
```json
{
  "id": 12,
  "type": "flatwhite",
  "created": "2017-11-23T05:12:04Z",
  "updated": "2017-11-23T05:12:04Z"
}
```

### Fetch all coffee orders
GET /order
```json
[
  {
    "id": 1,
    "coffees": [
      {
        "id": 12,
        "type": "flatwhite",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 13,
        "type": "piccolo",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      }
    ],
    "status": "awaiting",
    "created": "2017-11-23T05:08:17Z",
    "updated": "2017-11-23T05:08:17Z"
  },
  {
    "id": 2,
    "coffees": [
      {
        "id": 14,
        "type": "cappuccino",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      }
    ],
    "status": "deleted",
    "created": "2017-11-23T05:08:17Z",
    "updated": "2017-11-23T05:08:17Z"
  },
  {
    "id": 3,
    "coffees": [
      {
        "id": 15,
        "type": "flatwhite",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 16,
        "type": "latte",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 17,
        "type": "macchiato",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 18,
        "type": "flatwhite",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      }
    ],
    "status": "awaiting",
    "created": "2017-11-23T05:08:17Z",
    "updated": "2017-11-23T05:08:17Z"
  },
  {
    "id": 4,
    "coffees": [
      {
        "id": 19,
        "type": "longblack",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 20,
        "type": "cappuccino",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      }
    ],
    "status": "served",
    "created": "2017-11-23T05:08:17Z",
    "updated": "2017-11-23T05:08:17Z"
  },
  {
    "id": 5,
    "coffees": [
      {
        "id": 21,
        "type": "macchiato",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      },
      {
        "id": 22,
        "type": "latte",
        "created": "2017-11-23T05:12:04Z",
        "updated": "2017-11-23T05:12:04Z"
      }
    ],
    "status": "preparing",
    "created": "2017-11-23T05:08:17Z",
    "updated": "2017-11-23T05:08:17Z"
  }
]
```

### Fetch a coffee order by it's ID
GET /order/:id
```json
{
  "id": 1,
  "coffees": [
    {
      "id": 12,
      "type": "flatwhite",
      "created": "2017-11-23T05:12:04Z",
      "updated": "2017-11-23T05:12:04Z"
    },
    {
      "id": 13,
      "type": "piccolo",
      "created": "2017-11-23T05:12:04Z",
      "updated": "2017-11-23T05:12:04Z"
    }
  ],
  "status": "awaiting",
  "created": "2017-11-23T05:08:17Z",
  "updated": "2017-11-23T05:08:17Z"
}
```



