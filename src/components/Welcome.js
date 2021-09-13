import PropTypes from 'prop-types';

const Welcome = ({name="Anthony",functionHello,children}) => {
    console.log(`props:`, name);
    return (
        <>
            <button onClick={() => functionHello(`My name is James Brown `)}>
                ClickMe
            </button>
            <p>{children} </p>
            <p>Bonjour {name} </p>
        </>
    );
};
export default Welcome

Welcome.defaultProps={
    name:"Anthony"
}
Welcome.propTypes = {
    name:PropTypes.string
}