const CharlyToken = artifacts.require("CharlyToken");

contract('CharlyToken', (accounts) => {
  it('should put 1000 CharlyToken in the first account', async () => {
    const instance = await CharlyToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.valueOf(), "1000000000000000000000", "1000 wasn't in the first account");
  });
});