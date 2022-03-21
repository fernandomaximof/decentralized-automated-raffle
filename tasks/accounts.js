task("accounts", "PRINTS THE LIST OF ACCOUNTS", async () => {
    const accounts = await ethers.getSigners()
  
    for (const account of accounts) {
      console.log(account.address)
    }
  })
  
  module.exports = {}