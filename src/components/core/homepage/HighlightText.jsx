import React from "react";

const HighlightText = ({text}) => {
  return (
<span className="bg-gradient-to-b from-[#70aded] via-[#8e12fa] to-[#2f02d1] text-transparent bg-clip-text font-bold">
  {text}
</span>



  );
};

export default HighlightText;
