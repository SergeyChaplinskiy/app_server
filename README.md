## Hi, friend :wave:

#### I implemented this application as another example of a REST API client/server architecture.

### **1. Implement REST API endpoints:**

​
_1. Search_
​
```bash
    curl --location --request GET 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
    }
```
​
_2. Creation_
​
```bash
    curl --location --request POST 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "name": "testUser"
    }
```
​
_3. Change_
​
```bash
    curl --location --request PATCH 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "newTestUser"
    }
```
​
_4. Deletion_
​
```bash
    curl --location --request DELETE 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }
```
_Controller method example:_
​
```javascript
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();
​
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
```
_Service method example:_
​
```javascript
/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all users
 * @returns Promise<UserModel[]>
 */
async findAll() {
    return UserModel.find({});
}
```
_Middleware part example:_
​
```javascript
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());
// returns the compression middleware
app.use(compression());
// helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
// providing a Connect/Express middleware that can be used to enable CORS with various options
app.use(cors());
```
### **2. Implemented the following application structure:**
```bash
    src
    |__ components
    |   |__user
    |      |__controller.js
    |      |__service.js
    |      |__model.js
    |__config
    |   |__connection.js
    |   |__middleware.js
    |   |__router.js
    |___server
    |   |__server.js
    |
    |__package.json
    ...
```
### **3. Implemented validation of input parameters using - [Joi](https://joi.dev/api/)**

### **4. Implemented with help [Graceful Shutdown](https://www.npmjs.com/package/http-graceful-shutdown)**

### **5. Using [mongoose](https://cloud.mongodb.com/) I added a database and wrote its schema.**

## Thanks :sunglasses: