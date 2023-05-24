import { Link } from "react-router-dom";
import "./styles.scss";

const PLACEHOLDER_IMG_URL =
  "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// const PLACEHOLDER_IMG_URL = "https://via.placeholder.com/600x400?text=";

export type ICityProps = {
  name: string;
  imgUrl?: string;
  urlPathName?: string;
};

const City = ({ name, imgUrl = "", urlPathName = "" }: ICityProps): JSX.Element => {
  return (
    <Link
      to={`/city/${
        urlPathName
          ? (urlPathName as string).toLocaleLowerCase()
          : name.toLocaleLowerCase()
      }`}
      className="city"
    >
      <div className="city-wrapper">
        <div className="city-img">
          <img
            src={imgUrl ? imgUrl : PLACEHOLDER_IMG_URL}
            alt={`${name} image`}
          />
        </div>
        <div className="city-info">
          <span className="city-info__city-letter">
            {name.charAt(0).toLocaleUpperCase()}
          </span>
          <h2 className="city-info__name">{name}</h2>
          <button className="navigation-btn">
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default City;
