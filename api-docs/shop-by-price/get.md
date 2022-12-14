# Shop-by-price

**URL** : `/api/shop-by-price`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "title": "Shop by price",
  "list": [
    {
      "type": "£",
      "url": "some url",
      "title": "Under £30",
      "link": "Shop"
    },
    {
      "type": "££",
      "url": "some url",
      "title": "£30-50",
      "currency": "pounds",
      "link": "Shop"
    },
    {
      "type": "£££+",
      "url": "some url",
      "title": "Over £50",
      "link": "Shop"
    }
  ]
}
```
