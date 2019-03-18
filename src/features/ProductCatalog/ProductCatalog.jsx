import React, { Component } from 'react';

class ProductCatalog extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.listProducts();
    }
    
    componentWillReceiveProps(nextProps) {
        // This method runs when incoming props (e.g., route params) change
        this.props.listProducts();
    }

    render()
    {
        const content = this.props.isLoading ? <div>loading...</div>
        : <div>{renderProducList(this.props)}</div>

        return (
            <div>
              {content}
            </div>
        );
    }
}

function renderProducList(props)
{
    return(
        <div>product list, todo...</div>
    );   
}

export default ProductCatalog;