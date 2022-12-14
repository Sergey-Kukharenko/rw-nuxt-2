# Best-bouquets

**URL** : `/api/best-bouquets`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "main": {
    "title": "Our best bouquets"
  },
  "list": [
    {
      "title": "We Grew Too Many Bright Roses",
      "img": "path to img",
      "url": "some url",
      "rating": 4.95,
      "reviews": 170,
      "like": false,
      "price": 52.76
    },
    {
      "title": "We Grew Too Many Bright Roses",
      "img": "path to img",
      "url": "some url",
      "rating": 4.95,
      "reviews": 170,
      "like": false,
      "price": 52.76
    },
    {
      "title": "The Tegan",
      "img": "path to img",
      "url": "some url",
      "rating": 4.95,
      "reviews": 170,
      "like": false,
      "price": 52.76,
      "sale": {
        "status": "sale",
        "percent": "-30%"
      }
    },
    {
      "title": "The Frankie",
      "img": "path to img",
      "url": "some url",
      "rating": 4.95,
      "reviews": 170,
      "like": false,
      "price": 52.76,
      "sale": {
        "status": "sale",
        "percent": "-30%"
      }
    }
  ]
}
```
