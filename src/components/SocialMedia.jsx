import "./SocialMedia.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo } from "@fortawesome/free-solid-svg-icons";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post6 from "../assets/post6.png";

function SocialMedia() {
  const totalLikes = 1449;
  const posts = [
    {
      id: 1,
      image: post1,
      link: "https://www.instagram.com/canycoeducador/reel/DHWadKFMmgj/?hl=es",
      likes: 52,
      isReel: true,
    },
    {
      id: 2,
      image: post2,
      link: "https://www.instagram.com/canycoeducador/reel/DGsZSXCNPuv/?hl=es",
      likes: 53,
      isReel: true,
    },
    {
      id: 3,
      image: post3,
      link: "https://www.instagram.com/canycoeducador/p/DGOZ767tum7/?hl=es",
      likes: 35,
      isReel: true,
    },
    {
      id: 4,
      image: post4,
      link: "https://www.instagram.com/canycoeducador/reel/DFlHD2CNP6W/?hl=es",
      likes: 69,
      isReel: true,
    },
    {
      id: 5,
      image: post5,
      link: "https://www.instagram.com/canycoeducador/p/DFDrXMyNjKy/?hl=es",
      likes: 34,
      isReel: true,
    },
    {
      id: 6,
      image: post6,
      link: "https://www.instagram.com/canycoeducador/reel/DEXwiP6NI9Z/?hl=es",
      likes: 99,
      isReel: true,
    },
  ];

  return (
    <section className="main_section socialMedia" id="socialMedia">
      <div className="socialMedia-header">
        <FontAwesomeIcon icon={faHeart} />
        <h3 className="main_section-title">{totalLikes} me gustas y sumando...</h3>
      </div>
      <div className="socialMedia-posts">
        {posts.map((post) => (
          <div key={post.id} className="socialMedia-card">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="socialMedia-image-wrapper">
                <img src={post.image} alt={`Post ${post.id}`} />
                <div className="socialMedia-overlay">
                  <div className="socialMedia-stats">
                    <span>
                      <FontAwesomeIcon icon={faHeart} /> {post.likes}
                    </span>
                  </div>
                  {post.isReel && (
                    <div className="socialMedia-multiple-icon">
                      <FontAwesomeIcon icon={faVideo} />
                    </div>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialMedia;
