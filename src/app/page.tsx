import InstagramPost from "./components/instagram/InstagramPost";

export default function Home() {
  return (
    <main>
      <section>
        <div className="data-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="perfil"
            className="profilePicture"
          />
          <div>
            <h3 className="profileName">Nome</h3>
            <p className="location">Localização</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNi-Oz3UZSl4cQli_D0FmVTZhUUaGxviO2g&usqp=CAU"
          alt=""
          className="post-image"
          
        />
      </section>
    </main>
  );
}
