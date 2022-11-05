import './Collection.styles.scss';

const Collection = ({ columnSize, children }) =>
  (
    <div className="collection" style={columnSize ? {
      gridTemplateColumns: `repeat(auto-fill, minmax(${columnSize}, 1fr))`,
    } : undefined}>
      {children}
    </div>
  );

export default Collection;
