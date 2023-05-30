import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  playlists: { name: string; movies: { name: string; id: string; banner: string }[] }[] = [
    {
      name: "teste",
      movies: [
        { name: 'Deadpool 2', id: '1', banner: 'https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG' },
        { name: 'Homem Aranha', id: '33', banner: 'https://blogger.googleusercontent.com/img/a/AVvXsEhJ4ENuz44HaI74Stm7Cf7kmSlkr18HbnjVatpqGmke4OwwKtCZSDuVFnJIxNTSfPybs6L9fDHWef-OmlRK5kjRrKFtbrnEL0oitO2FklON4Kbp0rKnGRtwA2YjrqWYxTfgdUyPxZeqYMWfW10HbzJlboQ4gw9Gm9TZdrke0grSm4NRU-qN6Ko' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },

      ]
    },
    {
      name: "teste",
      movies: [
        { name: 'Deadpool 2', id: '1', banner: 'https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG' },
        { name: 'Homem Aranha', id: '33', banner: 'https://blogger.googleusercontent.com/img/a/AVvXsEhJ4ENuz44HaI74Stm7Cf7kmSlkr18HbnjVatpqGmke4OwwKtCZSDuVFnJIxNTSfPybs6L9fDHWef-OmlRK5kjRrKFtbrnEL0oitO2FklON4Kbp0rKnGRtwA2YjrqWYxTfgdUyPxZeqYMWfW10HbzJlboQ4gw9Gm9TZdrke0grSm4NRU-qN6Ko' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },

      ]
    },
    {
      name: "teste",
      movies: [
        { name: 'Deadpool 2', id: '1', banner: 'https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG' },
        { name: 'Homem Aranha', id: '33', banner: 'https://blogger.googleusercontent.com/img/a/AVvXsEhJ4ENuz44HaI74Stm7Cf7kmSlkr18HbnjVatpqGmke4OwwKtCZSDuVFnJIxNTSfPybs6L9fDHWef-OmlRK5kjRrKFtbrnEL0oitO2FklON4Kbp0rKnGRtwA2YjrqWYxTfgdUyPxZeqYMWfW10HbzJlboQ4gw9Gm9TZdrke0grSm4NRU-qN6Ko' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },

      ]
    },
    {
      name: "teste",
      movies: [
        { name: 'Deadpool 2', id: '1', banner: 'https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG' },
        { name: 'Homem Aranha', id: '33', banner: 'https://blogger.googleusercontent.com/img/a/AVvXsEhJ4ENuz44HaI74Stm7Cf7kmSlkr18HbnjVatpqGmke4OwwKtCZSDuVFnJIxNTSfPybs6L9fDHWef-OmlRK5kjRrKFtbrnEL0oitO2FklON4Kbp0rKnGRtwA2YjrqWYxTfgdUyPxZeqYMWfW10HbzJlboQ4gw9Gm9TZdrke0grSm4NRU-qN6Ko' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },

      ]
    },
    {
      name: "teste",
      movies: [
        { name: 'Deadpool 2', id: '1', banner: 'https://4.bp.blogspot.com/-35D6v4UpITg/WrrS9cw_yQI/AAAAAAABQ4Y/iSpYlbUT3nEDxS4rlRmXUzI7nf01MddNgCKgBGAs/s1600/IMG_9119.JPG' },
        { name: 'Homem Aranha', id: '33', banner: 'https://blogger.googleusercontent.com/img/a/AVvXsEhJ4ENuz44HaI74Stm7Cf7kmSlkr18HbnjVatpqGmke4OwwKtCZSDuVFnJIxNTSfPybs6L9fDHWef-OmlRK5kjRrKFtbrnEL0oitO2FklON4Kbp0rKnGRtwA2YjrqWYxTfgdUyPxZeqYMWfW10HbzJlboQ4gw9Gm9TZdrke0grSm4NRU-qN6Ko' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },
        { name: 'Agente Oculto 3', id: '155', banner: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ONMVIV7QI5D2JO33RCBX53YULE.jpg' },

      ]
    }
  ];

}
