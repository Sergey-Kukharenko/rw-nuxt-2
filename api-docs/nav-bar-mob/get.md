# Nav-bar-mob

**URL** : `/api/nav-bar-mob`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "type": "all",
    "title": "Flowers",
    "icon": "flowers",
    "hasSubLevel": true,
    "list": [],
    "link": {
      "url": "some url",
      "text": "Show all bouquets MyFlowers"
    },
    "categories": {
      "title": "",
      "list": [
        {
          "icon": "percent-sale",
          "url": "some url",
          "text": "Sale"
        },
        {
          "icon": "instagram",
          "url": "some url",
          "text": "Insta Bouquets"
        },
        {
          "icon": "fire-outline",
          "url": "some url",
          "text": "Sales hits"
        },
        {
          "icon": "bouquet",
          "url": "some url",
          "text": "Author\"s bouquets"
        },
        {
          "icon": "flowers-box",
          "url": "some url",
          "text": "Flowers in a box"
        },
        {
          "icon": "bag-outline",
          "url": "some url",
          "text": "Flowers in the basket"
        }
      ]
    },
    "by": {
      "price": {
        "title": "Bouquets by price",
        "list": [
          {
            "url": "some url",
            "text": "Cheap flowers"
          },
          {
            "url": "some url",
            "text": "Bouquets up to £25"
          },
          {
            "url": "some url",
            "text": "Bouquets £25 – £50 "
          },
          {
            "url": "some url",
            "text": "Bouquets £50 – £100"
          },
          {
            "url": "some url",
            "text": "Premium bouquets"
          },
          {
            "url": "some url",
            "text": "Special offer"
          }
        ]
      }
    },
    "products": {
      "title": "All flowers",
      "list": [
        {
          "img": "https://images.unsplash.com/photo-1615182787503-08365d1e7fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Roses",
          "status": "Best"
        },
        {
          "img": "https://images.unsplash.com/photo-1591963944277-fe153988e471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvbmllcyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82",
          "title": "Peonies",
          "status": "Best"
        },
        {
          "img": "https://images.unsplash.com/photo-1522482999650-be954a7c0392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsaXBzJTIwYm91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Tulips"
        },
        {
          "img": "https://images.unsplash.com/photo-1610190441997-dac1fb499b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFpc2llcyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82",
          "title": "Daisies"
        },
        {
          "img": "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3lwc29waGlsZXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Gypsophiles"
        },
        {
          "img": "https://images.unsplash.com/photo-1610190427750-03e9095f18e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VyYmVyYXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Gerberas"
        },
        {
          "img": "https://images.unsplash.com/photo-1627386849179-64cef440c32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hyeXNhbnRoZW11bXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Chrysanthe-mums"
        },
        {
          "img": "https://images.unsplash.com/photo-1539273251151-8fa6774835e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvbnklMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Peony - shaped roses"
        },
        {
          "img": "https://images.unsplash.com/photo-1610190441997-dac1fb499b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaCUyMCUyMHJvc2VzJTIwYm91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Bush roses"
        },
        {
          "img": "https://images.unsplash.com/photo-1497276236755-0f85ba99a126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdHRpb2xpJTIwYm91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Mattioli"
        },
        {
          "img": "https://images.unsplash.com/photo-1534274265498-790499219879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXVzdG9tYXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Eustomas"
        },
        {
          "img": "https://images.unsplash.com/photo-1647188468717-b0ff88f584ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpbGllcyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82",
          "title": "Lilies"
        },
        {
          "img": "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Alstrometry"
        },
        {
          "img": "https://images.unsplash.com/photo-1593106388186-34642739d308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXF1ZXQlMjBjYXJuYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82",
          "title": "carnations"
        },
        {
          "img": "https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91cXVldCUyMGRyaWVkJTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "Dried flowers"
        },
        {
          "img": "https://images.unsplash.com/photo-1587052799510-68a2d2b28d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91cXVldCUyMGZyZWVzaWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
          "title": "Freesias"
        },
        {
          "img": "https://images.unsplash.com/photo-1561618375-3f70005077e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91cXVldCUyMHN0YXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "static"
        },
        {
          "img": "https://images.unsplash.com/photo-1565320094903-6eae6e143bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym91cXVldCUyMHN1Y2N1bGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82",
          "title": "Freesias"
        },
        {
          "img": "https://images.unsplash.com/photo-1497276236755-0f85ba99a126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvdXF1ZXQlMjBkZWxwaGluaXVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82",
          "title": "delphiniums"
        }
      ],
      "additionally": {
        "img": "https://images.unsplash.com/photo-1625144780860-bea39d8e6af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYW1vbWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=170&h=82",
        "title": "Growing a catalog..."
      }
    }
  },
  {
    "type": "roses",
    "title": "Roses",
    "icon": "rose",
    "hasSubLevel": true,
    "list": [],
    "link": {
      "url": "some url",
      "text": "Show all bouquets MyFlowers"
    },
    "categories": {
      "title": "Categories",
      "list": [
        {
          "icon": "love",
          "url": "some url",
          "text": "Roses for your beloved"
        },
        {
          "icon": "bag-outline",
          "url": "some url",
          "text": "Roses in the basket"
        },
        {
          "icon": "mom",
          "url": "some url",
          "text": "Roses for Mom"
        },
        {
          "icon": "friends",
          "url": "some url",
          "text": "Roses for Mom"
        },
        {
          "icon": "flowers-box",
          "url": "some url",
          "text": "Roses in a box"
        }
      ]
    },
    "by": {
      "quantity": {
        "title": "By quantity",
        "list": [
          {
            "url": "some url",
            "text": "15 roses",
            "from": "- from £15"
          },
          {
            "url": "some url",
            "text": "21 roses",
            "from": "- from £25"
          },
          {
            "url": "some url",
            "text": "25 roses",
            "from": "- from £30"
          },
          {
            "url": "some url",
            "text": "35 roses",
            "from": "- from £35"
          },
          {
            "url": "some url",
            "text": "41 roses",
            "from": "- from £40"
          }
        ],
        "link": {
          "url": "some url",
          "text": "Show all"
        }
      },
      "look": {
        "title": "By the look of roses",
        "list": [
          {
            "url": "some url",
            "text": "Classic"
          },
          {
            "url": "some url",
            "text": "Kenyan"
          },
          {
            "url": "some url",
            "text": "Peony - shaped"
          },
          {
            "url": "some url",
            "text": "Bush"
          }
        ]
      },
      "height": {
        "title": "By height",
        "list": [
          {
            "url": "some url",
            "text": "Roses 40 cm"
          },
          {
            "url": "some url",
            "text": "Roses 50 cm"
          },
          {
            "url": "some url",
            "text": "Roses 60 cm"
          },
          {
            "url": "some url",
            "text": "Roses 70 cm"
          }
        ]
      }
    },
    "products": {
      "title": "By color",
      "list": [
        {
          "img": "https://images.unsplash.com/photo-1486639107311-064febaff1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VycyUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=80&h=64",
          "title": "White"
        },
        {
          "img": "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VycyUyMHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=80&h=64",
          "title": "Red"
        },
        {
          "img": "https://images.unsplash.com/photo-1498813479361-b55a51e27ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VycyUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=64",
          "title": "Cream"
        },
        {
          "img": "https://images.unsplash.com/photo-1582692170784-4152906a4298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=64",
          "title": "Orange"
        },
        {
          "img": "https://images.unsplash.com/photo-1562048048-86d659689440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMHBpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=100&w=82&h=64",
          "title": "Pink"
        },
        {
          "img": "https://images.unsplash.com/photo-1615046526364-ccfd92cd45bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VycyUyMG11bHRpY29sb3JlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&w=82&h=64",
          "title": "Multicolored"
        }
      ]
    }
  },
  {
    "type": "relatives",
    "title": "Recipients",
    "icon": "relatives",
    "hasSubLevel": true,
    "list": [
      {
        "url": "some url",
        "text": "For mom",
        "icon": "mom"
      },
      {
        "url": "some url",
        "text": "For partner",
        "icon": "partner"
      },
      {
        "url": "some url",
        "text": "For friends",
        "icon": "friends"
      },
      {
        "url": "some url",
        "text": "For colleagues",
        "icon": "colleagues"
      },
      {
        "url": "some url",
        "text": "For Relatives",
        "icon": "relatives"
      }
    ]
  },
  {
    "type": "occassions",
    "title": "Occasions",
    "icon": "organizer",
    "hasSubLevel": true,
    "list": [
      {
        "url": "some url",
        "text": "Birthday",
        "icon": "birthday"
      },
      {
        "url": "some url",
        "text": "Anniversary",
        "icon": "anniversary"
      },
      {
        "url": "some url",
        "text": "wedding-anniversary",
        "icon": "wedding-anniversary"
      },
      {
        "url": "some url",
        "text": "Date",
        "icon": "mom"
      },
      {
        "url": "some url",
        "text": "Extract from the hospital",
        "icon": "extract-hospital"
      },
      {
        "url": "some url",
        "text": "Housewarming",
        "icon": "housewarming"
      },
      {
        "url": "some url",
        "text": "Graduation",
        "icon": "graduation"
      },
      {
        "url": "some url",
        "text": "An apology",
        "icon": "apology"
      },
      {
        "url": "some url",
        "text": "Simply so",
        "icon": "simply"
      },
      {
        "url": "some url",
        "text": "Wedding",
        "icon": "wedding"
      }
    ]
  },
  {
    "type": "bestsales",
    "title": "Best sales",
    "icon": "fire-outline",
    "hasSubLevel": false
  },
  {
    "type": "favorite",
    "title": "Favorite",
    "icon": "mom",
    "hasSubLevel": false
  },
  {
    "type": "gifts",
    "title": "Gifts",
    "count": 12,
    "icon": "gift",
    "hasSubLevel": false
  },
  {
    "type": "sales",
    "title": "Sales",
    "icon": "percent-sale",
    "hasSubLevel": false
  }
]
```
