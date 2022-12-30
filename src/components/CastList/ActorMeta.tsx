import PropTypes from "prop-types";

const ActorMeta = ({ name = "No info", character = "No info" }) => {
  return (
    <div>
      <p>
        <span>Actor name: </span>
        {name}
      </p>
      <p>
        <span>Charachter: </span>
        {character}
      </p>
    </div>
  );
};

ActorMeta.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
};

export default ActorMeta;
