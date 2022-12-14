# Reviews

**URL** : `/api/reviews`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "social": {
      "name": "google",
      "rating_count": 4.6,
      "text": "All reviews are from the real customers!"
    },
    "avatar": "path to img",
    "user_name": "Isabella Gilbert",
    "rating_count": 5,
    "text": "Thank you so much for the timely delivery and for the opportunity to make an orderand delivery day to day. Thank you so much for the timely delivery and for the opportunity to make an orderand delivery day to day.",
    "isTextHidden": true
  },
  {
    "social": {
      "name": "google",
      "rating_count": 4.6,
      "text": "Up to 178 reviews from the real customers"
    },
    "avatar": "path to img",
    "user_name": "Michel John",
    "rating_count": 4,
    "text": "Thank you so much for the timely delivery and for the opportunity to make an orderand delivery day to day.",
    "isTextHidden": true
  }
]
```
