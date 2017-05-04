# Express

### 感謝 [BlueT](https://github.com/BlueT) 大大寫了很多超棒的東西！

[給戳](https://github.com/lemon5920/vue-todo-list/tree/master/frontend/fetch)的 Node Server，  
沒有接資料庫，  
重開 Server 資料會 Reset。  

### install dependencies:
`$ cd express && npm install`

### run the app:
`$ DEBUG=express:* npm start`

## API

### GET todos
`GET /todos`

#### response
```
[
  {
    "id": 0,
    "content": "上課",
    "status": false
  },
  {
    "id": 2,
    "content": "做筆記",
    "status": false
  }
]
```

***

### Add todo
`POST /todos`

#### request
```
JSON.stringify({
  content: "洗衣服"
  })
```

#### response
```
[
  {
    "id": 0,
    "content": "上課",
    "status": false
  },
  {
    "id": 2,
    "content": "做筆記",
    "status": false
  },
  {
    "id": 3,
    "content": "洗衣服",
    "status": false
  }
]
```

***

### Remove todo
`DELETE /todos/:id`

#### response
```
// DELETE /todos/2
[
  {
    "id": 0,
    "content": "上課",
    "status": false
  },
  {
    "id": 3,
    "content": "洗衣服",
    "status": false
  }
]
```

***

### Modify todo status
`PATCH /todos/:id`

#### request
```
JSON.stringify({status: true})
// status 為 checkbox 狀態，true / false 。
```

#### response
```
// PATCH /todos/3
[
  {
    "id": 0,
    "content": "上課",
    "status": false
  },
  {
    "id": 3,
    "content": "洗衣服",
    "status": true
  }
]
```
