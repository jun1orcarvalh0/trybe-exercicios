const service = require('./service');


it("Primeiro exercicio - testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(5);

  expect(service.randomNumber()).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Segundo exercicio - crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo Terceiro.', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a , b) => a / b)

  expect(service.randomNumber(20, 4)).toBe(5)
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(20, 4);
});

it('Terceiro exercicio - utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(2, 5, 10)).toBe(100);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledWith(2, 5, 10);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);

});

it('Terceiro exercicio resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.', () => {
  service.randomNumber.mockReset();
  expect(service.randomNumber).toHaveBeenCalledTimes(0);

  service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(service.randomNumber(2)).toBe(4);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledWith(2);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);

});

it("Quarto - testando se a função upperCase foi chamada e fazendo a implementação oposta com mock, qual seu retorno e quantas vezes foi chamada", () => {
  service.upperCase = jest.spyOn(service, "upperCase").mockImplementation((str) => str.toLowerCase())
  
  expect(service.upperCase('ROGERIO')).toBe('rogerio');
  expect(service.upperCase).toHaveBeenCalled();
  expect(service.upperCase).toHaveBeenCalledTimes(1);
});

it("Quarto - testando se a função firstLetter foi chamada e fazendo a implementação oposta com mock, qual seu retorno e quantas vezes foi chamada", () => {
  service.firstLetter = jest.spyOn(service, "firstLetter").mockImplementation((str) => str.charAt(str.length -1))
  
  expect(service.firstLetter('rogerio')).toBe('o');
  expect(service.firstLetter).toHaveBeenCalled();
  expect(service.firstLetter).toHaveBeenCalledTimes(1);
});


it("Quarto - testando se a função upperCase foi chamada e fazendo a implementação oposta com mock, qual seu retorno e quantas vezes foi chamada", () => {
  service.sumOfStrings = jest.spyOn(service, "sumOfStrings").mockImplementation((str1, str2, str3) => str1.concat(str2, str3))
  
  expect(service.sumOfStrings('um', 'louco', 'porcodigos')).toBe('umloucoporcodigos');
  expect(service.sumOfStrings).toHaveBeenCalled();
  expect(service.sumOfStrings).toHaveBeenCalledTimes(1);
});

it('Quarto - testando se a função upperCase foi resetada e testando isso', () => {
  service.upperCase.mockRestore();
  
  service.upperCase = jest.spyOn(service, "upperCase")
  
  expect(service.upperCase('rogerio')).toBe('ROGERIO');
  expect(service.upperCase).toHaveBeenCalled();
  expect(service.upperCase).toHaveBeenCalledTimes(1);
});




