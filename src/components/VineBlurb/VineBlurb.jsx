import React from "react"
import "./VineBlurb.scss"

const VineBlurb = ({ blurb }) => {
  return (
    <div className="vineblurb">
      <img
        src="https://cloud-qzbietd9d-hack-club-bot.vercel.app/0screen_shot_2021-06-06_at_11.15.54_pm.png"
        alt="Vine"
        className="vine"
      />
      <h2 className="blurb">{blurb}</h2>
      <img
        src="https://cloud-qzbietd9d-hack-club-bot.vercel.app/1screen_shot_2021-06-06_at_11.16.11_pm.png"
        alt="Vine"
        className="vine"
      />
    </div>
  )
}

export default VineBlurb
