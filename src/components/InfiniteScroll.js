import React, { useEffect, useRef, useState } from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([e]) => setEntry(e), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);
  return [setNode, entry];
};

const InfiniteScroll = ({
  callback,
  canLoadMore = true,
  loaderComponent,
  options,
  children,
}) => {
  const [ref, entry] = useIntersect(
    options || {
      rootMargin: "20px",
      threshold: 1,
    }
  );

  useEffect(() => {
    if (entry.isIntersecting) {
      callback();
    }
  }, [entry, callback]);

  return (
    <>
      {children}
      {canLoadMore && (
        <div ref={ref}>
          {loaderComponent || (
            <Progress className="mt-2" animated value={100} />
          )}
        </div>
      )}
    </>
  );
};

InfiniteScroll.propTypes = {
  callback: PropTypes.func,
  canLoadMore: PropTypes.bool,
  loaderComponent: PropTypes.any,
  options: PropTypes.object,
  children: PropTypes.any,
};

export default InfiniteScroll;
