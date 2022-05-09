import './info.scss';

const Info = ({total, increased}) => {
    return (
        <div className="info">
            <h1>Employess List</h1>
            <h2>Total count: {total}</h2>
            <h2>Will receive the bonus: {increased}</h2>
        </div>
    );
}

export default Info;