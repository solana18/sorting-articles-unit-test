import React from "react";

function Articles({articles}) {
  return (
    <div className="table-wrap w-50 mx-auto p-3 table-responsive">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((item, index) => {
            return (
              <tr data-testid="article" key={index}>
                <td data-testid="article-title">{item.title}</td>
                <td data-testid="article-upvotes">{item.upvotes}</td>
                <td data-testid="article-date">{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
