const bcryptjs = require(`bcryptjs`)
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
          const verified = bcryptjs.compareSync(password, users[i].passHash)
          if(verified) {
            let userReturn = {...users[i]}
            delete userReturn.passHash
            return res.status(200).send(userReturn)
          }
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const passHash = bcryptjs.hashSync(password)
      req.body.password = passHash
      let user = {
        username,
        email,
        firstName,
        lastName,
        passHash

      }
      users.push(user)
      let userReturn = {...user}
      delete userReturn.passHash
        res.status(200).send(userReturn)
    }
}