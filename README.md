## datestamp

A simple Timestamp Microservice built using Express and Node.js that generates Unix and UTC timestamps for provided dates.

[![js-standard-style](https://img.shields.io/badge/style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

### Features

---

1. **Unix Timestamp**: Provides the Unix timestamp for a given date.
2. **UTC Timestamp**: Returns the UTC representation of the provided date.
3. **HTTP Request Handling**: Accepts HTTP requests with a date parameter and responds with timestamp information.

### Usage

---

#### 1.0 Installation:

```bash
git clone https://github.com/zhid0399123/datestamp.git
cd datestamp
pnpm install
```

#### 2.0 Start the Server:

```bash
npm start
```

The server runs on <a href="localhost:3000">localhost:3000</a> by default. You can modify the port in your `.env` file

#### 3.0 Endpoint:

Send a GET request to:

```
http://localhost:3000/v1/api/datestamp/:date_string
```

Replace `:date_string` in the URL with the date to convert (e.g., 2023-11-26, 1637894400 for Unix timestamp).

Example:

```bash
curl http://localhost:3000/v1/api/datestamp/2023-11-26
```

Response:

```json
{
  "unix": 1679942400,
  "utc": "Sun, 26 Nov 2023 00:00:00 GMT"
}
```

### API Endpoints

---

`GET /v1/api/datestamp/:date_string` Retrieves Unix and UTC timestamps for the provided date.

### Contributing

---

Contributions are welcome! Feel free to open issues or submit pull requests. Please refer to the [Contributing Guidelines](CONTRIBUTING.md) to get started.

### License

---

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for more details.
