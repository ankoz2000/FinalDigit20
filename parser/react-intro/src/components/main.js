import SkillsForm from '../components/form.js'

function Main() {
  return (
<html lang="ru">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>HR-service</title>
      <link rel="stylesheet" type="text/css" href="index.css"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
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
    <div id="page">
        <div class="container">
            <div class="col-md-12 text-center">
                <h1>HR-service</h1>
                <div id="count">
                <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Ввод ключевых слов</label>
                      <input type="found" class="form-control" id="exampleInputFound" aria-describedby="foundHelp">
                      <small id="foundHelp" class="form-text text-muted">Введите значение.</small>
                    </div>
                   
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">чекбокс</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Найти</button>
                  </form>
                  <hr>
                  <h2>Список резюме</h2>
                  <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item">Java разработчик</li>
                        <li class="list-group-item">Тестировщик</li>
                        <li class="list-group-item">Инженер</li>
                        <li class="list-group-item">Дизайнер</li>
                        <li class="list-group-item">Бэкенд</li>
                      </ul>

                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Назад</a>
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
 <br>
<section id="footer">
    <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark">
            <!-- Navbar content -->
            <h3 class="text-center">ПИКСЕЛИ</h3>
          </nav>
    </div>
</section>
</body>
</html>
  );
}

export default App;
