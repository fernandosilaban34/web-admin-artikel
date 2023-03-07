import PropTypes from 'prop-types';

export default function Profile({ data }) {
  return (
    <div>
      <p>
        Hai,
        {data}
      </p>
    </div>
  );
}
Profile.propTypes = {
  data: PropTypes.string,
};

Profile.defaultProps = {
  data: 'Data Tidak ada',
};
