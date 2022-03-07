#Como rodar o projeto:
  Requisitos:
  - Dotnet core 6 sdk para poder rodar o backend do projeto, você pode encontra-lo em: https://dotnet.microsoft.com/en-us/download/dotnet/6.0
  - Nodejs 16 lts para rodar o frontend do projeto, você pode encontra-lo em: https://nodejs.org/en/download/
  - Por linha de comando entre na pasta backend e execute: dotnet build
  - Ainda na pasta backend execute dotnet run --project=src/Adapters/Web/VehiclesApi/VehiclesApi.csproj para rodar a api do projeto
  - Pode-se acessar o swagger da api pelo endereço: https://localhost:7001/swagger/index.html
  - Caso queira executar os testes unitarios use o comando: dotnet test
  - Por linha de comando entre na pasta frontend e execute npm install
  - Após o fim da instalação dos pacotes necessários, execute: ng serve para que o frontend comece a ser executado no endereço: http://localhost:4200/
