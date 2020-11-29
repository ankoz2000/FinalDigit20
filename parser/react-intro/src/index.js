import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/resume.js';
import SkillsForm from './components/form.js';

ReactDOM.render(
  <React.StrictMode>
    <html lang="ru"></html>
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>HR-service</title>
      <link rel="stylesheet" type="text/css" href="./styles/index.css"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#">ПИКСЕЛИ</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Главная <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">О нас</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"></a>
                </li>
              </ul>
              <span class="navbar-text">
             
              </span>
            </div>
          </nav>
  </nav>

  <div id ="wrap">
  <div id="page">
  <div class="container">
  <div class="col-md-12 text-center">
    <h1>HR-service</h1>
      <div id="count">
        <SkillsForm />
        <hr/>
          <h2>Список резюме</h2>
          <div class="col-md-12">
            <MyComponent />
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabIndex="-1" aria-disabled="true">Назад</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Далее</a>
                </li>
              </ul>
            </nav>
          </div>
      </div>

  </div>
  </div>

  </div>
  </div>
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

