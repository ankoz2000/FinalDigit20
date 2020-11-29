import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("/scr/curl.php")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
/*      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {*/
        return (
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Java разработчик</li>
              <li class="list-group-item">Тестировщик</li>
              <li class="list-group-item">Инженер</li>
              <li class="list-group-item">Дизайнер</li>
              <li class="list-group-item">Бэкенд</li>
            </ul>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.desc}
                </li>
              ))}
            </ul>
          </div>
        );
      //}
    }
  }

  export default MyComponent;