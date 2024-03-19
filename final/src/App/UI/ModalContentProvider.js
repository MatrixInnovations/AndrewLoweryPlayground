export default class ModalContentProvider {
  constructor() {
    this.modalContents = {
      aboutMe: {
        title: 'About me',
        imageUrl: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/406515838_10160334020178823_1227164133985273260_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LplcLrxKMfMAX-bbh8v&_nc_oc=AQn1k9Aot6OjN5Oj_f4_vr2TIOCEO3RUZTwPStE3j1SRQo75LGSAa71xFDN3s2C2Hz0&_nc_ht=scontent-iad3-2.xx&oh=00_AfAqljcTvRpTkTck36CroXZ9fnEOmwtDLj0JK1bt6TO3Fg&oe=65FC74A9',
        description: 'A highly ambitious young man committed to achieving excellence at the highest level. Recognizes the significance of diligence, unshakeable commitment, and above all, fostering strong bonds with others. Prefers leading through actions rather than mere words. Diligently conducts research to refine ideas and broaden perspectives, actively seeking guidance from mentors and industry trailblazers. Holds integrity in the highest regard—considered one of his most cherished traits. Takes words seriously, ensuring accountability for actions and readily acknowledging and learning from mistakes.',
      },
      projects: {
        title: 'React Fullstack Web Application',
        imageUrl: "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/426226841_10160431317543823_8373071419347349850_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eBY514ukxo0AX_x6fen&_nc_ht=scontent-iad3-2.xx&oh=00_AfCeRR9IWzLGCODTgyzSQmhojDJpmiGE-4QqArij4KvXww&oe=65FDDD0E",
        description: 'Architected an image recognition app with machine learning API in React. Enhanced skills in ML integration, front-end development, and API handling. Proactively tackled challenges, ensuring seamless synergy between AI and user interface. Web App URL: <a href="https://mindgames-y5b6.onrender.com">MindGamesApp</a>',
      },
      contactMe: {
        title: 'Contact Me',
        imageUrl: "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/433310477_10160502591193823_4229246745620323200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WwBKREQ_SNoAX97C8mZ&_nc_ht=scontent-iad3-2.xx&oh=00_AfDEQVpuD4dxDUKlPWk3ycfyc3jROvWTOTk7AmPu20YuLQ&oe=65FD6F31",
        description: 'LinkedIn: <a href="https://linkedin.com/in/andrew-lowery-geekazon" target="_blank">linkedin.com/in/andrew-lowery-geekazon</a>',
      },
    };
  } 

  getModalInfo(portalName) {
    return this.modalContents[portalName];
  }
}
