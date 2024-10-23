// import React from 'react'
// import { Profilecards } from './Profilecards'
// import zoro from "./Img/zoro.png"
// import ichigo from "./Img/ichigo.png"
// import shanks from "./Img/shanks.jpg"

// import aizen from "./Img/aizen.jpeg"
// import luffy from "./Img/luffy.jpeg"
// import goku from "./Img/goku.png"
// export const Profile = () => {
//     return (
//         <div>
//             <div className="heading">
//                 <h1>ANI-WATCH</h1>
//             </div>
//             <div className="container">
//                 <Profilecards image={zoro} name={"ZOROJURO"} model={"One piece"} />
//                 <Profilecards image={ichigo} name={"KUROSAKI ICHIGO"} model={"Bleach"} />
//                 <Profilecards image={shanks} name={"AKAGAMI SHANKS"} model={"One piece"} />
                
//                 <Profilecards image={aizen} name={"SOSUKE AIZEN"} model={"Bleach"} />
//                 <Profilecards image={luffy} name={"MONKEY D LUFFY"} model={"One piece"} />
//                 <Profilecards image={goku} name={"SON GOKU"} model={"Dragon ball"} />
//             </div>
//         </div>
//     )
// }

import React from 'react';
import { Profilecards } from './Profilecards';

const profiles = [
  { image: require("./Img/zoro.png"), name: "ZOROJURO", model: "One piece" },
  { image: require("./Img/ichigo.png"), name: "KUROSAKI ICHIGO", model: "Bleach" },
  { image: require("./Img/shanks.jpg"), name: "AKAGAMI SHANKS", model: "One piece" },
  { image: require("./Img/aizen.jpeg"), name: "SOSUKE AIZEN", model: "Bleach" },
  { image: require("./Img/luffy.jpeg"), name: "MONKEY D LUFFY", model: "One piece" },
  { image: require("./Img/goku.png"), name: "SON GOKU", model: "Dragon ball" },
];

export const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">ANI-WATCH</h1>
              <div className="row">
                {profiles.map((profile, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <Profilecards image={profile.image} name={profile.name} model={profile.model} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};