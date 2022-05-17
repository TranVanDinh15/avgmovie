const main = document.querySelector("#main");
const header = document.querySelector("#header");
const content = document.querySelectorAll("#content")[0];
const col = content.querySelectorAll(".col");
const imageMovie = document.querySelector(".image__movie");
const properties = document.getElementById("properties");
var description = document.querySelector(".description span");
const title = document.querySelector(".properties__infor__tittle");
const realeaseDate = document.querySelector(".realeaseDate span");
const content3 = document.querySelector(".content2");
const watchMovie = document.querySelector(".watch__movie");
const watchTraillerbutton = document.querySelector(".watch__trailler");
const page3 = document.querySelector("#watchMovie");
const iframe = document.querySelector(".iframe");
const nameNamewatchmovie = document.querySelector(".name__Namewatchmovie");
const nameNamewatchmovi2 = document.querySelector(".name__Namewatchmovi2");
const nameMoviePage3 = document.querySelector(
  ".watchMovie__container__NameMovie h1"
);
const nameMovieEnglish = document.querySelector(
  ".watchMovie__container__NameMovie p"
);
const episolePage3 = document.querySelector(
  ".watchMovie__container__NameMovie span"
);
const descriptionPage3 = document.querySelector(
  ".watchMovie__container__description span"
);
const updateEpisode = document.querySelector(
  ".watchMovie__container__NameMovie span"
);
const body = document.querySelector("body");
const watchTrailer = document.querySelector(".watchTrailer");
const spanEpisode = document.querySelectorAll(".list__episodeMovie span");
const listEpisodeMovie = document.querySelector(".list__episodeMovie");
const pageoddMovie = document.querySelector(".pageoddMovie__JS");
const seriesMovie = document.querySelector(".seriesMovie__JS");
const oddMovieJS = document.querySelector(".oddMovie__JS");
const seriesMovieItemJS = document.querySelector(".seriesMovieItem__JS");
const searchResult = document.querySelector(".searchResult");
const notificationLoad = document.querySelector(".notification_load");
const notificationLoadSpan = document.querySelector(".notification_load span");
const MovieRemarkable = document.querySelector("#Movie__remarkable");
const remarkableSpan = document.querySelector(".Movie__remarkable__watchnow");
const upadateMovieHeading = document.querySelector(".upadateMovie__heading");
const upadateMovieContainer = document.querySelector(
  ".upadateMovie__container"
);
const hotMovieSave = document.querySelector(".hotMovie");
const errorContainer = document.querySelector(".error__container");
const resultSearch = document.querySelector(".result__search");
const MovieRemarkableImage = document.querySelector(
  ".Movie__remarkable__image img"
);
const MovieRemarkableInfor = document.querySelector(
  ".Movie__remarkable__infor h5"
);
const MovieRemarkableDescription = document.querySelector(
  ".Movie__remarkable__description"
);
const MovieRemarkableWatchnow = document.querySelector(
  ".Movie__remarkable__watchnow"
);
const MovieRemarkablePopular = document.querySelector(
  ".Movie__remarkable__popular"
);
const watchMovieContainerList = document.querySelector(
  ".watchMovie__container__list"
);
const pageoddMovieContainer = document.querySelector(".pageoddMovie_Container");
const btnloadNextSpan = document.querySelector(".btn__loadNext");
const seriesMovieContainer = document.querySelector(".seriesMovieContainer");
const seriesMovieItemwrapper = document.querySelector(
  ".seriesMovieItem__wrapper"
);
const btnLoadNextSeries = document.querySelector(".btn__loadNextSeries");
const inputs = document.querySelector(".search__input");
const suggestSearch=document.querySelector('.suggestSearch')
var checkSearch = true;
var dem = 0;
let numberPage = 1;
var App = {
  dealSchool: [
    {
      quality: "HD",
      poster: "image/movie/dealschool3.jpg",
      episodes: "Full 12/12",
      nameMovie: "Ngôi trường xác sống",
      nameEnglish: "ALL Of Us Are Deal ",
      original_poster: "https://bilutv.link/film/19908/big.jpg?v=1643508987",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=99966&s=1&e=12",
        },
      ],
      inforMovie: {
        description:
          "Bộ phim xoay quanh hành trình sống còn, chống lại xác sống của một nhóm học sinh bị mắc kẹt trong trường học khi xuất hiện một loại virus lây nhiễm có khả năng biến con người thành xác sống đang lây lan khắp thành phố. Tình bạn và các giá trị đạo đức của họ đang bị đe dọa, khi họ chiến đấu để tồn tại.",
        Release: "28/01/2022",
      },
    },
    {
      quality: "HD",
      poster: "image/movie/againMyLife.jpg",
      episodes: "Full 2",
      nameMovie: "Công tố viên chuyển sinh",
      nameEnglish: "Again My Life",
      original_poster:
        "https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/03/28/ekmo1c88_1920x1080-congtovienchuyensinh-2_1920_1080.jpg",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135654&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135654&s=1&e=2",
        },
      ],
      inforMovie: {
        description:
          "Là bộ phim được chuyển thể từ webtoon nổi tiếng cùng tên có yếu tố bí ẩn và huyền ảo. Ra mắt vào ngày 8/4 vừa qua, Công Tố Viên Chuyển Sinh ngay lập tức được sự đón nhận nồng nhiệt của khán giả.",
        Release: "08/04/2022",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/da/84/da84132badbd1586ba6547f8a2fbc1f0/da84132badbd1586ba6547f8a2fbc1f0.jpg",
      episodes: "Full 2",
      nameMovie: "Công tố viên quân sự doberman",
      nameEnglish: "military prosecutor doberman",
      original_poster:
        "https://afamilycdn.com/150157425591193600/2022/3/3/photo-1-16462777296481595994397-1646277849011-16462778491011692061568.jpg",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=12",
        },
        {
          number: "Tập 13",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=13",
        },
        {
          number: "Tập 14",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135652&s=1&e=14",
        },
      ],
      inforMovie: {
        description:
          '"Military Prosecutor Dobermann" tells the story of Do Bae-man, who became a military prosecutor for money, and Cha Woo-in, who became a military prosecutor for revenge, meeting and breaking down the black and rotten evil in the military and growing into a real military prosecutor.',
        Release: "28/02/2022",
      },
    },
    {
      quality: "HD",
      poster:
        "https://kenh14cdn.com/thumb_w/660/2020/2/24/photo-1-15825095552141338002474.jpg",
      episodes: "Full 16",
      nameMovie: "Tầng lớp itaewon",
      nameEnglish: "ITAEWON CLASS",
      original_poster:
        "https://bloganchoi.com/wp-content/uploads/2020/03/bia-anh.jpg",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=12",
        },
        {
          number: "Tập 13",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=13",
        },
        {
          number: "Tập 14",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=14",
        },
        {
          number: "Tập 15",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=15",
        },
        {
          number: "Tập 16",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=96162&s=1&e=16",
        },
      ],
      inforMovie: {
        description:
          "On the first day of attending his new high school, Park Sae Roy gets into trouble after punching Jang Geun Won, who had been bullying a fellow classmate. Jang Dae Hee, the father of Jang Geun Won, is the CEO of the restaurant business Jagga, and the boss of Park Sae Roy father. After refusing to apologize for punching Jang Geun Won, Park Sae Roy father is fired, and he is ultimately expelled from school. Soon after, a tragic accident, caused by Jang Geun Won, takes place and Park Sae Ro Yoy’s father dies. Heartbroken and angry at his loss, Park Sae Roy viciously beats Jang Geun Won, earning himself time in prison. Deciding to take revenge upon the Jagga compony and the Jang family, Park Sae Roy opens his own restaurant in Itaewon, Seoul.",
        Release: "08/04/2022",
      },
    },
    {
      quality: "HD",
      poster: "image/movie/noWayHome.jpg",
      episodes: "Tập Full",
      nameMovie: "Người Nhện:không có đường về nhà",
      nameEnglish: "No Way Home",
      original_poster: "https://gstatic.gvn360.com/2021/12/Spider-man_-2.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=634649",
        },
      ],
      inforMovie: {
        description:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        Release: "15/12/2021",
      },
    },
    {
      quality: "HD",
      poster: "image/movie/squidGame2.png",
      episodes: "Tập 9/9",
      nameMovie: "Trò Chơi Con Mực",
      nameEnglish: "Squid Game (Season 1)",
      original_poster:
        "https://i0.wp.com/www.techsignin.com/wp-content/uploads/2021/08/netflix-poster-squid-game-tro-choi-con-muc-3.jpeg?resize=1920%2C1012&ssl=1",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=93405&s=1&e=9",
        },
      ],
      inforMovie: {
        description:
          "Phim được Netflix phát hành trực tuyến vào ngày 17 tháng 9 năm 2021. Phim kể về một nhóm 456 người mạo hiểm tính mạng trong 6 trò chơi sinh tồn để nhận được tổng số tiền 45,6 tỷ Won. Tên phim được lấy từ một trò chơi dân gian của Hàn Quốc trong quá khứ.",
        Release: "17/09/2021",
      },
    },
    {
      quality: "HD",
      poster:
        "https://static.phimdacap.com/poster/jpg/Poster-vincenzo-vincenzo-id_2180_10386624153WLvV.jpg",
      episodes: "Full 20/20",
      nameMovie: "Vincenzo",
      nameEnglish: "Vincenzo",
      original_poster:
        "https://salt.tikicdn.com/ts/product/02/2b/64/ebdf8e4a68ec3e3a994a22a8685d739c.jpg",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=12",
        },
        {
          number: "Tập 13",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=13",
        },
        {
          number: "Tập 14",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=14",
        },
        {
          number: "Tập 15",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=15",
        },
        {
          number: "Tập 16",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=16",
        },
        {
          number: "Tập 17",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=17",
        },
        {
          number: "Tập 18",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=18",
        },
        {
          number: "Tập 19",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=19",
        },
        {
          number: "Tập 20",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=117376&s=1&e=20",
        },
      ],
      inforMovie: {
        description:
          "Nội dung. Năm 8 tuổi, Park Joo-hyung (Song Joong-ki) đến Ý sau khi được một gia đình người Ý nhận nuôi. Sau đó anh gia nhập băng đảng Mafia, nơi anh được Don Fabio - người đứng đầu gia tộc Cassano nhận nuôi. Park Joo-hyung được đổi tên thành Vincenzo Cassano và trở thành luật sư người Ý.",
        Release: "20/02/2021",
      },
    },
    {
      quality: "HD",
      poster:
        "https://product.hstatic.net/1000376556/product/dragon_ball_super_anime_comics_-_7_vien_ngoc_rong_sieu_cap_broly_d9454f9f1a4940d6b886b283fc8f2e45.jpg",
      episodes: "Tập Full",
      nameMovie: "Dragon Ball Super: Broly",
      nameEnglish: "Dragon Ball Super: Broly",
      original_poster:
        "https://phimnhua.com/wp-content/uploads/2021/05/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=503314",
        },
      ],
      inforMovie: {
        description:
          "Nội dung phim Bảy viên ngọc rồng siêu cấp: Broly lấy bối cảnh từ rất lâu, lúc hành hành tình Saiyan vẫn còn dưới sự trị vì yên ổn của King Vegeta. Lúc ấy, ông có một đứa con đặt tên là Vegeta (Sau này là Vegeta bạn của Son Goku), ông tự hào con mình là người có sức mạnh lớn và nối nghiệp ông sau này. Vì ghen tức với sức mạnh tiềm ẩn của Broly – con của Paragas (Vị tướng tài giỏi của hành tinh Saiyan), King Vegeta đã đầy bố con Paragas đến một hành tinh khắc nghiệt trong vũ trụ. 41 năm sau, dưới sự giúp đỡ của Frieza, bố con Parasgas và Broly thoát khỏi hành tinh bảo tố đến gặp Vegeta để trả mối thù năm xưa.",
        Release: "14/12/2018",
      },
    },
    {
      quality: "HD",
      poster:
        "https://avatar-ex-swe.nixcdn.com/playlist/2019/10/30/5/2/c/a/1572420283230_500.jpg",
      episodes: "Tập 16/16",
      nameMovie: "Lãng Khách",
      nameEnglish: "Vagabond 2016",
      original_poster:
        "https://photos.hancinema.net/photos/fullsizephoto1099132.jpg",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=12",
        },
        {
          number: "Tập 13",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=13",
        },
        {
          number: "Tập 14",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=14",
        },
        {
          number: "Tập 15",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=15",
        },
        {
          number: "Tập 16",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=92983&s=1&e=16",
        },
      ],
      inforMovie: {
        description:
          "Vagabond là bộ phim truyền hình hành động kể về Cha Dal Geon (Lee Seungi), một diễn viên đóng thế với sự nghiệp lận đận đang phải vất vả chăm sóc cháu trai của mình- Hoon. Nhưng bi kịch ập đến khi Hoon vướng vào một vụ tai nạn máy bay bí ẩn và khiến tất cả mọi người trên chuyến bay tử vong. Đau lòng trước cái chết của người cháu, Dal Geon đến Maroc để làm lễ tang và quyết tâm tìm hiểu chính xác chuyện gì đã xảy ra. Tuy nhiên, khi bắt tay vào cuộc điều tra của mình, anh đã gặp phải đặc vụ của NIS (National Intelligence Agent) Go Haeri (Bae Suzy). Cả hai bắt đầu làm việc cùng nhau và nhận ra vụ tai nạn máy bay không đơn giản như họ nghĩ mà đó là vụ âm mưu thâm độc khiến họ vướng vào một mạng lưới tham nhũng chính trị.",
        Release: "20/09/2019",
      },
    },
    {
      quality: "HD",
      poster:
        "https://bloganchoi.com/wp-content/uploads/2021/02/spaceship-victory.jpg",
      episodes: "Tập Full",
      nameMovie: "Con Tàu Chiến Thắng",
      nameEnglish: "Space Sweepers",
      original_poster:
        "https://bloganchoi.com/wp-content/uploads/2021/02/ak-sjkt-0302.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=581389",
        },
      ],
      inforMovie: {
        description:
          "Được coi là bom tấn lấy bối cảnh ngoài không gian đầu tiên của Hàn Quốc, Con tàu Chiến Thắng lấy bối cảnh năm 2092, với nội dung xoay quanh cuộc phiêu lưu của bốn kẻ lạc loài trên tàu Chiến Thắng sau khi vô tình phát hiện ra một bé gái mang trong mình vũ khí hủy diệt hàng loạt.",
        Release: "05/02/2021",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/1f/c3/1fc3418de8b37c83a3cd498f7e6badb3/1fc3418de8b37c83a3cd498f7e6badb3.jpg",
      episodes: "Tập Full",
      nameMovie: "Hải Tặc: Kho báu hoàng gia cuối cùng",
      nameEnglish: "The Pirates:The Last Royal Treasure",
      original_poster:
        "https://img.meowphim.tv/uploads/movies/hai-tac-kho-bau-hoang-gia-cuoi-cung-poster.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=591120",
        },
      ],
      inforMovie: {
        description:
          "Hae Rang (Han Hyo Joo) - nữ thuyền trưởng của một nhóm hải tặc “cùng hội cùng thuyền” với Woo Moo Chi (Kang Ha Neul) - một tay tự xưng là đệ nhất kiếm Goryeo lãnh đạo của nhóm quân nghịch tặc. Họ đồng hành trên con tàu cướp biển với chí hướng chung là nguồn kho báu hoàng gia bị thất lạc nhưng trong quá trình cũng xảy ra đầy tranh chấp mâu thuẫn dở khóc dở cười. Cùng với hành trình tìm kho báu của họ, còn có Heung Soo (Kwon Sang Woo) một vị tướng vừa thèm khát quyền lực chính trị vừa có lòng tham kho báu. ",
        Release: "26/01/2022",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/a0/60/a060290f1a97e412e7041cb7ca5c9ff6/a060290f1a97e412e7041cb7ca5c9ff6.jpg",
      episodes: "Tập 12/12",
      nameMovie: "Chung Cư Có Độc",
      nameEnglish: "Happiness",
      original_poster:
        "https://dulich.petrotimes.vn/stores/news_dataimages/anhngoc/122021/03/23/4552_p2..jpg?rt=20211203234558",
      listMovie: [
        {
          number: "Tập 1",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=1",
        },
        {
          number: "Tập 2",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=2",
        },
        {
          number: "Tập 3",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=3",
        },
        {
          number: "Tập 4",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=4",
        },
        {
          number: "Tập 5",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=5",
        },
        {
          number: "Tập 6",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=6",
        },
        {
          number: "Tập 7",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=7",
        },
        {
          number: "Tập 8",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=8",
        },
        {
          number: "Tập 9",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=9",
        },
        {
          number: "Tập 10",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=10",
        },
        {
          number: "Tập 11",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=11",
        },
        {
          number: "Tập 12",
          link: "https://www.2embed.ru/embed/tmdb/tv?id=135340&s=1&e=12",
        },
      ],
      inforMovie: {
        description:
          "Happiness (Hạnh Phúc: Chung Cư Có Độc) là bộ phim thuộc thể loại kinh dị, hành động với đề tài về một căn bệnh truyền nhiễm. Phim lấy bối cảnh tại một tòa nhà chung cư được phân tầng theo địa vị xã hội. Khi căn bệnh nguy hiểm xuất hiện, những căn hộ cao tầng đã bị phong tỏa. ",
        Release: "05/11/2021",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/b0/18/b018c39263e125b7de6cf9146362d3c1/b018c39263e125b7de6cf9146362d3c1.jpg",
      episodes: "Tập Full",
      nameMovie: "Dog",
      nameEnglish: "Dog",
      original_poster: "https://i.imgur.com/UuwTKx6.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=626735",
        },
      ],
      inforMovie: {
        description:
          "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friends funeral ",
        Release: "18/02/2022",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/81/6a/816aa6fbf5badbef46170a1d3358c1b6/816aa6fbf5badbef46170a1d3358c1b6.jpg",
      episodes: "Tập Full",
      nameMovie: "Người nhện xa nhà",
      nameEnglish: "Spider-Man: Far from Home",
      original_poster:
        "https://ecdn.game4v.com/g4v-content/uploads/2019/07/hinh-phim-spiderthumb-e1562348713878.png",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=429617",
        },
      ],
      inforMovie: {
        description:
          "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent. ",
        Release: "26/06/2019",
      },
    },
    {
      quality: "HD",
      poster:
        "http://photos.q00gle.com/storage/files/images-2021/images-movies/09/614ff18cd772f.jpg",
      episodes: "Tập Full",
      nameMovie: "Giải cứu Guy",
      nameEnglish: "Free Guy",
      original_poster: "https://i.ibb.co/4wLJYJN/1-10.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=550988",
        },
      ],
      inforMovie: {
        description:
          "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline. ",
        Release: "13/08/2021",
      },
    },
    {
      quality: "HD",
      poster:
        "https://img.2embed.ru/xxrz/1200x600/100/94/29/94290f59ef5e183dea2d8a2a57cb9169/94290f59ef5e183dea2d8a2a57cb9169.jpg",
      episodes: "Tập Full",
      nameMovie: "Ronaldo",
      nameEnglish: "Ronaldo",
      original_poster: "https://cdn-amz.fadoglobal.io/images/I/61jkh7uJHaL.jpg",
      listMovie: [
        {
          number: "Tập Full",
          link: "https://www.2embed.ru/embed/tmdb/movie?id=361931",
        },
      ],
      inforMovie: {
        description:
          "Filmed over 14 months with unprecedented access into the inner circle of the man and the sport, this is the first official and fully authorised film of one of the most celebrated figures in football. For the first time ever, the world gets vividly candid and un-paralleled, behind-closed-doors access to the footballer, father, family-man and friend in this moving & fascinating documentary. ",
        Release: "2021",
      },
    },
  ],
  //
  //
  // mảng chứa thứ tự load phim
  loadMovie: [
    "doctor",
    "spider",
    "dragon",
    "harry",
    "jura",
    "dog",
    "iron",
    "captain",
    "batman",
    "wonder",
    "sony",
    "try",
    "hulk",
    "hour",
    "sonic",
    "out",
    "shoot",
    "end",
    "start",
    "pokemon",
    "thám tử",
    "thảm họa",
    "hải tặc",
  ],
  //
  //
  // Mảng chứa phim thịnh hành
  fihmPopular: [
    "Spider-Man: No Way Home",
    "The Avengers",
    "Rio",
    "Dragon Rider",
    "John Wick: Chapter 3 - Parabellum",
    "Venom",
    "Godzilla vs. Kong",
    "Pokémon Detective Pikachu",
    "Kong: Skull Island",
    "A Dog's Way Home",
    "Jumanji: The Next Level",
    "The Handmaiden",
    "Wish Dragon",
    "Pee Nak 2",
    "Sonic the Hedgehog 2",
    "Pirates of the Caribbean: Dead Men Tell No Tales",
    "Fantastic Beasts: The Secrets of Dumbledore",
    "thor",
    "Top Gun: Maverick",
    "Moonfall",
    "UNCHARTED",
    "The Outfit",
    "The Batman",
    "Iron Man 3",
    "Captain America: Civil War",
    "Train to Busan",
    "Avengers: Endgame",
    "Avengers: Infinity War",
    "World War Z",
    "The Pirates: The Last Royal Treasure",
    "Batman v Superman: Dawn of Justice",
    "thảm họa",
  ],
  //
  //
  // Mảng chứa phim mới
  newMovie: [
    "Doctor",
    "Harry Potter",
    "Death",
    "Dog",
    "Batman",
    "Sonic",
    "World's",
    "thor",
    "spiderman",
    "shoot",
    "hour",
  ],
  //
  // Hàm thêm phim vào html
  addMovie: function () {
    let urlFilmTop = `https://api.themoviedb.org/3/movie/now_playing?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=1`;
    fetch(urlFilmTop)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Lặp qua mản dealSchool và dùng hàm map để trả về một mản chứa các đoạn html
        var listAdd = data.results.map((data, index) => {
          let urlImage = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
          return `
                      <div class="colItem ">
                      <div class="colItem__image">
                          <img src="${urlImage}" alt="">
                      </div>
                      <div class="colItem__infor">
                         <span class="name">${
                           data.title ? data.title : data.name
                         }</span>
                     </div>
                      </div>
                      
                      `;
        });
        let rows = document.querySelector(".row");
        rows.innerHTML = listAdd.join("");

        this.nextPage(data);
      });
  },

  // Hàm đóng trang 3

  closePage3: function () {
    iframe.src = "";
    page3.style.display = "none";
  },
  //
  //
  //
  //
  //
  nextPag2FilmOdd: function (data, index) {
    let urlVideo = `https://api.themoviedb.org/3/movie/${data.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
    fetch(urlVideo)
      .then((response) => {
        return response.json();
      })
      .then((apiVideo) => {
        // Hàm tạo phim đề xuất dựa trên bộ phim hiện tại
        // this.newMovieRender(apiVideo)
        console.log(apiVideo);
        // this.nextPag2(data, index);
        let urlImage = `https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}`;
        let urlImage2 = `https://image.tmdb.org/t/p/original/${data.results[index].backdrop_path}`;
        let urlFilm = `https://www.2embed.ru/embed/imdb/movie?id=${apiVideo.imdb_id}`;
        iframe.src = urlFilm;
        pageoddMovie.style.display = "none";
        errorContainer.style.display = "none";
        page3.style.display = "none";
        MovieRemarkable.style.display = "none";
        content.style.display = "none";
        properties.style.display = "block";
        imageMovie.src = urlImage;
        title.innerText = data.results[index].title
          ? data.results[index].title
          : data.results[index].name;
        realeaseDate.innerText = data.results[index].release_date;
        description.innerText = data.results[index].overview;

        Object.assign(header.style, {
          backgroundImage: `url(${urlImage2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        });
        // Thay nội dung trang 3
        nameNamewatchmovie.innerText = data.results[index].title
          ? data.results[index].title
          : data.results[index].name;
        nameMoviePage3.innerText = data.results[index].title
          ? data.results[index].title
          : data.results[index].name;
        descriptionPage3.innerText = data.results[index].overview;
        window.scrollTo(0, -6000);
      });
  },
  //
  //
  //
  //
  nexpage2FilmSeries: function (data, index) {
    let urlImage = `https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}`;
    let urlImage2 = `https://image.tmdb.org/t/p/original/${data.results[index].backdrop_path}`;
    let urlVideo = `https://api.themoviedb.org/3/movie/${data.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
    fetch(urlVideo)
      .then((response) => {
        return response.json();
      })
      .then((resourses) => {
        let urlFilm = `https://www.2embed.ru/embed/tmdb/tv?id=${data.results[index].id}&s=1&e=1`;
        setTimeout(() => {
          iframe.src = urlFilm;
          pageoddMovie.style.display = "none";
          errorContainer.style.display = "none";
          searchResult.style.display = "none";
          page3.style.display = "none";
          MovieRemarkable.style.display = "none";
          content.style.display = "none";
          properties.style.display = "block";
          imageMovie.src = urlImage;
          title.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          realeaseDate.innerText = data.results[index].release_date
            ? data.results[index].release_date
            : data.results[index].first_air_date;
          description.innerText = data.results[index].overview;

          Object.assign(header.style, {
            backgroundImage: `url(${urlImage2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          });
          console.log(data);
          // Thay nội dung trang 3
          nameNamewatchmovie.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          nameMoviePage3.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          descriptionPage3.innerText = data.results[index].overview;
          window.scrollTo(0, -6000);
        }, 200);
      });
  },
  //
  //
  // Hôm nay xem gì ?
  nextPage: function (data) {
    const colItem = document.querySelectorAll(".colItem");
    colItem.forEach((resoures, index) => {
      resoures.onclick = (event) => {
        this.nextPag2FilmOdd(data, index);
      };
      this.nextPage3(data, index);
    });
  },
  //
  //
  // chuyển qua trang 2
  //
  nextPag2: function (data, index) {
    console.log(data);
    let urlImage = `https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}`;
    let urlImage2 = `https://image.tmdb.org/t/p/original/${data.results[index].backdrop_path}`;
    let urlVideo = `https://api.themoviedb.org/3/movie/${data.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
    fetch(urlVideo)
      .then((response) => {
        return response.json();
      })
      .then((resourses) => {
        let urlFilm;

        setTimeout(() => {
          if (data.results[index].media_type == "tv") {
            urlFilm = `https://www.2embed.ru/embed/tmdb/tv?id=${data.results[index].id}&s=1&e=1`;
          } else if (data.results[index].media_type == "movie") {
            urlFilm = `https://www.2embed.ru/embed/imdb/movie?id=${resourses.imdb_id}`;
          }
          iframe.src = urlFilm;
          pageoddMovie.style.display = "none";
          errorContainer.style.display = "none";
          searchResult.style.display = "none";
          page3.style.display = "none";
          MovieRemarkable.style.display = "none";
          content.style.display = "none";
          properties.style.display = "block";
          imageMovie.src = urlImage;
          title.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          realeaseDate.innerText = data.results[index].release_date
            ? data.results[index].release_date
            : data.results[index].first_air_date;
          description.innerText = data.results[index].overview;

          Object.assign(header.style, {
            backgroundImage: `url(${urlImage2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          });
          console.log(data);
          // Thay nội dung trang 3
          nameNamewatchmovie.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          nameMoviePage3.innerText = data.results[index].title
            ? data.results[index].title
            : data.results[index].name;
          descriptionPage3.innerText = data.results[index].overview;
          window.scrollTo(0, -6000);
        }, 200);
      });
  },
  //
  // chuyển sang trang 3
  nextPage3: function (data, locationMovie) {
    watchMovie.addEventListener("click", (event) => {
      resultSearch.style.display = "none";
      errorContainer.style.display = "block";
      properties.style.display = "none";
      page3.style.display = "block";
      nameMovieEnglish.innerText = "";
      episolePage3.innerText = "";
      header.style.background = "none";
    });
  },

  //
  //
  // Danh sách tập phim
  listEpisode: function (array, index) {
    // let listEpisodeMovie=document.querySelector('.list__episodeMovie');
    array.forEach((data, num, arr) => {
      var saveList = arr[index].listMovie.map((sourse, index) => {
        return `
             <span>${sourse.number}</span>
             `;
      });
      listEpisodeMovie.innerHTML = saveList.join();
    });
  },
  //
  //
  // Chức năng search
  serchMovie: function () {
    let resultSearch = document.querySelector(".result__search");
    inputs.addEventListener("keydown", (event) => {
      if (event.which == 13) {
        // Ẩn nội dung sau 500 milis
        setTimeout(() => {
          Object.assign(header.style, {
            background: "none",
          });
          resultSearch.style.display = "flex";
          MovieRemarkable.style.display = "none";
          content.style.display = "none";
          searchResult.style.display = "block ";
          pageoddMovie.style.display = "none";
          properties.style.display = "none";
          page3.style.display = "none";
          // Đặt lại iframe =null
          iframe.src = "";
        }, 500);
        let urlSearch = `https://api.themoviedb.org/3/search/multi?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=1&include_adult=false&query=${inputs.value}`;
        // Truy xuất đến API urlSearch
        fetch(urlSearch)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            // Lấy ra id của phim
            var ids = data.results.map((sourses, index) => {
              return sourses.id;
            });
            // Lấy ra link poster của phim
            var poster = data.results.map((sourses, index) => {
              return sourses.poster_path ?sourses.poster_path:'https://vnn-imgs-f.vgcloud.vn/2021/08/31/17/mu-rao-ruc-don-cristiano-ronaldo-tro-ve-nha.jpg';
            });
            var resultMap = data.results.map((sourses, index) => {
              let urlImage=`https://image.tmdb.org/t/p/w500/${ sourses.poster_path}`
              return `
                        <div class="upadateMovie__seriesMovie__item resultSearch__js">
                        <div class="image__search">
                       
                        <img src="${
                          sourses.poster_path?urlImage:'https://w0.peakpx.com/wallpaper/109/114/HD-wallpaper-ronaldo-cr7-cris-cristiano-cristiano-ronaldo-madrid-portugal-real-real-madrid-ronaldo-cristiano.jpg'
                        
                        }" alt="" class="col__image">
                    </div>
                    
                    <div class="infor__movie">
                        <span>${
                          sourses.original_title
                            ? sourses.original_title
                            : sourses.name
                        }</span>
                        <span>${
                          sourses.title ? sourses.title : sourses.original_name
                        }</span>
                    </div>
                </div>
                        `;
            });
            resultSearch.innerHTML = resultMap.join("");
            this.nextPageSearch(searchResult, data);
            // khi tìm kiếm thì đóng tab phim nổi bật
            // this.closeRemarkable();
          });
      }
    });
  },
  //
  //
  // 
  // đóng tab phim nổi bật
  closeRemarkable: function () {
    let headerContainer = document.querySelector(".header__container");
    MovieRemarkable.style.display = "none";
    Object.assign(header.style, {
      background: "none",
      height: "180px",
    });
    headerContainer.style.backgroundColor = "var(--161619-body)";
  },
  //
  //
  // Chuyển trang Search
  nextPageSearch: function (searchResult, arrayData) {
    console.log(arrayData);
    let colSearch = document.querySelectorAll(".resultSearch__js");
    colSearch.forEach((data, index) => {
      data.addEventListener("click", (event) => {
        // Lấy thông tin video từ id của data
        this.nextPag2(arrayData, index);
        let urlVideo = `https://api.themoviedb.org/3/movie/${arrayData.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
        fetch(urlVideo)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // Đọc thông tin bộ phim đang tìm kiếm bằng API
            let urlDetailMovie = `https://api.themoviedb.org/3/tv/${arrayData.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US`;
            fetch(urlDetailMovie)
              .then((responseDetail) => {
                return responseDetail.json();
              })
              .then((dataMovieDetail) => {
                // Tạo mảng chứa các tập phim của phim truyền hình
                if (arrayData.results[index].media_type == "tv") {
                  let arrayMovieTv = [];
                  // Lặp qua số tập phim đã phát sóng hiện tại và trả về mảng chứa các tập phim
                  for (
                    var i = 1;
                    i <= dataMovieDetail.last_episode_to_air.episode_number;
                    i++
                  ) {
                    arrayMovieTv.push(`Tập ${i}`);
                  }
                  // dùng map trả về html và render ra màn hình
                  let arrayHtmlEpisode = arrayMovieTv.map((data, index) => {
                    return `<span class="episode__list__JS">${data}</span>`;
                  });
                  listEpisodeMovie.innerHTML = arrayHtmlEpisode.join("");
                } else {
                  listEpisodeMovie.innerHTML = " ";
                }

                let urlVideos;
                if (arrayData.results[index].media_type == "tv") {
                  urlVideos = `https://www.2embed.ru/embed/tmdb/tv?id=${arrayData.results[index].id}&s=1&e=1`;
                  console.log(urlVideos);
                } else if (arrayData.results[index].media_type == "movie") {
                  urlVideos = `https:///www.2embed.ru/embed/imdb/movie?id=${data.imdb_id}`;
                }
                // Thay đổi đường dẫn thẻ iframe
                iframe.src = urlVideos;
                //
                // Khi click vào tập phim thì chuyển tập
                let episodelistJS =
                  document.querySelectorAll(".episode__list__JS");
                episodelistJS.forEach((data, indexs) => {
                  data.addEventListener("click", (event) => {
                    urlVideos = `https://www.2embed.ru/embed/tmdb/tv?id=${
                      arrayData.results[index].id
                    }&s=${dataMovieDetail.number_of_seasons}&e=${indexs + 1}`;
                    console.log(urlVideos);
                    iframe.src = urlVideos;
                    setTimeout(() => {
                      window.scrollBy(0, -1000);
                    }, 1000);
                  });
                });
                //
                //
                this.watchTraillerEvent(data, index);
              });
          });
        this.watchTraillerEvent(arrayData, index);
        this.nextPage3(arrayData, index);
      });
    });
  },
  //
  //
  //
  //
  // Hàm xem trailer
  watchTraillerEvent: function (array, index) {
    console.log(index);
    let urlVideo = `https://api.themoviedb.org/3/movie/${array.results[index].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
    fetch(urlVideo)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let urlVideo = ` https://www.2embed.ru/embed/imdb/movie?id=${data.imdb_id}`;
        // Thay đổi đường dẫn thẻ iframe
        //    this.watchTraillerEvent(data,index);

        let watchTrailerItem = document.querySelector(".watchTrailer__item");
        let watchTrailerItemVideo = document.querySelector(
          ".watchTrailer__item__video"
        );
        iframe.src = urlVideo;
        watchTraillerbutton.addEventListener("click", (event) => {
          watchTrailer.style.display = "flex";
          watchTrailerItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`;
          // Lấy ra key của trailer từ api
          let keyTrailler = data.videos.results.map((sourses, location) => {
            return `
                                
                                <div class="watchTrailer__item__iframe">
                                <div class="iframe__container">
                                <iframe class="iframe__trailer" width="400" height="315" src="https://www.youtube.com/embed/${sourses.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                </div>
                                `;
          });
          watchTrailerItemVideo.innerHTML = keyTrailler.join("");
          // Tắt trang xem trailer
        });
        let iframeTrailer = document.querySelectorAll(".iframe__trailer");
        watchTrailer.addEventListener("click", (event) => {
          // event.preventDefault();
          watchTrailer.style.display = "none";
          // Sau khi tắt đặt lại keyframe=null
          iframeTrailer.forEach((dataIframe) => {
            dataIframe.src = "";
          });
        });
      });
  },
  //
  //
  // Phim lẻ
  oddMovieCinema: function () {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=${numberPage++}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let saveFihm = data.results.map((resoures, index) => {
          return `
       <div class="upadateMovie__seriesMovie__item upadateMovie__seriesMovie__item__JS">               
                            <div class="image__search">
                                <img src="https://image.tmdb.org/t/p/w500/${
                                  resoures.poster_path
                                }" alt="" class="col__image">
                            </div>
                         
                            <div class="infor__movie">
                                <span>${
                                  resoures.title
                                    ? resoures.title
                                    : resoures.name
                                }</span>
                            </div>
                        </div>
       `;
        });
        pageoddMovieContainer.innerHTML = saveFihm;
        const colOddFihm = document.querySelectorAll(
          ".upadateMovie__seriesMovie__item__JS"
        );
        colOddFihm.forEach((dataCol, index) => {
          dataCol.onclick = (event) => {
            this.nextPag2FilmOdd(data, index);
            this.nextPage3(data, index);
          };
        });
      });
  },
  //
  //
  //Phim Bộ
  seriesMovieCinemal: function () {
    let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=${numberPage++}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let saveFihm = data.results.map((resoures, index) => {
          return `
        <div class="seriesMovieContainer__item seriesMovieItem__JS">
        <div class="image__search">
            <img src="https://image.tmdb.org/t/p/w500/${
              resoures.poster_path
            }" alt="" class="col__image">
        </div>
     
        <div class="infor__movie">
            <span>${resoures.title ? resoures.title : resoures.name}</span>
        </div>
        </div>
     `;
        });
        seriesMovieItemwrapper.innerHTML = saveFihm;
        const seriesMovieItemJS = document.querySelectorAll(
          ".seriesMovieItem__JS"
        );
        seriesMovieItemJS.forEach((dataCol, index) => {
          dataCol.onclick = (event) => {
            this.nexpage2FilmSeries(data, index);
            this.nextPage3(data, index);
          };
        });
      });
  },
  //
  //
  // Hàm xử lý sự kiện
  EventHandle: function () {
    // Khi click vào mục phim lẻ
    let pageoddMovieContainer = document.querySelector(
      ".pageoddMovie_Container"
    );
    oddMovieJS.addEventListener("click", (event) => {
      if (checkSearch) {
        this.oddMovieCinema();
        setTimeout(() => {
          MovieRemarkable.style.display = "none";
          header.style.background = "none";
          content.style.display = "none";
          // seriesMovieContainer.style.display="none";
          pageoddMovie.style.display = "block";
          searchResult.style.display = "none";
          resultSearch.style.display = "none";
        }, 500);
        checkSearch = false;
      } else if (
        properties.style.display == "block" ||
        page3.style.display == "block"
      ) {
        properties.style.display = "none";
        page3.style.display = "none";
        header.style.background = "none";
        pageoddMovie.style.display = "block";
      }else if(seriesMovieContainer.style.display=="block"){
        numberPage=1;
        seriesMovieContainer.style.display="none"
        pageoddMovie.style.display = "block";
        this.oddMovieCinema();
      }
    });
    // Khi click vào mục phim bộ
    seriesMovie.onclick = () => {
      if (checkSearch) {
        this.seriesMovieCinemal();
        setTimeout(() => {
          MovieRemarkable.style.display = "none";
          header.style.background = "none";
          content.style.display = "none";
          seriesMovieContainer.style.display = "block";
          searchResult.style.display = "none";
          resultSearch.style.display = "none";
        }, 500);
        checkSearch = false;
      } else if (
        properties.style.display == "block" ||
        page3.style.display == "block"
      ) {
        properties.style.display = "none";
        page3.style.display = "none";
        header.style.background = "none";
        seriesMovieContainer.style.display = "block";
      }
      else if(pageoddMovie.style.display=="block"){
        numberPage=1;
        pageoddMovie.style.display="none"
        seriesMovieContainer.style.display = "block";
        this.seriesMovieCinemal();
      }

    };
    //
    btnLoadNextSeries.onclick=(event)=>{
      setTimeout(() => {
        window.scrollBy(0, -6000);
      }, 300);
      setTimeout(() => {
        this.seriesMovieCinemal();
      }, 400);
    }
    // 
    btnloadNextSpan.onclick = (event) => {
      setTimeout(() => {
        window.scrollBy(0, -6000);
      }, 300);
      setTimeout(() => {
        this.oddMovieCinema();
      }, 400);
    };

    // Khi load lại trang web thì thay đổi phim thịnh hành
    window.onload = function (event) {
      var number = Math.floor(Math.random() * App.fihmPopular.length);
      fihmPopilarUpdate(number);
    };
  },
  //
  //
  //
  //
  setLoading: function () {
    let loading = document.querySelector(".loading");
    let loadingRun = document.querySelector(".loading__item");
    loading.style.display = "flex";
    setTimeout(() => {
      loadingRun.style.width = "200px";
    }, 1000);
    setTimeout(() => {
      loading.style.display = "none";
    }, 2000);
  },
  //
  //
  // render phim đề xuất ra giao diện
  newMovieRender: function (data2) {
    let urlPropose = `https://api.themoviedb.org/3/movie/${data2.id}/recommendations?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=1`;
    fetch(urlPropose)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let errorContainer = document.querySelector(".error__container");
        let arrayMap = data.results.map((resources, index) => {
          let urlImage = `https://image.tmdb.org/t/p/w500/${resources.poster_path}`;
          return `
        <div class="upadateMovie__container__error">
                           <div class="error__image">
                               <img src="${urlImage}" alt="">
                           </div>
                           <div class="error__infor">
                               <span>${resources.title}</span>
                               <div class="error__infor__icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                               </div>
                           </div>
                        </div>
        `;
        });
        let div = document.createElement("div");
        div.innerHTML = arrayMap.join("");
        errorContainer.appendChild(div);
        // chuyển qua trang 2
        let upadateMovieContainererror = document.querySelectorAll(
          ".upadateMovie__container__error"
        );
        upadateMovieContainererror.forEach((datas, index) => {
          datas.onclick = (event) => {
            page3.style.display = "none";
            watchMovieContainerList.innerHTML = "";
            this.nextPag2(data, index);
            watchMovie.onclick = (event) => {
              this.nextPage3(data, index);
            };
          };
        });
      });
  },
  //
  // Xem nhiều nhất
  trending: function () {
    let urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b`;
    fetch(urlTrending)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let hotMovieContainer = document.querySelector(".hotMovie_container");
        let returnTrending = data.results.map((resoures, index) => {
          let urlImage = `https://image.tmdb.org/t/p/w500/${resoures.poster_path}`;
          return `
                         <div class="hotMovie_container__item hotMovie_container__item_JS">
                            <div class="hotMovie_container__item__image">
                                <img src="${urlImage}" alt="">
                            </div>
                            <div class="hotMovie_container__item__infor">
                            <div class="hotMovie_container__item__infor__star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span>${
                                  resoures.title
                                    ? resoures.title
                                    : resoures.name
                                }</span>
                            </div>
                         </div>
        `;
        });
        hotMovieContainer.innerHTML = returnTrending.join(" ");
        let saveColTrending = document.querySelectorAll(
          ".hotMovie_container__item_JS"
        );
        saveColTrending.forEach((datas, index) => {
          datas.onclick = (event) => {
            this.nextPag2(data, index);
            this.nextPage3(data, index);
          };
        });
      });
  },
  //
  //
  star: function () {
    this.addMovie();
    this.nextPage();
    this.serchMovie();
    this.EventHandle();
    this.trending();
  },
};
App.star();
// Khi load lại trang
function loadPage() {
  notificationLoad.style.transform = "translate(0)";
  setTimeout(() => {
    notificationLoadSpan.style.width = "0";
  }, 2000);
}
// Bộ phim đề xuất
function fihmPopilarUpdate() {
  let urlApiTrending = `https://api.themoviedb.org/3/movie/now_playing?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&language=en-US&page=1`;
  fetch(urlApiTrending)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let dem = Math.floor(Math.random() * data.results.length);
      let urlImage = `https://image.tmdb.org/t/p/w500/${data.results[dem].poster_path}`;
      let urlImage2 = `https://image.tmdb.org/t/p/original/${data.results[dem].backdrop_path}`;
      let urlVideo = `https://api.themoviedb.org/3/movie/${data.results[dem].id}?api_key=afb2d4bd18bc4dcf8e4147b857d3cd3b&append_to_response=videos`;
      fetch(urlVideo)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let urlFilm = `https://www.2embed.ru/embed/imdb/movie?id=${data.imdb_id}`;
          iframe.src = urlFilm;
          App.newMovieRender(data);
        });
      MovieRemarkableImage.src = urlImage;
      MovieRemarkableInfor.innerText = data.results[dem].title
        ? data.results[dem].title
        : data.results[dem].name;
      MovieRemarkableDescription.innerText = data.results[dem].overview;
      Object.assign(header.style, {
        backgroundImage: `url(${urlImage2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      });
      return {
        data,
        dem,
      };
    })
    .then((data2) => {
      MovieRemarkableWatchnow.style.display = "flex";
      MovieRemarkablePopular.style.display = "block";
      MovieRemarkable.style.animation = "translateRemarkable ease 0.4s";
      remarkableSpan.onclick = (event) => {
        header.style.background = "none";
        MovieRemarkable.style.display = "none";
        page3.style.display = "block";
        nameNamewatchmovie.innerText = data2.data.results[data2.dem].title
          ? data2.data.results[data2.dem].title
          : data2.data.results[data2.dem].name;
        nameMoviePage3.innerText = data2.data.results[data2.dem].title
          ? data2.data.results[data2.dem].title
          : data2.data.results[data2.dem].name;
        descriptionPage3.innerText = data2.data.results[data2.dem].overview;
        nameMovieEnglish.innerText = "";
        episolePage3.innerText = "";
        window.scrollTo(0, -6000);
      };
    });
}
