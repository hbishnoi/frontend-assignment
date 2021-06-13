import moment from "moment";
import {
  ModalBox,
  ModalContent,
  MovieTitle,
  CloseButton,
  MovieContent,
  MoviePosterId,
  ReleaseDate,
  Overview,
  Rating,
} from "./ModalStyle";
import noImage from "../../images/no_image.jpeg";

const Modal = ({ modal, setMovieModal, movie }) => {
  const imageUrl = process.env.REACT_APP_API_BASE_IMAGE_URL;
  const handleChange = () => {
    setMovieModal(false);
  };
  if (modal) {
    return (
      <ModalBox>
        <ModalContent>
          <MovieTitle className="modal-header">
            <CloseButton onClick={handleChange}>X</CloseButton>
            <h3>{movie.title}</h3>
          </MovieTitle>
          <MovieContent>
            <MoviePosterId
              className="movie-poster"
              src={movie.poster_path ? imageUrl + movie.poster_path : noImage}
            />
            <div>
              <ReleaseDate>
                <b>Release Date:</b>{" "}
                {moment(movie.release_date).format("MMMM DD, YYYY")}
              </ReleaseDate>
              <Overview>{movie.overview}</Overview>
              <Rating>
                <b>{movie.vote_average}</b> / 10 ({movie.vote_count} total
                votes)
              </Rating>
            </div>
          </MovieContent>
        </ModalContent>
      </ModalBox>
    );
  } else {
    return null;
  }
};
export default Modal;
