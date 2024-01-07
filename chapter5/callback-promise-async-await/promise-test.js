const DB = []

function saveDB(user) {
  const oldDBSize = DB.length + 1 // Error!

  DB.push(user)
  console.log(`save '${user.name}' to DB`)

  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user)
    } else {
      reject(new Error('Save DB Error'))
    }
  })
}

function sendEmail(user) {
  console.log(`email to ${user.name}`)
  return new Promise((resolve) => {
    resolve(user)
  })
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`)
  })
}

function registerByPromise(user) {
  const result = saveDB(user)
                  .then(sendEmail)
                  .then(getResult)
                  .catch(error => new Error(error))
                  .finally(() => console.log('완료'))
  console.log(result)
  return result
}

const user = { email: 'doyeon@gmail.com', name: 'doyeon', password: '1234' }
const result = registerByPromise(user)
result.then(console.log)

const allResult = Promise.all([saveDB(user), sendEmail(user), getResult(user)])
allResult.then(console.log)