import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          <a
            href="https://princesargbah.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            Edwin Richard
          </a>
          “Well, some people ask if I’m really a king. And I always wonder why no one asks if I’m really a monkey.” — Monkey King
        </p>
      </footer>
    );
  }
}

export default Footer;