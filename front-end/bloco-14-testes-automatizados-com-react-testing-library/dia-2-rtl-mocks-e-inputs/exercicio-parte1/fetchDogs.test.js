const service = require("./service");
describe("testando a requisição", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request sucess");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    expect(service.fetchDog()).rejects.toMatch(/failed/);
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });

})