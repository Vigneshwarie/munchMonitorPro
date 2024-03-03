import { useRouteError } from 'react-router-dom';
import errorcat from '../assets/errorcat.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={errorcat}/>
    </div>
  );
}