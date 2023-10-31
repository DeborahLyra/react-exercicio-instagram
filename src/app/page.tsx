import InstagramPost from "./components/instagram/InstagramPost";

export default function Home() {
  return (
  <>
  <InstagramPost 
    profilePicture = {"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
    name= "Mary"
    location= "Brasil"
    postPicture= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNi-Oz3UZSl4cQli_D0FmVTZhUUaGxviO2g&usqp=CAU"}
  />
  </>
  );
}
