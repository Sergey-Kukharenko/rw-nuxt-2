# Navigation

**URL** : `/api/navigation`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "main": [
    {
      "url": "some url",
      "title": "Payment & delivery"
    },
    {
      "url": "some url",
      "title": "About us"
    },
    {
      "url": "some url",
      "title": "Reviews",
      "count": 7068
    }
  ],
  "other": [
    {
      "url": "some url",
      "title": "Track your order"
    },
    {
      "url": "some url",
      "title": "Contact us"
    }
  ],
  "call": {
    "icon": {
      "desktop": "whatsapp",
      "mobile": "call-outline"
    },
    "title": "+44 (0)78 0767 8690",
    "href": "https://api.whatsapp.com/send?phone=4407807678690"
  }
}
```
