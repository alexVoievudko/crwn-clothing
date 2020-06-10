import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../hoc/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapSateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapSateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
