const _db = require('../Models');

async function getBasePosts() {

  const userName = await _db.User.find({}, { username: 1, _id: 0 }).lean();
  const userNameToString = await userName.map((user: { username: any; }) => user.username);


  return [
    {
      title: 'La historia interminable',
      description: 'La Historia Interminable es una película de 1984 basada en la novela de Michael Ende. Cuenta la historia de Bastian, un niño solitario que se sumerge en un libro mágico y fantástico donde conoce a Atreyu, un joven guerrero que busca salvar el reino de Fantasía de la Nada. Juntos luchan contra el tiempo para encontrar la única manera de salvar a Fantasía: darle un nuevo nombre.',
      image: 'https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg',
      vote: 1552,
      author: userNameToString[0]
    },
    {
      title: 'La novia cadaver',
      description: 'Esta película animada de 2005, también dirigida por Tim Burton, cuenta la historia de Victor, un joven que accidentalmente se compromete con una novia cadáver en el mundo de los muertos. Mientras intenta encontrar una manera de regresar al mundo de los vivos, se enamora de Emily, una novia cadáver más amable y comprensiva que su prometida original. Una película con una animación impresionante y una banda sonora encantadora.',
      image: 'https://static.wikia.nocookie.net/doblaje/images/2/2b/El_cadaver_de_la_novia_poster8.jpg',
      vote: 523,
      author: userNameToString[1]
    },
    {
      title: 'Big Fish',
      description: 'Big Fish: La película de 2003 dirigida por Tim Burton sigue la vida de Edward Bloom, un hombre excéntrico y fabulador que cuenta historias increíbles sobre su vida. Su hijo, Will, trata de separar la realidad de la ficción mientras escucha las historias de su padre moribundo. Una película conmovedora y mágica sobre la relación entre un padre y un hijo.',
      image: 'https://lamenteesmaravillosa.com/wp-content/uploads/2017/12/portada-pelicula-big-fish-768x576.jpg',
      vote: 13520,
      author: userNameToString[2]
    },
  ];
}

export default getBasePosts;