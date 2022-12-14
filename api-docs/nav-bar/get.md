# Nav-bar

**URL** : `/api/nav-bar`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "title": "Flowers",
    "icon": "tile",
    "style": {
      "width": 20,
      "height": 20
    },
    "hasSubLevel": true,
    "by": [
      {
        "title": "Bouquets with",
        "list": [
          {
            "url": "some url",
            "text": "All flowers",
            "status": "Best"
          },
          {
            "url": "some url",
            "text": "Alstroemeria"
          },
          {
            "url": "some url",
            "text": "Delphiniums"
          },
          {
            "url": "some url",
            "text": "Gerberas"
          },
          {
            "url": "some url",
            "text": "Gypsophila"
          },
          {
            "url": "some url",
            "text": "Carnations"
          },
          {
            "url": "some url",
            "text": "Carnations"
          },
          {
            "url": "some url",
            "text": "Bush roses"
          },
          {
            "url": "some url",
            "text": "Lilies"
          },
          {
            "url": "some url",
            "text": "Mattiolami"
          },
          {
            "url": "some url",
            "text": "Orchids"
          },
          {
            "url": "some url",
            "text": "Peony - shaped roses"
          },
          {
            "url": "some url",
            "text": "Sunflowers"
          },
          {
            "url": "some url",
            "text": "Roses",
            "status": "Best"
          },
          {
            "url": "some url",
            "text": "Daisies",
            "status": "Best"
          },
          {
            "url": "some url",
            "text": "Peonies"
          },
          {
            "url": "some url",
            "text": "Statice"
          },
          {
            "url": "some url",
            "text": "Dried flowers"
          },
          {
            "url": "some url",
            "text": "Succulents"
          },
          {
            "url": "some url",
            "text": "All flowers"
          },
          {
            "url": "some url",
            "text": "Alstroemeria"
          },
          {
            "url": "some url",
            "text": "Delphiniums"
          },
          {
            "url": "some url",
            "text": "Gerberas"
          },
          {
            "url": "some url",
            "text": "Gypsophila"
          },
          {
            "url": "some url",
            "text": "Succulents"
          },
          {
            "url": "some url",
            "text": "Tulips",
            "status": "Best"
          },
          {
            "url": "some url",
            "text": "Freesias"
          }
        ]
      },
      {
        "title": "By price",
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
      },
      {
        "title": "Categories",
        "list": [
          {
            "url": "some url",
            "text": "Sale",
            "icon": "percent-sale",
            "style": {
              "width": 17,
              "height": 17
            }
          },
          {
            "url": "some url",
            "text": "Flowers in the basket",
            "icon": "basket-flowers",
            "style": {
              "width": 21,
              "height": 21
            }
          },
          {
            "url": "some url",
            "text": "Flowers in a box",
            "icon": "flowers-box",
            "style": {
              "width": 21,
              "height": 21
            }
          },
          {
            "url": "some url",
            "text": "Insta bouquets",
            "icon": "instagram",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Sales hits",
            "icon": "fire-outline",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Author's bouquets",
            "icon": "bouquet",
            "style": {
              "width": 20,
              "height": 20
            }
          }
        ]
      }
    ]
  },
  {
    "title": "Trending",
    "icon": "fire",
    "style": {
      "width": 16,
      "height": 16
    },
    "hasSubLevel": false
  },
  {
    "title": "Recipient",
    "icon": "user-hart",
    "style": {
      "width": 17.33,
      "height": 16.67
    },
    "hasSubLevel": true,
    "by": [
      {
        "list": [
          {
            "url": "some url",
            "text": "For mom",
            "icon": "mom",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "For partner",
            "icon": "partner",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "For friends",
            "icon": "friends",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "For colleagues",
            "icon": "colleagues",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "For Relatives",
            "icon": "relatives",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Grandparents",
            "icon": "relatives",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Dad",
            "icon": "crown",
            "style": {
              "width": 20,
              "height": 20
            }
          }
        ]
      }
    ]
  },
  {
    "title": "Occasions",
    "icon": "organizer",
    "style": {
      "width": 16,
      "height": 16
    },
    "hasSubLevel": true,
    "by": [
      {
        "list": [
          {
            "url": "some url",
            "text": "Anniversary flowers",
            "icon": "anniversary",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Apology flowers",
            "icon": "apology",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Baby flowers",
            "icon": "baby",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Birthday flowers",
            "icon": "birthday",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Congratulations flowers",
            "icon": "friends",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Friendship flowers",
            "icon": "relatives",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Get well flowers",
            "icon": "face-mask",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Good luck flowers",
            "icon": "trophy",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "New home flowers",
            "icon": "home",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Retirement flowers",
            "icon": "partner",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Romantic flowers",
            "icon": "mom",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Surprise flowers",
            "icon": "gift-card",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Thank you flowers",
            "icon": "colleagues",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Thinking of you flowers",
            "icon": "cloud",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Sympathy flowers",
            "icon": "partner",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Valentine flowers",
            "icon": "love",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Funeral flowers",
            "icon": "candle",
            "style": {
              "width": 20,
              "height": 20
            }
          },
          {
            "url": "some url",
            "text": "Wedding",
            "icon": "wedding",
            "style": {
              "width": 20,
              "height": 20
            }
          }
        ]
      }
    ]
  },
  {
    "title": "Roses",
    "icon": "rose",
    "style": {
      "width": 10.31,
      "height": 16
    },
    "hasSubLevel": true,
    "by": [
      {
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
          },
          {
            "url": "some url",
            "text": "51 roses",
            "from": "- from £45"
          },
          {
            "url": "some url",
            "text": "71 roses",
            "from": "- from £55"
          },
          {
            "url": "some url",
            "text": "101 roses",
            "from": "- from £70"
          },
          {
            "url": "some url",
            "text": "151 roses",
            "from": "- from £90"
          },
          {
            "url": "some url",
            "text": "201 roses",
            "from": "- from £110"
          }
        ]
      },
      {
        "title": "By color",
        "list": [
          {
            "url": "some url",
            "text": "Poor roses"
          },
          {
            "url": "some url",
            "text": "Red roses"
          },
          {
            "url": "some url",
            "text": "Cream roses"
          },
          {
            "url": "some url",
            "text": "Crimson roses"
          },
          {
            "url": "some url",
            "text": "Pink roses"
          },
          {
            "url": "some url",
            "text": "Multi-colored rose mix"
          }
        ]
      },
      {
        "title": "By the look of roses",
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
      },
      {
        "title": "Categories",
        "list": [
          {
            "url": "some url",
            "text": "Roses for my beloved"
          },
          {
            "url": "some url",
            "text": "Roses in the basket"
          },
          {
            "url": "some url",
            "text": "Roses in the form of a heart"
          },
          {
            "url": "some url",
            "text": "Roses for Mom"
          },
          {
            "url": "some url",
            "text": "Roses in a hatbox"
          }
        ]
      }
    ]
  },
  {
    "title": "Sales",
    "icon": "percent-sale",
    "style": {
      "width": 14,
      "height": 14
    },
    "hasSubLevel": false
  }
]
```
