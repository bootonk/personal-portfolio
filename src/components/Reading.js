import React from "react";
import book from "../assets/book.png";

export default function Reading() {
  return (
    <div className="flip-block">
      <img src={book} alt="book" className="flip-img" />
      <div className="content">
        <div className="front">
          <h3>I'm reading...</h3>
        </div>
        <div className="back">
          <ul>
            <li>
              <p>
                <a href="https://www.goodreads.com/en/book/show/4099">
                  The Pragmatic Programmer
                </a>{" "}
                by Andrew Hunt & David Thomas. (The 20th Anniversary Edition of
                course!)
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.goodreads.com/book/show/35074096-mythos?ref=nav_sb_ss_1_6">
                  Mythos: The Greek Myths Retold
                </a>{" "}
                by Stephen Fry
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.goodreads.com/book/show/24983.Doomsday_Book?ac=1&from_search=true&qid=9WK22R6M4N&rank=1">
                  Dooms Day Book
                </a>{" "}
                by Connie Willis
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
