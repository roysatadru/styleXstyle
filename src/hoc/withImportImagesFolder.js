const withImportImagesFolder = (WrappedComponent, requireFunction) => {
  const importAll = r => {
    return r.keys().map(r);
  };
  const images = importAll(requireFunction).map(item => item.default);
  return props => {
    return <WrappedComponent {...props} allImagesList={[...images]} />;
  };
};

export default withImportImagesFolder;
