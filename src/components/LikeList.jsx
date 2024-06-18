import React, { useState } from "react";

import like_full from "@/assets/icon/like_full.png";
import like_empty from "@/assets/icon/like_empty.png";

function LikeList() {
  const [showLike, setShowLike] = useState(false);

  const toggleImage = () => {
    setShowLike(!showLike);
  };

  return (
    <div className="App">
      <button onClick={toggleImage}>
        {!showLike ? (
          <img src={like_empty} alt="First" />
        ) : (
          <img src={like_full} alt="Second" />
        )}
      </button>
    </div>
  );
}

export default LikeList;
