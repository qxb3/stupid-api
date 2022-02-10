# Stupid apis

A collection of stupid apis

# Getting started
### Table of contents
<ul>
  <li><a href="#Documentation">Documentation</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Running">Running</a></li>
</ul>

## Documentation

Test the api here: [Stupid Apis](https://stupid-apis-production.up.railway.app/api/isEven/2)

-----

Check if the number is even
```
/api/isEven/41
```

Check if the number is odd
```
/api/isOdd/24
```

Check if its a number
```
/api/isNumber/12
```

Adds two number
```
/api/add?firstNum=5&secondNum=10
```

Subtracts two number
```
/api/subtract?firstNum=5&secondNum=10
```

Multiplies two number
```
/api/multiply?firstNum=5&secondNum=10
```

Divides two number
```
/api/divide?firstNum=5&secondNum=10
```

-----

### Output
All of the endpoints follow the similar output<br><br>

`Example url:`<br>
`/api/add?firstNum=5&secondNum=10`<br><br>
SUCCESS:
```json
{
  "result": 15
}
```

`Example url:`<br>
`/api/add?firstNum=hi&secondNum=10`<br><br>
ERROR:
```json
{
  "error": "INVALID_QUERY_TYPE",
  "message": "firstNum cannot have any letters or special characters"
}
```

## Installation

```bash
git clone https://github.com/qxb3/stupid-apis.git
cd stupid-apis
yarn
npm install #If using npm
```

## Running

Running the project
```bash
yarn start
npm run start #If using npm
```

Running development
```bash
yarn dev
npm run dev #If using npm
```

# Contributing

Want to contribute? just make a pr :)
