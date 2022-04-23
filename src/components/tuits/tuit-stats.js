import React from "react";


const TuitStats = ({tuit, likeTuit = () => {}, bookmarkTuit = () => {}}) => {

const TuitStats = ({tuit, likeTuit = () => {}, bookmark = () => {}}) => {

    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 &&
                  <i className="fas fa-heart me-1" style={{color: 'red'}}></i>
              }
              {
                tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 &&
                  <i className="far fa-heart me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>

          <div className= "col">
              <i onClick={bookmarkTuit} className={" fa-solid fa-bookmark"} ></i>

          <div className="col">
              <i onClick={() => bookmark(tuit)} className="fa-regular fa-bookmark "/>
          </div>
      </div>
    );
}
export default TuitStats;