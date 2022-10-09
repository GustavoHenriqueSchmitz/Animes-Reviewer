import { useState, useEffect } from 'react';

// Function GetWindowSize, to get the width window size
function GetWindowSize() {
  // useStates variables
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000)

  // Check the window size for the rendering
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  return isDesktop
}

export { GetWindowSize }
