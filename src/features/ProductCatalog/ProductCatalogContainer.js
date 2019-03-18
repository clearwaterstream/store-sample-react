import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCatalog from './ProductCatalog';
import { actionCreators } from 'redux/modules/productCatalog.js';

export default connect(
    state => state.productCatalog,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(ProductCatalog);  