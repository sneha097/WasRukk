import React from "react";
import Header from "./Header";
import "../about.css"

export default function About() {
    return (
        <><Header />
            <div className="about-us">

                <h1 className="abt-ws">
                    About<p className="was">WasRuk</p>
                </h1>
                <h2 className="better">
                    Manage your waste Better
                </h2>
                <p className="pg">A report reveals that the Indian government imports
                    45 million tons of garbage every year from different
                    countries. Not only this, but this number also
                    increases by 4 percent every year.
                </p>
                <p className="pg1">
                    On the other hand, INDIA produces 65 million tons of
                    waste every year which is of no use as it is not segregated.
                    All this waste is being dumped on free land if this
                    continues then in the coming years every city will
                    have several number of “waste mountains”.
                </p>
                <p className="pg2">
                    We are revolutionizing the field of waste management
                    by changing the behavior and mindset of people towards
                    waste. It will be done by making them aware that they
                    can monetize their waste.
                </p>

            </div>
        </>
    )
}