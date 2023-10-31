interface propsData {
   profilePicture:  string,
    name:  string, 
   location: string,  
    postPicture: string,  
}

function InstagramPost ({profilePicture, name , location, postPicture}: propsData){
 return(
   <main>
   <section className="container">
     <div className="data-container">
       <img
         src={profilePicture}
         alt="perfil"
         className="profilePicture"
       />
       <div className="profile-text-container">
         <h4 className="profileName">{name}</h4>
         <p className="location">{location}</p>
       </div>
     </div>
     <img
       src= {postPicture}
       alt=""
       className="post-image"
     />
     <div className="likes-container">
       curtidas e comentários 
     </div>
   </section>
 </main>
 )
}

export default InstagramPost