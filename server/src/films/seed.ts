interface SeedFilm {
  kpId: string;
  nameRu: null | string;
  nameOriginal: null | string;
  slogan: null | string;
  description: null | string;
  shortDescription: null | string;
  filmLength: number;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: string[];
  genres: string[];
  type: 'VIDEO' | 'FILM' | 'MINI_SERIES' | 'TV_SERIES' | 'TV_SHOW';
}

export const items: SeedFilm[] = [
  {
    kpId: '1003587',
    year: 2016,
    description:
      'Рассказ о жизни американского государственного и политического деятеля Александра Гамильтона.',
    filmLength: 90,
    countries: ['США'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Гамильтон',
    nameOriginal: "Hamilton's America",
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1003587.jpg?alt=media&token=28f9298e-1c74-4c8a-99cd-0f98b142f81d',
    genres: ['биография', 'мюзикл'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1003587.jpg?alt=media&token=c7530eed-b3e9-4283-afd4-1d903c58d964',
    slogan: null,
  },
  {
    kpId: '1007472',
    year: 2016,
    description:
      'Дэвид Аттенборо демонстрирует невероятные по красоте пейзажи, заповедные и малоизученные уголки Земли.',
    filmLength: null,
    countries: ['США', 'Франция', 'Великобритания', 'Германия', 'Китай'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Планета Земля 2',
    nameOriginal: 'Planet Earth II',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1007472.jpg?alt=media&token=167b85e8-2a2e-41ef-9588-85d5df0b6bf7',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1007472.jpg?alt=media&token=cd97e483-afa8-4786-8c43-9d4cb1ee5af8',
    slogan: 'A new world revealed',
  },
  {
    kpId: '1008652',
    year: 2015,
    description:
      'Семья Линь была обвинена в измене и приговорена к смерти. 19-летнему Линь Шу, командующему одного из отрядов армии династии Лян, удалось выжить и спрятаться в Цзянху, мире бойцов. Приняв личность ученого Мэй Чансу, он основывает союз Цзянцзо и готовится отомстить.',
    filmLength: 45,
    countries: ['Китай'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Список Ланъя',
    nameOriginal: 'Lang ya bang',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1008652.jpg?alt=media&token=f54981b1-8420-4a29-8a0e-072c2c824edf',
    genres: ['драма', 'история'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1008652.jpg?alt=media&token=9ad58d44-4554-43f0-ab48-9226ccafa457',
    slogan: null,
  },
  {
    kpId: '1043658',
    year: 2011,
    description:
      'Шоу повествует о героической борьбе сэра Фрэнсиса Грязного и его верных друзей против зловещего тёмного бога в сюрреалистической «омнивселенной».',
    filmLength: 12,
    countries: ['США', 'Австралия', 'Япония'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Шоу Грязного Фрэнка',
    nameOriginal: 'The Filthy Frank Show',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1043658.jpg?alt=media&token=915dc9d9-c0df-4a6a-87be-6b3c68b7345c',
    genres: ['комедия', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1043658.jpg?alt=media&token=e9a35fe5-4b91-4db1-b074-d53b4ffdeea0',
    slogan: null,
  },
  {
    kpId: '1043713',
    year: 2017,
    description:
      'Рассказ о предполагаемом недвижимом имуществе председателя Правительства Российской Федерации Дмитрия Медведева.',
    filmLength: 49,
    countries: ['Россия'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Он вам не Димон',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1043713.jpg?alt=media&token=da1dd99b-3b74-49b5-9ded-2bce3e689d6e',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1043713.jpg?alt=media&token=ff88236d-368c-4d5d-ba7d-3ccbf2e84344',
    slogan: null,
  },
  {
    kpId: '1048695',
    year: 2017,
    description:
      'Когда прекрасный мир Радужного Королевства настигают проблемы, остается одна надежда на Тру! С её несмышлёным лучшим другом Котом Бартлби. Только Тру может высвободить силу Магических Желаний из Дерева Желаний для восстановления мира и любви в Королевстве.',
    filmLength: 22,
    countries: ['США', 'Канада'],
    shortDescription:
      'Девочка Тру лучше всех умеет решать проблемы в волшебной стране. Яркий мультсериал о силе доброты и смекалки',
    type: 'TV_SERIES',
    nameRu: 'Тру и Радужное королевство',
    nameOriginal: 'True and the Rainbow Kingdom',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1048695.jpg?alt=media&token=ce098b7f-d6cc-4a0c-a7f2-68896efd28b7',
    genres: ['приключения', 'фэнтези', 'комедия', 'мультфильм', 'мюзикл', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1048695.jpg?alt=media&token=9a101d1f-a843-4736-a62d-3983c67322ab',
    slogan: null,
  },
  {
    kpId: '1072974',
    year: 2017,
    description:
      'История о четырех геймерах, которые нашли необычный ноутбук, оказавшийся порталом в мир игры «Герои Энвелла». Здесь все реально: и сам город, и его жители, и опасности, поджидающие на каждом шагу. В первом сезоне герои проходят игру и в финале сражаются с ее главным злодеем — Моргартом, который хочет вырваться в реальный мир. В продолжении сериала повзрослевшие ребята пытаются справиться с личными проблемами, но неожиданно из игры приходит сигнал о помощи. Арт, Кира, Вик и Фил возвращаются в мир Энвелла и встречают старых знакомых.',
    filmLength: 11,
    countries: ['Россия'],
    shortDescription:
      'Школьники-геймеры вступают в схватку с виртуальным злом. Хитовый мультсериал от российской студии «Паровоз»',
    type: 'TV_SERIES',
    nameRu: 'Герои Энвелла',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1072974.jpg?alt=media&token=83740020-e07b-49b0-b302-a7c71ebe2d9c',
    genres: ['фантастика', 'мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1072974.jpg?alt=media&token=b6998fa2-4296-44eb-b847-32420fb618b6',
    slogan: 'Добро пожаловать в виртуальный мир',
  },
  {
    kpId: '1073233',
    year: 2017,
    description:
      'Несмотря на то, что вода занимает две трети планеты, о глубинах океана мы знаем меньше, чем о поверхности Луны. Сериал открывает всю красоту и очарование океана, поражая воображение многообразием его обитателей. Использование новейших технологий и уникального оборудования для глубоководных съёмок раскроют зрителю самые сокровенные тайны мирового океана и позволят увидеть редчайшие кадры из жизни его обитателей, о существовании которых ранее можно было только догадываться.',
    filmLength: null,
    countries: ['США', 'Франция', 'Великобритания', 'Германия', 'Китай'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Голубая планета 2',
    nameOriginal: 'Blue Planet II',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1073233.jpg?alt=media&token=4ff6f6d2-c2f4-4de4-abe5-a62bfadffe86',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1073233.jpg?alt=media&token=a8e078b7-8e38-459a-8a49-8161bd1282dc',
    slogan: 'Take a deep breath',
  },
  {
    kpId: '1101247',
    year: 2017,
    description: null,
    filmLength: 60,
    countries: ['Канада'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Самадхи, часть 1: Майя, иллюзия обособленного себя',
    nameOriginal: 'Samadhi',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1101247.jpg?alt=media&token=0f266ae7-7706-4200-82fe-5de1080b4dc4',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1101247.jpg?alt=media&token=1048c2bd-a043-4620-8432-27e544361873',
    slogan: null,
  },
  {
    kpId: '1101316',
    year: 2017,
    description:
      'Юные волшебницы, обнаружив в Вандервуде потерявшуюся девочку-павлина и ее питомца, помогают им найти новый дом.',
    filmLength: 60,
    countries: ['США'],
    shortDescription:
      'Энчантималс помогают незнакомке и ее другу павлину найти новый дом. Захватывающие приключения в Вандервуде',
    type: 'FILM',
    nameRu: 'Энчантималс. Дом, милый дом',
    nameOriginal: 'Enchantimals Finding Home',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1101316.jpg?alt=media&token=ecce9bff-775e-4775-9038-f14988dfa739',
    genres: ['приключения', 'фэнтези', 'мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1101316.jpg?alt=media&token=e782e799-cbe1-4d63-ac43-1165581d2aab',
    slogan: null,
  },
  {
    kpId: '1105410',
    year: 2017,
    description:
      'Известный кинокомпозитор Ханс Циммер и его первоклассные музыканты исполнили перед многотысячной публикой знаменитую музыку из голливудских блокбастеров. Это уникальный шанс увидеть художника во всем великолепии его музыкального дара и насладиться прекрасными мелодиями в кругу семьи и друзей.',
    filmLength: 150,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: 'Ханс Циммер: Live on Tour',
    nameOriginal: 'Hans Zimmer: Live in Prague',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1105410.jpg?alt=media&token=2b781e9e-cd51-4cfc-ae3f-22d0db54e2c0',
    genres: ['музыка', 'документальный', 'концерт'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1105410.jpg?alt=media&token=09557191-768c-4f24-99fe-6a89f088e242',
    slogan: null,
  },
  {
    kpId: '1111028',
    year: 2016,
    description:
      'Приквел популярного сериала, повествующий  о создании суперкоманды Минифорс. Члены команды – очаровательные зверушки-пушистики, но за их милой внешностью скрываются настоящие отважные воины. Доктор Джереми из лаборатории Минифорс исследует «эллиниум» – неизвестное вещество, содержащее могучую силу. Зевс, капитан Армии Ящериц, рассматривает эллиниум с целью создания смертоносного оружия против человечества. Однажды он  атакует лабораторию и похищает эллиниум. Лаборатория Минифорс созывает суперкоманду – это наши знакомые Вольт, Сэмми, Макс и Люси. К ним присоединяется Анна, дочь доктора Джереми. Минифорс отправляются на борьбу с Армией Ящериц с целью вернуть эллиниум. Им предстоит множество испытаний, чтобы исполнить миссию.',
    filmLength: 68,
    countries: ['Корея Южная'],
    shortDescription:
      'Миниатюрные звери превращаются в воинов и борются со злом. Полный метр о том, как сложилась команда Минифорс',
    type: 'FILM',
    nameRu: 'Минифорс. Новые герои',
    nameOriginal: 'Miniforce: New Heroes Rise',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1111028.jpg?alt=media&token=c9d9611a-5f60-45d1-ac3b-5aef40df505b',
    genres: ['фантастика', 'приключения', 'мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1111028.jpg?alt=media&token=b9e2e4b5-230c-49fe-8b43-43bd24440d8b',
    slogan: null,
  },
  {
    kpId: '1167449',
    year: 2013,
    description:
      'Кракозябры — это противные, скользкие, мелкие букашки-вредители. Ну, или мы так о них думаем. А им есть что сказать в свою защиту! В каждой серии новое насекомое расскажет о себе интересные и забавные факты. Насекомые поделятся тем, как и где они живут, какие функции они выполняют, как им удаётся выживать в этом сложном мире, и как мы, люди, всё изначально неправильно о них поняли!',
    filmLength: 12,
    countries: ['Ирландия'],
    shortDescription:
      'Что ест долгоносик и зачем моли шуба? Ирландский мультсериал о том, как увлекательна жизнь букашек',
    type: 'TV_SERIES',
    nameRu: 'Я — жуткая кракозябра!',
    nameOriginal: "I'm a Creepy Crawly",
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1167449.jpg?alt=media&token=4c3809ee-2af8-4633-a27a-26b5ae7d3677',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1167449.jpg?alt=media&token=6946e752-ea4b-483f-ab84-f3fff97c41f7',
    slogan: null,
  },
  {
    kpId: '1187970',
    year: 2018,
    description:
      'Главный герой Кот Кубокот станет проводником в мир математики, русского языка, природоведения, истории, обществознания, иностранных языков и других предметов.',
    filmLength: 3,
    countries: ['Россия'],
    shortDescription:
      'Как понять таблицу умножения и запомнить словарные слова? Рыжий кот на лапах объясняет школьную программу',
    type: 'TV_SERIES',
    nameRu: 'Развлечеба',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1187970.jpg?alt=media&token=083d1609-1c1c-4ef4-94c0-34ff4768a444',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1187970.jpg?alt=media&token=29cc6479-1340-420b-8c38-7008a510e2c3',
    slogan: null,
  },

  {
    kpId: '1227897',
    year: 2006,
    description: 'Специальные выпуски телепередачи Топ Гир.',
    filmLength: 55,
    countries: ['Великобритания'],
    shortDescription:
      'Одна из самых известных передач об автомобилях — с юмором и со знанием дела. Гонки, тесты, приглашенные звезды',
    type: 'TV_SHOW',
    nameRu: 'Топ Гир: Лучшее',
    nameOriginal: 'Top Gear: Best of',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1227897.jpg?alt=media&token=25b1572e-e245-4c5b-b1a0-68a9b98c808a',
    genres: ['комедия', 'документальный', 'реальное ТВ', 'ток-шоу'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1227897.jpg?alt=media&token=3834b8db-d7f2-451e-9a93-2e823a5f82d4',
    slogan: null,
  },
  {
    kpId: '1235081',
    year: 2019,
    description: null,
    filmLength: 50,
    countries: ['США', 'Великобритания'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Наша планета',
    nameOriginal: 'Our Planet',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1235081.jpg?alt=media&token=f0ac85b1-d6ba-4c5c-b3ae-4f7147cc5305',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1235081.jpg?alt=media&token=d598c36b-4e7f-48e1-bb6d-0a4b2415fd50',
    slogan: null,
  },
  {
    kpId: '1252447',
    year: 1999,
    description: null,
    filmLength: 105,
    countries: ['США'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: 'Лорды раздевалки',
    nameOriginal: 'Lords of the Lockerroom',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1252447.jpg?alt=media&token=9b11da32-4fbe-41ee-91cd-c5679c0342a3',
    genres: ['спорт', 'для взрослых'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1252447.jpg?alt=media&token=36866d31-8b0c-451c-92e1-d1807861ef6b',
    slogan: null,
  },
  {
    kpId: '1272394',
    year: 2019,
    description:
      'Фильм из пяти эпизодов подробно рассматривает каждую планету, изучая научные теории и гипотезы о формировании и эволюции нашей солнечной системы, полученные беспилотными миссиями на планеты.',
    filmLength: null,
    countries: ['Великобритания'],
    shortDescription:
      'Гипотезы формирования Солнечной системы. Документальное исследование на основе результатов беспилотных миссий',
    type: 'MINI_SERIES',
    nameRu: 'Планеты',
    nameOriginal: 'The Planets',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1272394.jpg?alt=media&token=a84746da-207c-4327-9205-2876ec648f81',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1272394.jpg?alt=media&token=f96325b3-82ec-4e52-bb05-327d8a260c12',
    slogan: 'One family, worlds apart.',
  },
  {
    kpId: '1282979',
    year: 2019,
    description:
      'Ниндзя сражаются со злодеями в Ниндзяго-Сити и за его пределами, отправляются на новые задания и обретают союзников, а их дружба проходит проверку на прочность.',
    filmLength: 11,
    countries: ['США', 'Канада', 'Дания'],
    shortDescription:
      'Заскучавшие ниндзя случайно выпускают из заточения опасную злодейку. Продолжение сериала про мастеров Кружитцу',
    type: 'TV_SERIES',
    nameRu: 'LEGO Ниндзяго',
    nameOriginal: 'Ninjago',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1282979.jpg?alt=media&token=73405de1-b744-44ae-b311-27aa5beb1b6b',
    genres: ['приключения', 'боевик', 'мультфильм', 'семейный', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1282979.jpg?alt=media&token=55cb779b-50d7-46ec-8a6e-2cf0b52d22ad',
    slogan: "It's all fun and games until you reach Level 13.",
  },
  {
    kpId: '1286572',
    year: 2014,
    description:
      'Подросток Робин из Локсли и его верные друзья находятся вне закона и противостоят власти и тирании молодого принца Джона. Они всегда готовы помочь нуждающемуся и каждый день находят себе новые приключения.',
    filmLength: 11,
    countries: ['Франция', 'Индия', 'Германия'],
    shortDescription:
      'Парнишка-лучник и его друзья мешают козням жадного принца. Детская комедия про легендарного защитника бедных',
    type: 'TV_SERIES',
    nameRu: 'Робин Гуд: Проказник из Шервуда',
    nameOriginal: 'Robin Hood: Mischief in Sherwood',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1286572.jpg?alt=media&token=fdcc308f-0709-4585-bcd0-fb732aba2b2a',
    genres: ['приключения', 'мультфильм', 'семейный', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1286572.jpg?alt=media&token=1417623c-ca51-4123-87ea-3c1090840657',
    slogan: null,
  },
  {
    kpId: '1309325',
    year: 2019,
    description:
      'Астрофизик Нил Деграсс Тайсон встает за штурвал своего «Корабля воображения» и отправляется в путешествие по космосу, продолжив то, на чём остановился Карл Саган несколько десятилетий назад.',
    filmLength: null,
    countries: ['США'],
    shortDescription:
      'Нил Деграсс Тайсон отправляется в мысленное путешествие к звездам. Продолжение культового шоу Карла Сагана',
    type: 'TV_SERIES',
    nameRu: 'Космос',
    nameOriginal: '',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1309325.jpg?alt=media&token=2b79b3e2-63ab-4bef-aa98-7b328400bb60',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1309325.jpg?alt=media&token=936bde30-a452-4b6a-9392-935136098fb5',
    slogan: null,
  },
  {
    kpId: '1313572',
    year: 2019,
    description:
      'Киноверсия легендарного московского мюзикла «Монте-Кристо». Это знаменитый российский мюзикл-хит, рекордсмен по продолжительности театрального проката, в котором зрителя ждут звёздный состав актеров, потрясающие голоса, красочные костюмы и грандиозные декорации.',
    filmLength: 132,
    countries: ['Россия'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Монте-Кристо. Мюзикл',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1313572.jpg?alt=media&token=7d01ec8a-aa0a-4aa9-a96b-53fdf62c7f0c',
    genres: ['мелодрама', 'мюзикл'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1313572.jpg?alt=media&token=a83d1a2a-6b17-4292-93be-d3b9760ff54b',
    slogan: 'Легендарная история!',
  },
  {
    kpId: '1338006',
    year: 2018,
    description:
      'Тан Сань, один из самых способных учеников клана боевых искусств, крадет запретные знания своих мастеров. Это преступление карается смертью, поэтому Тан прыгает со скалы, погибает, а затем возрождается на Боевом континенте — месте, где у каждого есть свой дух, и где выживают только сильнейшие. Однако здесь Тан — сын кузнеца, а его дух — самый слабый в этом мире.',
    filmLength: 20,
    countries: ['Китай'],
    shortDescription:
      'После смерти сильнейший воин попадает в мир, где ему не даются боевые навыки. Китайское фэнтези о силе духа',
    type: 'TV_SERIES',
    nameRu: 'Боевой континент',
    nameOriginal: 'Dou luo da lu',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1338006.jpg?alt=media&token=b0e434ea-502e-42bb-a81b-92a22e3d013e',
    genres: ['боевик', 'фэнтези', 'мультфильм'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1338006.jpg?alt=media&token=ef4cee6e-7d7b-44e4-8d4c-8d29583ccaab',
    slogan: null,
  },
  {
    kpId: '1338495',
    year: 2018,
    description:
      'Озорная, любопытная и полная идей Блуи — щенок австралийской пастушьей собаки. Она живёт вместе с родителями и младшей сестрой Бинго в большом уютном доме. Каждый день Блуи придумывает весёлые игры.',
    filmLength: 7,
    countries: ['Великобритания', 'Австралия'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Блуи',
    nameOriginal: 'Bluey',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1338495.jpg?alt=media&token=7ba2e12f-518d-4ce6-935a-b6bb3758cbbc',
    genres: ['мультфильм', 'семейный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1338495.jpg?alt=media&token=c94f4f82-e2e3-4508-945a-ba6b2f9789cb',
    slogan: 'For real life?!',
  },
  {
    kpId: '1339977',
    year: 2011,
    description: null,
    filmLength: 25,
    countries: ['США', 'Великобритания'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Уровень тревоги: Полночь',
    nameOriginal: 'Threat Level MkpIdnight: The Movie',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1339977.jpg?alt=media&token=99718d56-ac32-4fc7-b2ac-105bd19691d2',
    genres: ['боевик', 'комедия', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1339977.jpg?alt=media&token=619b7f4b-766d-4140-aa2e-e40d72e5eadc',
    slogan: 'Clean up on aisle 5.',
  },

  {
    kpId: '1368895',
    year: 2018,
    description:
      'После «Восстания Аргосы» в 482.M39, ордену Карателей Адептус Астартес поручено найти бежавших еретиков и свершить правосудие за преступления против Императора.',
    filmLength: null,
    countries: [],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: null,
    nameOriginal: 'Astartes',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1368895.jpg?alt=media&token=5a5065c6-e963-439e-8eac-499ad12d2d2c',
    genres: ['фантастика', 'военный', 'мультфильм'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1368895.jpg?alt=media&token=45cc77c3-bede-4645-96c5-ddbdfcbac6a8',
    slogan: null,
  },
  {
    kpId: '1379016',
    year: 2020,
    description:
      'Истории о дружбе и приключениях обаятельных круглых героев. Весёлые и музыкальные, неожиданные и мечтательные, домашние и авантюрные. Целый мир в одной уютной Ромашковой долине.',
    filmLength: 6,
    countries: ['Россия'],
    shortDescription:
      'Копатыч мечтает о Вальхалле, а Совунья — о внуке. Продолжение любимого мультсериала с новой порцией мудрости',
    type: 'TV_SERIES',
    nameRu: 'Смешарики. Новый сезон',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F1379016.jpg?alt=media&token=c1f58a72-aa26-472f-a325-02df57e86a7c',
    genres: ['мультфильм', 'семейный', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F1379016.jpg?alt=media&token=50fccd0d-ebd6-430f-a34b-fab495acacab',
    slogan: 'Снова в кругу семьи',
  },

  {
    kpId: '2000090',
    year: 2020,
    description: null,
    filmLength: 105,
    countries: ['США'],
    shortDescription: null,
    type: 'FILM',
    nameRu: null,
    nameOriginal: 'Folklore: The Long Pond Studio Sessions',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F2000090.jpg?alt=media&token=5fd49a29-9b80-44bd-8a7c-c072df9a3469',
    genres: ['драма', 'музыка', 'документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F2000090.jpg?alt=media&token=d7c54a1e-91de-4a4a-b236-1ad606db02c8',
    slogan: null,
  },
  {
    kpId: '2039957',
    year: 2019,
    description:
      'В центре мультсериала – обыкновенная семья с двумя детьми и милой собачкой по кличке Соня. Как и все дети, брат и сестра Гоша и Мира познают мир, играют, иногда ссорятся и попадают в затруднительные ситуации: дома, в школе или во дворе. Что делать, если тебя без причины обижают сверстники? А что, если они обижают кого-то другого? Как помириться после ссоры? И как перестать бояться старости? Зачем сознаваться в своей вине, и почему обман хуже ошибки? На эти и другие важные вопросы Гоше и Мире помогают ответить мама и папа. Маленькие герои убеждаются, что с поддержкой близких всегда можно найти выход; что добрые дела – самые простые, а честный и откровенный разговор творит чудеса!',
    filmLength: 6,
    countries: ['Россия'],
    shortDescription:
      'Брат и сестренка знакомятся с непростыми эмоциями. Сериал в помощь семье: как открыто говорить на сложные темы',
    type: 'TV_SERIES',
    nameRu: 'Просто о важном. Про Миру и Гошу',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F2039957.jpg?alt=media&token=b5d28da6-ac05-4361-a676-8f07f5daca04',
    genres: ['мультфильм', 'семейный', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F2039957.jpg?alt=media&token=4cdac5ea-8fa4-4a52-96a0-a85aa0216e36',
    slogan: null,
  },
  {
    kpId: '2500772',
    year: 2020,
    description:
      'В марте 2018 года один из лучших хирургов-онкологов страны Андрей Павленко узнал, что у него рак желудка агрессивной формы. Как онколог, Андрей понимал, что скорее всего умрет, но решил лечиться и запустить в России публичный медиапроект «Жизнь человека» о том, как принять диагноз и бороться с онкологическими заболеваниями, что нужно делать и где искать помощь.\n\nВ ноябре 2019 года Андрей дал последнее интервью команде проекта «Жизнь человека». Этот фильм — своеобразное завещание Андрея. Послание всем, кто следил за его судьбой, онкологическим пациентам, их родственникам, и врачам.',
    filmLength: 88,
    countries: ['Россия'],
    shortDescription:
      'Как принять диагноз и продолжить борьбу с раком. Документальное «завещание» хирурга-онколога Андрея Павленко',
    type: 'FILM',
    nameRu: 'Жизнь человека. Последнее интервью',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F2500772.jpg?alt=media&token=3d2c6d2d-a39c-4214-8552-80806a7f8790',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F2500772.jpg?alt=media&token=c75b1ca5-9979-4e26-accb-3c294212eaab',
    slogan: null,
  },
  {
    kpId: '328627',
    year: 1990,
    description: 'Четвёртый видеорелиз британской группы Depeche Mode.',
    filmLength: 32,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: null,
    nameOriginal: 'Depeche Mode: Strange Too',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F328627.jpg?alt=media&token=aef4515b-9793-4a5e-9b13-7245faaae724',
    genres: ['музыка', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F328627.jpg?alt=media&token=ebd49d4f-a615-492b-bd4a-006eda25cced',
    slogan: 'Another violation by Anton Corbjin',
  },
  {
    kpId: '351771',
    year: 1993,
    description: 'Выступление Depeche Mode 1993-го года.',
    filmLength: 93,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: null,
    nameOriginal: 'Depeche Mode: Devotional',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F351771.jpg?alt=media&token=d9b1a380-100b-4f22-9509-c23cfe8228c9',
    genres: ['музыка', 'документальный', 'концерт'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F351771.jpg?alt=media&token=69c78309-0b4e-4c60-8143-0218e402da08',
    slogan: 'A Performance Filmed By Anton Corbijn',
  },
  {
    kpId: '367456',
    year: 1998,
    description:
      'Юная девушка-цыганка по имени Эсмеральда своей красотой привлекает к себе внимание мужчин. Среди них - архидьякон Собора Парижской Богоматери Фролло, молодой красавец - капитан королевских стрелков Феб и уродливый звонарь Квазимодо, воспитанник Фролло. Эсмеральда без памяти влюбляется в самого красивого из них - Феба. Он не против воспользоваться этим, несмотря на то, что у него есть невеста - Флер-де-Лис...',
    filmLength: 150,
    countries: ['Франция'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Собор Парижской Богоматери',
    nameOriginal: 'Notre-Dame de Paris',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F367456.jpg?alt=media&token=faa91305-605c-45d1-bf69-36befa043f9d',
    genres: ['драма', 'мелодрама', 'музыка', 'мюзикл'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F367456.jpg?alt=media&token=5bfbe4b1-2f49-4e70-98b8-a50deaa337a9',
    slogan: null,
  },
  {
    kpId: '370093',
    year: 1997,
    description: null,
    filmLength: 120,
    countries: ['Франция'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: null,
    nameOriginal: 'Mylène Farmer: Live à Bercy',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F370093.jpg?alt=media&token=ed7f026d-acdf-4270-99b3-b6e79e85503f',
    genres: ['музыка', 'концерт'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F370093.jpg?alt=media&token=4b2aa9b2-887c-4f2e-8202-19bfc4cc0d4d',
    slogan: null,
  },
  {
    kpId: '383870',
    year: 1995,
    description: 'Рассказ о жизни и творчестве великой ливерпульской четверки — The Beatles.',
    filmLength: 75,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Антология The Beatles',
    nameOriginal: 'The Beatles Anthology',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F383870.jpg?alt=media&token=3055db21-5a2d-437f-b3f4-c4a76035568e',
    genres: ['музыка', 'документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F383870.jpg?alt=media&token=9cd60195-c880-4fb9-992c-9ac8570c00b6',
    slogan: null,
  },
  {
    kpId: '438301',
    year: 2000,
    description: null,
    filmLength: 160,
    countries: ['Франция'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: null,
    nameOriginal: 'Mylène Farmer: Mylenium Tour',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F438301.jpg?alt=media&token=36a4d474-12b1-4990-91ee-e6891c1c3e09',
    genres: ['музыка', 'документальный', 'концерт'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F438301.jpg?alt=media&token=fbfb8c4d-5443-4006-94c4-d1242bbd82eb',
    slogan: null,
  },
  {
    kpId: '4459937',
    year: 2021,
    description:
      'Сколько в мире денег? Почему сегвей не падает? Что будет, если бросить атомную бомбу в жерло вулкана? Что такое «облако» или где хранится ваша информация? И когда же изобретут лекарство от рака? Уместить в голове все знания о нашей необъятной планете невозможно, хотя… Новый цикл легендарного киножурнала «Хочу все знать!» — это сериал-энциклопедия, в котором интереснейшие факты — от устройства Сахары до особенностей криозаморозки человека — объясняются просто и увлекательно.',
    filmLength: 12,
    countries: ['Россия'],
    shortDescription:
      'Как пахнет нефть, можно ли пройти все видеоигры, почему «жи-ши» пишут с буквой И? Видеожурнал для любопытных',
    type: 'TV_SHOW',
    nameRu: 'Хочу все знать!',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4459937.jpg?alt=media&token=833154bd-211c-4fcb-9578-17c31c11ab95',
    genres: ['семейный', 'документальный', 'реальное ТВ', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4459937.jpg?alt=media&token=9a0e747b-1e59-4ba8-8926-81bd835a3619',
    slogan: null,
  },
  {
    kpId: '4475473',
    year: 2021,
    description:
      'Джереми Кларксон пробует себя в роли фермера — ему предстоит столкнуться со всеми трудностями сельского хозяйства.',
    filmLength: 45,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Ферма Кларксона',
    nameOriginal: "Clarkson's Farm",
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4475473.jpg?alt=media&token=a800c9b1-5449-4eac-98d3-e159c89581bc',
    genres: ['комедия', 'документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4475473.jpg?alt=media&token=4797050d-0e95-41e7-bfae-ca09ace48dee',
    slogan: null,
  },
  {
    kpId: '451356',
    year: 1993,
    description:
      'Это видео с концертным материалом состоящий из трёх частей. Первая - выступление Metallica в Сиэтле 29 и 30 августа 1989 года в рамках тура «Damaged justice». Вторая - концертный материал записанный во время выступления в Сан-Диего 13 и 14 января 1992 года. Концертные записи начинаются с документального фильма «Metallimovie», снятого Адамом Дубиным . Третья часть - продолжение концерта в Сан-Диего 13 и 14 января 1992 года.',
    filmLength: 340,
    countries: ['США'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: null,
    nameOriginal: 'Metallica: Live Shit - Binge & Purge, San Diego',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F451356.jpg?alt=media&token=b2ed2cbc-fc2e-4bbe-8112-2e3f23835804',
    genres: ['музыка', 'документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F451356.jpg?alt=media&token=3c8e9130-943f-432a-a5bd-8d0ce71ed236',
    slogan: null,
  },
  {
    kpId: '45319',
    year: 1982,
    description:
      'Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...',
    filmLength: 10,
    countries: ['СССР'],
    shortDescription:
      'Волк помогает старому псу вернуться к людям. Душевный мультфильм, подаривший народу крылатую фразу «Щас спою»',
    type: 'FILM',
    nameRu: 'Жил-был пёс',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F45319.jpg?alt=media&token=4a8f4474-ed7b-4c27-a971-b33e4a7f82ef',
    genres: ['комедия', 'мультфильм', 'семейный', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F45319.jpg?alt=media&token=f6aaa1b4-4cb7-499e-97bd-c923c74c8911',
    slogan: null,
  },
  {
    kpId: '464963',
    year: 2011,
    description:
      'К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.',
    filmLength: 55,
    countries: ['США', 'Великобритания'],
    shortDescription:
      'Рыцари, мертвецы и драконы — в эпической битве за судьбы мира. Сериал, который навсегда изменил телевидение',
    type: 'TV_SERIES',
    nameRu: 'Игра престолов',
    nameOriginal: 'Game of Thrones',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F464963.jpg?alt=media&token=2458551c-9c51-40af-b9f9-c313cbdcf0dc',
    genres: ['драма', 'мелодрама', 'приключения', 'боевик', 'фэнтези'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F464963.jpg?alt=media&token=c731f08f-a139-4463-8efa-a1777680e592',
    slogan: 'Победа или смерть',
  },
  {
    kpId: '468815',
    year: 2008,
    description:
      'Фильм «Подстрочник» - киномонолог Лилианны Лунгиной о жизни души и мира вокруг. С беспощадной зоркостью рассматривая собственное развитие с малых лет до последних дней, она делает внутренние события не менее увлекательными, чем внешние. Ее рассказ - это уникальное сочетание исповеди и масштабности, крупного и общего плана: это и портрет и фреска, потому что героиня ни на минуту не упускает из виду жизнь общую, общественную, пытаясь представить зрителям судьбу России и отчасти Европы в ХХ веке.',
    filmLength: 26,
    countries: ['Россия'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Подстрочник',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F468815.jpg?alt=media&token=5b1641c0-b2b8-4880-ba0f-8baa75c782a6',
    genres: ['биография', 'документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F468815.jpg?alt=media&token=0942862e-3445-43a0-98df-fcf6a1254651',
    slogan: null,
  },
  {
    kpId: '4835490',
    year: 2022,
    description: null,
    filmLength: 59,
    countries: ['США', 'Франция', 'Великобритания', 'Германия', 'Китай'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Зелёная планета',
    nameOriginal: 'The Green Planet',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4835490.jpg?alt=media&token=5b2800da-be5e-4d73-ae85-365d9871b2f6',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4835490.jpg?alt=media&token=cc3fbb82-21cc-4c7b-96d7-3920c2504027',
    slogan: null,
  },
  {
    kpId: '4866668',
    year: 2022,
    description: 'Уникальное шоу, во время которого BTS и АРМИ станцуют вместе.',
    filmLength: 195,
    countries: ['Корея Южная'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: 'BTS Permission To Dance: On Stage — Seoul',
    nameOriginal: '',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4866668.jpg?alt=media&token=d0618863-888b-4000-9d3f-15a3892ebce1',
    genres: ['музыка', 'концерт'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4866668.jpg?alt=media&token=4c72784b-3244-4771-8efb-9796e6d81d4e',
    slogan: null,
  },
  {
    kpId: '4886080',
    year: 2021,
    description:
      'Джейми возвращается к своим зрителям в новом цикле кулинарных передач, построенном на трёх основных «ингредиентах»: семье, друзьях и еде. В каждом выпуске легендарный шеф на своей кухне будет делиться рецептами блюд, которые в тарелке создают волшебство, готовятся за минуты, удивляют до глубины души и влюбляют навсегда. Зрители узнают о новых идеях для превосходного барбекю, идеального пикника, зажигательного вечера в ритме танго и тако, затейливого расслабленного бранча с «изюминкой» и роскошного вечера, наполненного ароматом карри — у Джейми в запасе богатый арсенал советов и кулинарных лайфхаков на любой случай.',
    filmLength: 47,
    countries: ['Великобритания'],
    shortDescription:
      'Знаменитый шеф рассказывает, как легко приготовить блюда на все случаи жизни. Высокая кухня без лишних изысков',
    type: 'TV_SHOW',
    nameRu: 'Джейми Оливер: Готовим вместе',
    nameOriginal: 'Jamie Oliver: Together',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4886080.jpg?alt=media&token=31f0b65d-9e24-48ac-a00a-dc162a41197c',
    genres: ['реальное ТВ'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4886080.jpg?alt=media&token=ab440ad6-a22c-4e4d-a2e8-f8aea300335b',
    slogan: null,
  },
  {
    kpId: '4976275',
    year: 2021,
    description:
      'Библиотека мульткниг для детей от 2 до 7 лет. Мульткниги — полезные и красивые мультфильмы по книгам детских писателей с иллюстрациями профессиональных художников.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription:
      'Малыши мечтают о космосе и дружат с темнотой. Нежные истории, которые успокаивают детей и приучают к чтению',
    type: 'TV_SERIES',
    nameRu: 'Лалабук',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F4976275.jpg?alt=media&token=83df2c1f-5daa-4b82-95ed-ffe359865dc4',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F4976275.jpg?alt=media&token=3159ecfa-5efb-40e9-8e98-55e97784f5e6',
    slogan: null,
  },
  {
    kpId: '502838',
    year: 2010,
    description:
      'События разворачиваются в наши дни. Он прошел Афганистан, остался инвалидом. По возвращении в родные края встречается с загадочным, но своеобразным гениальным человеком. Тот в поиске соседа по квартире. Лондон, 2010 год. Происходят необъяснимые убийства. Скотланд-Ярд без понятия, за что хвататься. Существует лишь один человек, который в силах разрешить проблемы и найти ответы на сложные вопросы.',
    filmLength: 90,
    countries: ['США', 'Великобритания'],
    shortDescription:
      'Гений-социопат знакомит соседа с миром частного сыска. Бенедикт Камбербэтч в одном из лучших шоу XXI века',
    type: 'TV_SERIES',
    nameRu: 'Шерлок',
    nameOriginal: 'Sherlock',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F502838.jpg?alt=media&token=03db9372-2bee-4c73-9e29-deff35003ee5',
    genres: ['триллер', 'драма', 'криминал', 'детектив'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F502838.jpg?alt=media&token=0f96b021-6ffd-4578-987d-bd49967d11f4',
    slogan: 'Лучший сыщик 21-го века',
  },
  {
    kpId: '5146135',
    year: 2021,
    description:
      'Зук — восьмилетняя зеленоволосая ведьма, дочь двух колдунов, которая летает на метле среди городских многоэтажек. Она посещает Школу магии и мечтает помогать другим своим колдовством. Но каждый раз случаются ситуации, противоречащие добрым намерениям ведьмочки. В конце концов ей всегда удаётся исправить ошибки благодаря правильному заклинанию и помощи друзей.\n\n',
    filmLength: 11,
    countries: ['Франция'],
    shortDescription:
      'Ведьмочка живет в старинном особняке среди небоскребов и ходит в обычную школу. Мультсериал о буднях колдунов',
    type: 'TV_SERIES',
    nameRu: 'Зук',
    nameOriginal: 'Zouk',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5146135.jpg?alt=media&token=61e4f3dd-336a-45f8-9588-86f31603572b',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5146135.jpg?alt=media&token=932ffc09-d91b-4bca-958b-ede8287b7194',
    slogan: null,
  },
  {
    kpId: '5217709',
    year: 2021,
    description:
      'Любопытная 8-летняя девочка всегда мечтала отправиться в приключения и исследовать удивительные места. Однажды она находит в прачечной своей матери странный носок, который умеет говорить. Раньше он был мастером кунг-фу из другого мира, которому было поручено охранять древний свиток. Когда мастер прошел через вихрь в это время, его силы ослабли, и он превратился в носок. Когда девочка надевает носок на ногу, она превращается в супергероиню — сногсшибательную девушку Кунг-Фу. И теперь, чтобы победить зло и защитить свой мир, вместе они должны выполнить миссию Кунг-Фу Ва и следовать древнему свитку.',
    filmLength: 11,
    countries: ['Китай'],
    shortDescription:
      'Школьница превращается в супергероиню с помощью Кунг-Фу-Носка. Мультсериал о защитниках мира от древнего зла',
    type: 'TV_SERIES',
    nameRu: 'Волшебная девочка Кунг-Фу',
    nameOriginal: 'Kung Fu Wa!',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5217709.jpg?alt=media&token=6f02a7da-771c-43a0-b149-8bc88185283a',
    genres: ['приключения', 'боевик', 'фэнтези', 'мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5217709.jpg?alt=media&token=17e631b1-3345-495a-b738-65cabf77f73c',
    slogan: null,
  },
  {
    kpId: '5231945',
    year: 2022,
    description:
      'У самого обычного молодого программиста живет совершенно необычный кот по имени Басик. Он наделен сверхъестественным интеллектом. Впрочем, это никого не удивляет. В современном мире не принято удивляться. И очень зря! Ведь Басик действительно удивительный кот. Он умный, сдержанный, заботливый и к тому же настоящий джентльмен. Его забавные приключения и хитроумные проделки удивят и позабавят не только хозяина, но и зрителей!',
    filmLength: null,
    countries: ['Россия'],
    shortDescription:
      'Удивительно умный кот охотно участвует в затеях своего хозяина. Мультсериал от авторов «Сказочного патруля»',
    type: 'TV_SERIES',
    nameRu: 'Кот Басик',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5231945.jpg?alt=media&token=68c256b7-28cc-46d0-b532-6ff9ef9f464c',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5231945.jpg?alt=media&token=4f5ecb95-0edd-4aa7-943f-f6554ef10741',
    slogan: null,
  },
  {
    kpId: '5233488',
    year: 2022,
    description:
      'Храбрая девочка Аминка участвует в детском турнире за титул «Королева двора». Она бросает вызов местному лидеру, чтобы побороться за мир и дружбу на весёлых и захватывающих состязаниях. Яркий комедийный сериал для детей с юной звездой-блогером Аминкой Витаминкой в главной роли.',
    filmLength: 13,
    countries: ['Казахстан'],
    shortDescription:
      'Новенькая на детской площадке противостоит лидеру, который держит всех в страхе. Комедия с Аминкой Витаминкой',
    type: 'TV_SERIES',
    nameRu: 'Королева двора',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5233488.jpg?alt=media&token=22a94060-f477-4f33-8997-750563f24a28',
    genres: ['приключения', 'комедия', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5233488.jpg?alt=media&token=17b82305-e42e-4266-bf83-8b954d8cadf9',
    slogan: null,
  },
  {
    kpId: '5237286',
    year: 2022,
    description:
      'Однажды появились демоны и боги-демоны, из-за которых всё человечество оказалось на грани гибели. В один момент 6 храмов объединились ради спасения мира людей, и началась великая война. Маленький мальчик решил присоединиться к храму в качестве рыцаря, чтобы спасти свою мать. Тренируясь, он пытается возвыситься, стать самым могучим рыцарем и унаследовать трон в этом жестоком мире на грани гибели.',
    filmLength: 20,
    countries: ['Китай'],
    shortDescription:
      'Мальчик выбирает путь рыцаря, чтобы спасти людей от демонов. Трогательное фэнтези с захватывающими боями',
    type: 'TV_SERIES',
    nameRu: 'Трон, отмеченный богом',
    nameOriginal: 'Shen yin wang zuo',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5237286.jpg?alt=media&token=4573a8a0-7817-4016-90f7-0eadf84b13ab',
    genres: ['боевик', 'фэнтези', 'мультфильм'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5237286.jpg?alt=media&token=797b84ad-8227-4cb3-8e29-c6cbbbd5dd0d',
    slogan: null,
  },
  {
    kpId: '5238342',
    year: 2022,
    description:
      'Проект о дикой природе Кавказа. Зубры и медведи, олени, серны, туры, леопарды, хищные птицы сняты в одном из самых живописных уголков планеты. Интересные факты об особенностях их поведения, местах обитания и истории появления на Кавказе расскажут полевые зоологи.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription:
      'В Кавказских горах живут олени, зубры и даже леопарды. Впечатляющий документальный фильм для детей',
    type: 'TV_SERIES',
    nameRu: 'Животный мир Кавказа',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5238342.jpg?alt=media&token=b85560bf-ac2f-403d-a137-150004b16729',
    genres: ['документальный', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5238342.jpg?alt=media&token=e73c390c-b3a1-4749-a47c-5bf55c9ca0d2',
    slogan: null,
  },
  {
    kpId: '5260016',
    year: 2022,
    description:
      '«Попкульт» — это проект на стыке ностальгии и любви к массовой культуре. В шоу, которое выходит на YouTube-канале «sndk», авторы разбирают прошлое на атомы через призму игр, анимации, кино, комиксов и технологий, чтобы понять, как формировалась современная индустрия развлечений. Каждый выпуск посвящён одному году и его релизам, которые повлияли на развитие поп-культуры.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Попкульт',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5260016.jpg?alt=media&token=cfea9032-681f-46af-b616-76299ba70f7c',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5260016.jpg?alt=media&token=66c2f3d2-b3b3-4746-afa7-f956ac61b5e5',
    slogan: null,
  },
  {
    kpId: '5276678',
    year: 2023,
    description:
      'Старшеклассник, страстно обожающий музыку и играющий на гитаре в рок-группе, однажды заходит в загадочный магазин музыкальных инструментов и переносится из 2023 года в 1995-й.',
    filmLength: 70,
    countries: ['Корея Южная'],
    shortDescription: null,
    type: 'TV_SERIES',
    nameRu: 'Искрящийся арбуз',
    nameOriginal: 'Banjjakineun witeomellon',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5276678.jpg?alt=media&token=80ff7d15-03f1-42cf-a3b2-ec035e4c46a6',
    genres: ['мелодрама', 'фэнтези', 'музыка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5276678.jpg?alt=media&token=02a4222d-cc4d-4ea7-b76f-d85685cf4aa1',
    slogan: null,
  },
  {
    kpId: '5332560',
    year: 2023,
    description:
      'Помогать — просто! Это уже 15 лет на личном примере доказывает народный артист России, художественный руководитель МХТ им. А. П. Чехова Константин Хабенский. Зрители знают и любят его по многочисленным ролям в кино и театре, но в этом фильме он расскажет о другой, пожалуй, самой сложной своей роли. Константин — основатель благотворительного фонда, который помогает детям и молодым взрослым с опухолями мозга.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription:
      'Константин Хабенский рассказывает о своем фонде по борьбе с опухолями мозга. Докпроект, полный оптимизма и надежды',
    type: 'FILM',
    nameRu: 'Как я стал ребенком',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5332560.jpg?alt=media&token=cae300d9-81a5-4b12-9203-95cdfa989a39',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5332560.jpg?alt=media&token=9190039e-3329-498d-a07b-725ecaa35c29',
    slogan: null,
  },
  {
    kpId: '5404281',
    year: 2023,
    description:
      'Новые пейзажи, невероятные открытия моделей поведения животных и возможность наблюдать за напряжённой борьбой удивительных обитателей нашей планеты.',
    filmLength: null,
    countries: ['Великобритания'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'BBC: Планета Земля III',
    nameOriginal: 'Planet Earth III',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5404281.jpg?alt=media&token=b5eb1b8a-4575-4aae-829b-e529a0fff2f5',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5404281.jpg?alt=media&token=e2a91851-d317-4f8e-a5a3-ec3c7cad495d',
    slogan: null,
  },
  {
    kpId: '5411887',
    year: 2023,
    description:
      'Смешарики снимают кино! В программе боевик и комедия, фантастика и фэнтези, мюзикл и даже немое кино. А также эльфы, феи, древние пророчества, мировое зло, Пин Бонд и роботы-дроиды.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription:
      'Ромашковая долина превращается в одну большую съемочную площадку. Мини-сериал с уймой пасхалок и песней Князя',
    type: 'TV_SERIES',
    nameRu: 'Смешарики снимают кино',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5411887.jpg?alt=media&token=71ba0435-ad34-4dfe-9cac-60907e7f4610',
    genres: ['приключения', 'мультфильм', 'семейный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5411887.jpg?alt=media&token=df357f31-487e-4ded-a3ae-f6a88b4cea04',
    slogan: null,
  },
  {
    kpId: '5416975',
    year: 2023,
    description:
      'После катастрофических действий Эрена его друзья и бывшие враги объединяются против него. Армин, Микаса и оставшиеся в живых солдаты разведкорпуса формируют временный союз с Райнером Брауном и остатками марлийской армии, чтобы остановить Эрена. Противостояние людей и титанов достигает апогея.',
    filmLength: 23,
    countries: ['Япония'],
    shortDescription:
      'Противостояние людей и кровожадных великанов достигает апогея. Развязка эпичной аниме-саги — с новыми сценами!',
    type: 'MINI_SERIES',
    nameRu: 'Атака Титанов: Финал. Расширенная версия',
    nameOriginal: 'Shingeki no Kyojin: The Final Season - Kanketsu-hen',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5416975.jpg?alt=media&token=86ee01e0-2d36-4bf1-b5ee-9e93be81b6a6',
    genres: ['драма', 'фантастика', 'боевик', 'фэнтези', 'мультфильм', 'аниме'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5416975.jpg?alt=media&token=02d67a7f-dcd4-4061-b652-8aef7d1e9553',
    slogan: null,
  },
  {
    kpId: '5418900',
    year: 2023,
    description:
      'Ленинград, 1983 г. Слава, Антон и Денис тусуются на рок-квартирниках, ловят волны западных радиостанций, продают редкий винил и мечтают о поездке на родину обожаемых «битлов». Романтик Слава встречает на крыше прекрасную незнакомку, но та от него ускользает, ботаник Антон тайно вздыхает по хозяйке самых крутых вечеринок в городе, а у мажора Дениса страстный роман, но он не верит в их с любимой будущее. Крепкая мужская дружба даёт большую трещину, когда отец Дениса решает женить его по расчёту на профессорской дочке.',
    filmLength: 150,
    countries: ['Россия'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Ничего не бойся, я с тобой',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5418900.jpg?alt=media&token=8f073f72-831e-4e72-bd2b-08594c689e55',
    genres: ['мелодрама', 'мюзикл'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5418900.jpg?alt=media&token=03ea1631-cd37-43c6-ac05-bee8d96bd55b',
    slogan: null,
  },
  {
    kpId: '5444474',
    year: 2022,
    description:
      'Неизведанный и далекий космос становится немного ближе благодаря приключениям Астрочела. В своем увлекательном путешествии он получает самую разную информацию от говорящих планет — например, почему Меркурий горячий, Марс красный, а у Сатурна есть кольца.',
    filmLength: 8,
    countries: ['США', 'Великобритания', 'Россия'],
    shortDescription:
      'Планеты ищут любовь, плетут интриги и спасают Вселенную. Веселый мультсериал о тайнах Солнечной системы',
    type: 'TV_SERIES',
    nameRu: 'Шаранутый космос',
    nameOriginal: 'SolarBalls',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5444474.jpg?alt=media&token=e6d1c901-4f45-4043-8cc0-1c6541a09e60',
    genres: ['драма', 'фантастика', 'комедия', 'мультфильм'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5444474.jpg?alt=media&token=9bae60e0-0f2d-49fe-84f2-9f2d6d3462dc',
    slogan: null,
  },
  {
    kpId: '5493676',
    year: 2020,
    description:
      'Оказавшись на ферме, кошка Лапша и пёс Булочка приступают к исследованию нового удивительного мира, где буквально за каждым кустом их поджидают сюрпризы. Нужно держать ухо востро, ведь эти края населяют животные, которые не на шутку заинтересовались городскими жителями. То крот-клептоман стащит любимую лежанку, то бойкий пони норовит полакомиться их завтраком, а воинственная утка только и ждёт удобного случая, чтобы ущипнуть за хвост. Но в компании верного товарища все трудности превращаются в приключения.',
    filmLength: 3,
    countries: ['ЮАР'],
    shortDescription:
      'Пес и кошка переезжают за город и ищут общий язык с местными. Уморительные приключения друзей на ферме',
    type: 'TV_SERIES',
    nameRu: 'Лапша и булочка',
    nameOriginal: 'Noodle and Bun',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F5493676.jpg?alt=media&token=601b25b3-9dff-4b2e-ba0b-6681bf386a54',
    genres: ['приключения', 'комедия', 'мультфильм', 'семейный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F5493676.jpg?alt=media&token=690c358c-42aa-473c-9be8-37fa6a468517',
    slogan: null,
  },
  {
    kpId: '574810',
    year: 2010,
    description:
      'Крис и Мартин исследуют дикую природу всего мира, чтобы побольше узнать о жизни животных. Всюду их сопровождают верные друзья Авива, Коки и Джимми. С помощью специальных супер-костюмов братья Кратты могут повторять все, что делают сами животные. Эта сверхспособность позволяет ребятам не только наблюдать за дикими зверями, но и выручать их в опасных ситуациях.',
    filmLength: 26,
    countries: ['США', 'Канада', 'Дания', 'Китай'],
    shortDescription:
      'Крис и Мартин подбираются к опасным животным с помощью гениальных технологий. Приключения для любознательных',
    type: 'TV_SERIES',
    nameRu: 'Братья Кратт: Зов природы',
    nameOriginal: 'Wild Kratts',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F574810.jpg?alt=media&token=699c2c3f-acca-4bb5-a059-5b1bfbf1f856',
    genres: ['приключения', 'комедия', 'мультфильм', 'семейный', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F574810.jpg?alt=media&token=fd0b951c-4043-496b-ac97-82799d6e9f20',
    slogan: null,
  },
  {
    kpId: '591929',
    year: 2012,
    description:
      'Приключения двойняшек, Диппера и Мэйбл, которые проводят летние каникулы у двоюродного дедушки Стэна в городке под названием Гравити Фолз.',
    filmLength: 22,
    countries: ['США'],
    shortDescription:
      'Близнецы проводят каникулы у странного прадядюшки. Тайны и аномалии в захватывающем мультсериале Алекса Хирша',
    type: 'TV_SERIES',
    nameRu: 'Гравити Фолз',
    nameOriginal: 'Gravity Falls',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F591929.jpg?alt=media&token=125ec919-9b1d-49ec-a2bf-7a95f5e7813b',
    genres: ['детектив', 'фантастика', 'приключения', 'комедия', 'мультфильм', 'семейный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F591929.jpg?alt=media&token=1108ddc0-1c1e-4648-8a32-4a6e35cdef24',
    slogan: 'Just West of Weird.',
  },
  {
    kpId: '647823',
    year: 2009,
    description:
      'Судьба Моцарта преподносит ему испытание: Коллоредо сменяет принца-архиепископа Зальцбурга. Новый правитель - строгий и авторитарный человек, не воспринимающий музыку молодого композитора и не терпящий его пыл и дерзость. Жизнь в Зальцбурге становится для двадцатилетнего юноши невыносимой. Он решает оставить свой родной город и уехать с матерью на поиски лучшего будущего в европейских столицах.',
    filmLength: 121,
    countries: ['Франция'],
    shortDescription: null,
    type: 'VIDEO',
    nameRu: 'Моцарт. Рок-опера',
    nameOriginal: "Mozart L'Opéra Rock",
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F647823.jpg?alt=media&token=0a1b3662-6780-4aef-8e73-fc6924ff5aad',
    genres: ['мюзикл'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F647823.jpg?alt=media&token=8b415001-4ed7-405a-8597-d13b65b068b1',
    slogan: null,
  },
  {
    kpId: '674243',
    year: 2008,
    description:
      'Документальный фильм о трудах и днях охотников и их семей из посёлка Бахта в среднем течении реки Енисей в течение целого года.',
    filmLength: 55,
    countries: ['Россия'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Счастливые люди',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F674243.jpg?alt=media&token=a34d8b41-10dd-4bf6-96c9-f39f6a2546f9',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F674243.jpg?alt=media&token=8b026584-a2d1-4a1b-93d0-eb2a47f3007b',
    slogan: null,
  },
  {
    kpId: '685246',
    year: 2013,
    description:
      'В центре сюжета - школьник по имени Морти и его дедушка Рик. Морти - самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в безумные приключения с помощью построенной из разного хлама летающей тарелки, которая способна перемещаться сквозь межпространственный тоннель. Каждый раз эта парочка оказывается в самых неожиданных местах и самых нелепых ситуациях.',
    filmLength: 23,
    countries: ['США'],
    shortDescription:
      'Гениальный ученый втягивает внука в безумные авантюры. Выдающийся анимационный сериал Дэна Хармона',
    type: 'TV_SERIES',
    nameRu: 'Рик и Морти',
    nameOriginal: 'Rick and Morty',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F685246.jpg?alt=media&token=11cb7bb3-69d0-473c-b9c6-e0863670048b',
    genres: ['фантастика', 'приключения', 'комедия', 'мультфильм'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F685246.jpg?alt=media&token=fed544e8-694e-404b-a524-76c1a9e09b2d',
    slogan: "Science makes sense, family doesn't.",
  },
  {
    kpId: '734128',
    year: 2016,
    description:
      'История агента Трумана Блэка, секретного сотрудника, который должен защитить правительство и корпоративные интересы в миссии, ставки в которой чрезвычайно высоки.',
    filmLength: null,
    countries: ['США'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Время не терпит',
    nameOriginal: 'Time Framed',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F734128.jpg?alt=media&token=06f16433-31ee-4290-b54a-78a46821c90e',
    genres: ['драма'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F734128.jpg?alt=media&token=3ec1ef62-64da-496c-b1cd-2dc17742b762',
    slogan: null,
  },
  {
    kpId: '762381',
    year: 2014,
    description: 'Рассказ о научных открытиях, совершённых за последние столетия.',
    filmLength: 44,
    countries: ['США'],
    shortDescription: null,
    type: 'MINI_SERIES',
    nameRu: 'Космос: Пространство и время',
    nameOriginal: 'Cosmos: A Spacetime Odyssey',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F762381.jpg?alt=media&token=81243448-f125-4191-9a59-0f410358e07e',
    genres: ['документальный'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F762381.jpg?alt=media&token=2eebb649-0ad9-49f7-bf85-7b62ed1e501e',
    slogan: null,
  },
  {
    kpId: '77044',
    year: 1994,
    description:
      'Шестеро друзей – Рейчел, Моника, Фиби, Джоуи, Чендлер и Росс – живут по соседству, вместе убивают время, делятся секретами и иногда очень сильно влюбляются.',
    filmLength: null,
    countries: ['США'],
    shortDescription:
      'Шестеро друзей, две квартиры и много юмора. Ситком, который вошел в культурный код не одного поколения',
    type: 'TV_SERIES',
    nameRu: 'Друзья',
    nameOriginal: 'Friends',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F77044.jpg?alt=media&token=c5e98321-17ed-419f-8b39-4b26b925610a',
    genres: ['мелодрама', 'комедия'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F77044.jpg?alt=media&token=849c9998-0f26-4224-a917-c95321257fea',
    slogan: 'Everybody needs Friends!',
  },
  {
    kpId: '944829',
    year: 2015,
    description:
      'Жизнь дружелюбной компании соседей, которая живет словно большая семья, на фоне Олимпиады 1988 года в Сеуле. В каждой семье есть проблемы, но многие начинают верить в маленькое чудо на фоне грандиозного события, которое вскоре состоится в их городе.',
    filmLength: 85,
    countries: ['Корея Южная'],
    shortDescription:
      'Как жили сеульские подростки накануне летней Олимпиады-88? Ретродорама о первой любви и взрослении',
    type: 'TV_SERIES',
    nameRu: 'Вернуться в 1988',
    nameOriginal: 'Eungdaphara 1988',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F944829.jpg?alt=media&token=9803de34-bf38-4414-8357-2979207b31fd',
    genres: ['мелодрама', 'комедия'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F944829.jpg?alt=media&token=129d7087-b571-4c37-a349-67e35afc0bb6',
    slogan: null,
  },
  {
    kpId: '952236',
    year: 2015,
    description:
      'Герои команды Хот Вилс построили для жителей города невероятную Мегатрассу для ежегодных городских Мегагонок. Но не обошлось без форс-мажора - на город напали дорожные пираты! Друзьям придется приложить огромные усилия, чтобы освободить Уайта и спасти жителей города от катастрофы.',
    filmLength: 45,
    countries: ['США'],
    shortDescription:
      'Друзья-гонщики сталкиваются с бесшабашной дорожной бандой. Остросюжетный мультфильм о пользе командной работы',
    type: 'FILM',
    nameRu: 'Hot Wheels. Мегатрасса',
    nameOriginal: 'Team Hot Wheels: Build the Epic Race',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F952236.jpg?alt=media&token=f3044893-33f0-467d-899f-81386d99aa60',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F952236.jpg?alt=media&token=12bc99e6-8069-4c96-9038-a3eafd66be77',
    slogan: null,
  },
  {
    kpId: '961694',
    year: 2015,
    description: null,
    filmLength: 22,
    countries: ['США'],
    shortDescription:
      'В команду Мстителей внедряется искусственный интеллект. Анимация LEGO о схватке супергероев с Альтроном',
    type: 'FILM',
    nameRu: 'LEGO Супергерои Marvel: Мстители. Снова в сборе',
    nameOriginal: 'Lego Marvel Super Heroes: Avengers Reassembled',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F961694.jpg?alt=media&token=8eff2d5d-ec5a-495a-950f-37c4fd5baf88',
    genres: ['фантастика', 'мультфильм', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F961694.jpg?alt=media&token=e8f7bc31-07af-4558-96b6-1677cd7e7bd8',
    slogan: null,
  },
  {
    kpId: '962472',
    year: 2015,
    description:
      'В Хот Вилс появляется загадочный новый житель по имени Гарри. Он демонстрирует изобретение, которое может решить все дорожные проблемы. Новый дистанционно-управляемый радиокомплекс способен лишить жителей города всех забот и хлопот! Не все друзья уверены, что Гарри можно доверять… Оказывается, что у парнишки есть один секрет.',
    filmLength: 45,
    countries: ['США'],
    shortDescription:
      'Мальчик помогает гонщикам остановить своего злого брата-изобретателя. Драйвовые приключения в городке Хот Вилс',
    type: 'FILM',
    nameRu: 'Hot Wheels. За гранью воображения',
    nameOriginal: 'Team Hot Wheels: The Skills to Thrill',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F962472.jpg?alt=media&token=9f25cecc-b484-4bdf-aea0-48b2066248d7',
    genres: ['мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F962472.jpg?alt=media&token=43c3c1f5-7943-49ac-a697-0e891a2e8257',
    slogan: null,
  },
  {
    kpId: '972889',
    year: 2011,
    description:
      'Юмористическое шоу, высмеивающее плохое кино. От российских «шедевров», до американской клюквы. А также серьёзные обзоры и переводы.',
    filmLength: null,
    countries: ['Россия'],
    shortDescription: null,
    type: 'TV_SHOW',
    nameRu: 'BadComedian',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F972889.jpg?alt=media&token=69b6d483-52a0-468a-a77e-104562f8656d',
    genres: ['комедия', 'реальное ТВ'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F972889.jpg?alt=media&token=fa82ffca-8c74-4492-924c-7eb44ca5be3a',
    slogan: null,
  },
  {
    kpId: '982493',
    year: 2004,
    description: 'Набор роликов из прошлых эпизодов перед заключительным сезоном.',
    filmLength: 22,
    countries: ['США'],
    shortDescription: null,
    type: 'FILM',
    nameRu: 'Друзья: Ещё один эпизод перед последним – Десять лет Друзей',
    nameOriginal: 'Friends: The One Before the Last One - Ten Years of Friends',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F982493.jpg?alt=media&token=f0c9ce03-0b2f-434c-954d-52cfd4aeb32c',
    genres: ['комедия'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F982493.jpg?alt=media&token=cb62a750-d69d-4bef-96a0-279088a78af7',
    slogan: null,
  },
  {
    kpId: '988056',
    year: 2015,
    description:
      'Анимационный развлекательно-образовательный проект для малышей от 0 до 3 лет, охватывающий̆ все сферы жизнедеятельности ребенка с самого рождения: здоровье и физическое развитие, познание, социализацию, труд и творчество. Благодаря использованию современных технологий и положенных в основу разработок детских психологов и педагогов, проект органично сочетает в себе интерактивность и безопасность.',
    filmLength: 5,
    countries: ['Россия'],
    shortDescription:
      'Как начать общение, что такое сочувствие и откуда берется снег? Вместе с Малышариками взрослеют и их вопросы',
    type: 'TV_SERIES',
    nameRu: 'Малышарики',
    nameOriginal: null,
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F988056.jpg?alt=media&token=103e0ba8-52ab-4749-a056-997bbc994d8a',
    genres: ['комедия', 'мультфильм', 'детский'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F988056.jpg?alt=media&token=ded378ec-0ff9-436f-bbd9-f61062e91da2',
    slogan: null,
  },
  {
    kpId: '989469',
    year: 2016,
    description:
      'Мультфильм повествует о внутренней борьбе между человеческим Мозгом, контролирующим каждое его движение, и его Сердцем - весёлым авантюристом, желающим дать человеку немного свободы.',
    filmLength: 6,
    countries: ['США', 'Япония'],
    shortDescription:
      'Рациональный мозг против эмоционального сердца. Мультфильм о внутренней свободе от продюсера «Головоломки»',
    type: 'FILM',
    nameRu: 'Путь к сердцу',
    nameOriginal: 'Inner Workings',
    posterUrl:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp%2F989469.jpg?alt=media&token=2ae345c8-348c-4c36-bcc8-ce54341e99aa',
    genres: ['приключения', 'фэнтези', 'комедия', 'мультфильм', 'семейный', 'короткометражка'],
    posterUrlPreview:
      'https://firebasestorage.googleapis.com/v0/b/movie-critics-49c99.appspot.com/o/posters%2Fkp_small%2F989469.jpg?alt=media&token=4e3e3598-b5b3-46e5-943e-b9e2bea3c793',
    slogan: null,
  },
];
