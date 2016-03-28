import React from 'react';
import { Button } from '../button/button';

export class SearchBox extends React.Component {

  render() {

    return (
      <div {...this.props} className="searchBoxComponent">
        <form>

          <input 
            type="text" 
            placeholder="Search"
            onChange={(e) => {
              this.props.filterContacts(e.target.value)
            }}
            style={{
              fontSize: "11px",
              height: "30px",
              width: "178px",
              padding: "0 12px"
            }}/>

          <Button 
            disabled={true} 
            style={{
              cursor: "default",
              width: "35px"
            }}>

            <i className="fa fa-search"></i>
          </Button>

        </form>
      </div>
    );
  }
}
