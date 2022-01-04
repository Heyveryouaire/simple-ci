# Deploy on heroku
## Visit https://dashboard.heroku.com/
### Create new application
### Application setting 

In the Heroku dashboard application, set config vars:
| Vars | Value |
| ---- | ----- |
| PORT | 3000  |

```js
// index.js
const PORT = process.env.PORT || 3000
app.listen(PORT , () => {})
```
> Note: Step require to bind express port and heroku port

### Application deploy 
Connect to Github
Enable Automatic deploys (on main only)
### Check heroku is installed
```js
npm install heroku -g
```
### Log to heroku
```js
heroku login
```
### Do usual tasks
```sh
git add  .
git commit -m "..."
git push
```
