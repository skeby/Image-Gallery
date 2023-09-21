import "./style.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for could not be found.</p>
      <a href="/">Go to home page</a>
    </div>
  );
};

export default NotFoundPage;
